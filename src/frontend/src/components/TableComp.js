import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
];

export default function TableComp(props) {
  return (
    <Table
      dataSource={props.data}
      columns={columns}
      bordered
      rowKey={(student) => student.id}
      title={() => "Student Details"}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 240 }}
    />
  );
}
