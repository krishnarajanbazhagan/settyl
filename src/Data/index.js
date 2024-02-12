import axios from "axios";

export const getEmployees = () => {
  return fetch("https://dummy.restapiexample.com/api/v1/employees").then(
    (res) => res.json()
  );
};

export const createEmployee = (employeeData) => {
  return axios.post("https://dummy.restapiexample.com/api/v1/create", employeeData)
    .then(response => response.data)
    .catch(error => console.error("There was an error creating the employee:", error));
};

export const updateEmployee = (id, employeeData) => {
  return axios.put(`https://dummy.restapiexample.com/api/v1/update/${id}`, employeeData)
    .then(response => response.data)
    .catch(error => console.error("There was an error updating the employee:", error));
};

export const deleteEmployee = (id) => {
  return axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
    .then(response => response.data)
    .catch(error => console.error("There was an error deleting the employee:", error));
};
export const getEmployeeById = (id) => {
  return axios.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
    .then(response => response.data)
    .catch(error => console.error("There was an error fetching the employee details:", error));
};

export const getOrder = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenueData = () => {
  return axios.get("https://dummyjson.com/carts").then((res) => res.data);
};

export const getInventory = () => {
  return axios.get("https://dummyjson.com/products").then((res) => res.data);
};

export const getCustomers = () => {
  return axios.get("https://dummyjson.com/users").then((res) => res.data);
};

export const getComment = () => {
  return axios.get("https://dummyjson.com/comments").then((res) => res.data);
};
