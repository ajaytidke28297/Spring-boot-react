import React, { useState } from "react";
import { Badge, Table, Button, Tag, Empty } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import StudentDrawerForm from "./StudentDrawerForm";
import TheAvatar from "./UI/TheAvatar";
import Actions from "./Actions";
import Spinner from "./UI/Spinner";

export default function TableComp(props) {
  const [showDrawer, setShowDrawer] = useState(false);
  const isFetching = props.isFetching;

  const columns = [
    {
      title: "",
      dataIndex: "avatar",
      key: "avatar",
      render: (text, student) => <TheAvatar name={student.name} />,
    },
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
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, student) => (
        <Actions
          name={student.name}
          id={student.id}
          fetchStudents={props.fetchStudents}
        />
      ),
    },
  ];

  return (
    <React.Fragment>
      {isFetching && <Spinner />}
      {!isFetching && props.data.length === 0 && (
        <React.Fragment>
          <Button
            onClick={() => setShowDrawer(!showDrawer)}
            type="primary"
            shape="round"
            icon={<PlusCircleOutlined />}
            size="small"
          >
            Add New Student
          </Button>
          <StudentDrawerForm
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            fetchStudents={props.fetchStudents}
          />
          <Empty />
        </React.Fragment>
      )}
      {!isFetching && props.data.length !== 0 && (
        <React.Fragment>
          <StudentDrawerForm
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
            fetchStudents={props.fetchStudents}
          />
          <Table
            dataSource={props.data}
            columns={columns}
            bordered
            rowKey={(student) => student.id}
            title={() => (
              <React.Fragment>
                <Tag className="tag-class">Number of Students</Tag>
                <Badge
                  count={props.data.length}
                  style={{ backgroundColor: "#2db7f5" }}
                />
                <br />
                <br />
                <Button
                  onClick={() => setShowDrawer(!showDrawer)}
                  type="primary"
                  shape="round"
                  icon={<PlusCircleOutlined />}
                  size="small"
                >
                  Add New Student
                </Button>
              </React.Fragment>
            )}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 500 }}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
