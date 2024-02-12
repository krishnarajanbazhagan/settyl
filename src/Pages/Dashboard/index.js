import { Card, Space, Typography } from "antd";
import { useEffect, useState } from "react";
import Chart from "../../Components/Chart";
import ChildComponent from "../../Components/ChildComponent";
import { DSCards } from "../../Components/DScards";
import EmployeeList from "../../Components/EmployeeList";
import { getEmployees } from "../../Data";

export const DashBoard = () => {
  const [isLoading, setisLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [employeeData, setemployeeData] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setisLoading(true);
    getEmployees().then((res) => {
      setemployeeData(res.data?.length);
      setDataSource(res?.data || []);
      setisLoading(false);
    });
  };
  return (
    <div className="dashboard">
      <Space direction="vertical" size={"small"} wrap={true} key={"12"}>
        <Typography.Title level={3}></Typography.Title>
        <DSCards employeeData={employeeData} />
        <Space direction="horizontal" wrap={true} key={"23"}>
          <EmployeeList isLoading={isLoading} dataSource={dataSource} />
          <Card>
            <Chart />
          </Card>
        </Space>
        <Typography.Title level={3}>
          Change Parent State From Child
        </Typography.Title>
        <ChildComponent inputValue={inputValue} setInputValue={setInputValue} />
        <h2>{inputValue || ""}</h2>
      </Space>
    </div>
  );
};
