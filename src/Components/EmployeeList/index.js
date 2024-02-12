import { Table, Typography, Button, Modal } from "antd";
import { useState } from "react";
import EmployeeForm from '../../Components/EmployeeForm';

import { createEmployee, updateEmployee, deleteEmployee } from "../../Data";

const EmployeeList = ({ isLoading, dataSource }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalData, setModalData] = useState({});

  const handleCreate = async (employeeData) => {
    try {
      await createEmployee(employeeData);
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  const handleUpdate = async (id, employeeData) => {
    try {
      await updateEmployee(id, employeeData);
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: 1 },
    { title: "Name", dataIndex: "employee_name", key: 2, align: "center" },
    { title: "Age", dataIndex: "employee_age", key: 3, align: "center" },
    { title: "Salary", dataIndex: "employee_salary", key: 4, align: "center" },
    { title: "Actions", key: 5, align: "center", render: (text, record) => (
        <div>
          <Button onClick={() => {
            setModalTitle('Edit Employee');
            setModalData(record);
            setIsModalVisible(true);
          }}>Edit</Button>
          <Button onClick={() => handleDelete(record.id)}>Delete</Button>
        </div>
      )
    }
  ];

  return (
    <div className="employeeList">
      <Typography.Title level={5}>Employee List</Typography.Title>
      <Table
        columns={columns}
        loading={isLoading}
        dataSource={dataSource?.length > 0 ? dataSource : []}
        pagination={false}
        bordered={true}
        style={{ maxHeight: "300px", overflow: "auto" }}
      />
      <Modal
        title={modalTitle}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <EmployeeForm
          onSubmit={modalTitle === 'Edit Employee' ? handleUpdate : handleCreate}
          initialData={modalData}
        />
      </Modal>
    </div>
  );
};

export default EmployeeList;
