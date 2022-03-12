import React from "react";
import { Popconfirm, Radio } from "antd";
import { deleteStudent } from "../clients";
import { successNotification } from "./Notification";

export default function Actions(props) {
  async function removeStudent(e) {
    await deleteStudent(props.id);
    successNotification(
      "Student successfully deleted",
      `Student with id ${props.id} was deleted`
    );
    props.fetchStudents();
  }

  return (
    <Radio.Group value="small">
      <Popconfirm
        title={`Are you sure to delete ${props.name}`}
        onConfirm={removeStudent}
        okText="Yes"
        cancelText="No"
      >
        <Radio.Button value="delete">Delete</Radio.Button>
      </Popconfirm>

      <Radio.Button value="edit">Edit</Radio.Button>
    </Radio.Group>
  );
}
