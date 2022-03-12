import axios from "axios";

export const getAllStudents = async () => {
  const data = await axios.get("api/v1/students");
  return data;
};

export const addNewStudent = async (student) =>
  await axios.post("api/v1/students", student, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const deleteStudent = async (studentId) =>
  await axios.delete(`api/v1/students/${studentId}`);
