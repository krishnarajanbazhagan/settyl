import { Typography } from "antd";
import "./index.css";

const { Title } = Typography;

const SideMenu = () => {
  return (
    <div className="sidemenu">
      <div className="welcome-message">
        <Title level={4}>Employee Record</Title>
        
      </div>
    </div>
  );
};

export default SideMenu;
