import { Badge, Drawer } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Typography } from "antd";

export const Notification = () => {
  const [openNoti, setopenNoti] = useState(false);

  return (
    <div className="notification">
      <Badge count={0} title="Notifications">
        <BellOutlined
          style={{ fontSize: 24 }}
          onClick={() => setopenNoti(true)}
        />
      </Badge>
      <Drawer
        title="Notifications"
        open={openNoti}
        onClose={() => setopenNoti(false)}
        width={300}
      >
        <Typography.Text>There are no notifications.</Typography.Text>
      </Drawer>
    </div>
  );
};
