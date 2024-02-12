import { ShoppingCartOutlined } from "@ant-design/icons";
import { Space } from "antd";
import { DSCard } from "../DSCard";

export const DSCards = ({ employeeData, revenueData }) => {
  const style = {
    fontSize: 22,
    color: "green",
    backgroundColor: "#bef5a9",
    borderRadius: 20,
    padding: 8,
  };
  return (
    <div className="dscards">
      <Space direction="horizontal" wrap={true}>
        <DSCard
          icon={<ShoppingCartOutlined style={style} />}
          title={"Employees"}
          number={employeeData}
        />
      </Space>
    </div>
  );
};
