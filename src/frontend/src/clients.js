import axios from "axios";

export const getAllStudents = () => axios.get("api/v1/students");

export const addNewStudent = (student) =>
  axios.post("api/v1/students", student, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const deleteStudent = (studentId) =>
  axios.delete(`api/v1/students/${studentId}`);
