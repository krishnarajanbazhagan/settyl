import { Badge, Drawer } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Typography } from "antd";

export const Mail = () => {
  const [openNoti, setopenNoti] = useState(false);

  return (
    <div className="mails">
      <Badge count={0} title="Mails" dot>
        <MailOutlined
          style={{ fontSize: 24 }}
          onClick={() => setopenNoti(true)}
        />
      </Badge>
      <Drawer
        title="Mails"
        open={openNoti}
        onClose={() => setopenNoti(false)}
        width={300}
      >
        <Typography.Text>There are no mails.</Typography.Text>
      </Drawer>
    </div>
  );
};
