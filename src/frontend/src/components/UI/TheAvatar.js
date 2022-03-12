import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function TheAvatar(props) {
  const name = props.name;
  let trim = name.trim();
  if (trim.length === 0) {
    return <Avatar icon={<UserOutlined />} />;
  }
  const split = trim.split(" ");
  if (split.length === 1) {
    return <Avatar>{name.charAt(0)}</Avatar>;
  }
  return <Avatar>{`${name.charAt(0)}${name.charAt(name.length - 1)}`}</Avatar>;
}
