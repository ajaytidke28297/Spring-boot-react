import { Drawer, Input, Col, Select, Form, Row, Button } from "antd";
import { useState } from "react";
import { addNewStudent } from "../clients";
import { successNotification, errorNotification } from "./Notification";
import Spinner from "./UI/Spinner";

const { Option } = Select;

function StudentDrawerForm({ showDrawer, setShowDrawer, fetchStudents }) {
  const onCLose = () => setShowDrawer(false);
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (student) => {
    setSubmitting(true);
    try {
      const response = await addNewStudent(student);
      if (response.status !== 200) {
        throw new Error("Unable to save the Student detail");
      }
      successNotification(
        "Student successfully added",
        `${student.name} was added to the system`
      );
      fetchStudents();
      onCLose();
    } catch (error) {
      const errObj = error.response.data;
      errorNotification(
        "There was an issue",
        `${errObj.message} [${errObj.status}] ${errObj.error}`,
        "bottomLeft"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    alert(JSON.stringify(errorInfo, null, 2));
  };

  return (
    <Drawer
      title="Create new student"
      width={720}
      onClose={onCLose}
      visible={showDrawer}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button onClick={onCLose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
        </div>
      }
    >
      <Form
        layout="vertical"
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        hideRequiredMark
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter student name" }]}
            >
              <Input placeholder="Please enter student name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter student email" },
              ]}
            >
              <Input placeholder="Please enter student email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="gender"
              label="gender"
              rules={[{ required: true, message: "Please select a gender" }]}
            >
              <Select placeholder="Please select a gender">
                <Option value="MALE">MALE</Option>
                <Option value="FEMALE">FEMALE</Option>
                <Option value="OTHER">OTHER</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row>{submitting && <Spinner />}</Row>
      </Form>
    </Drawer>
  );
}

export default StudentDrawerForm;
