import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getEmployees } from "../../Data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const [employeeData, setEmployeeData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    getEmployees().then((res) => {
      let labels = res.data.map((employee) => {
        return employee.id.toString(); // Convert ID to string
      });
  
      let salaries = res.data.map((employee) => {
        return employee.employee_salary;
      });
  
      const data = {
        labels,
        datasets: [
          {
            label: "Employee Salary",
            data: salaries,
            backgroundColor: "blue",
          },
        ],
      };
      setEmployeeData(data);
    });
  }, []);
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Employee Salaries",
      },
    },
  };

  return (
    <div className="chartshow">
      <Bar options={options} data={employeeData} style={{ width: 400 }} />
    </div>
  );
};

export default Chart;
