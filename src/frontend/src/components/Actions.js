import React from "react";
import { Popconfirm, Radio } from "antd";
import { deleteStudent } from "../clients";
import { errorNotification, successNotification } from "./Notification";

export default function Actions(props) {
  async function removeStudent(e) {
    try {
      await deleteStudent(props.id);
      successNotification(
        "Student successfully deleted",
        `Student with id ${props.id} was deleted`
      );
      props.fetchStudents();
    } catch (err) {
      const errObj = err.response.data;
      errorNotification(
        "There was an issue",
        `${errObj.message} [${errObj.status}] ${errObj.error}`
      );
    }
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
