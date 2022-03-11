import axios from "axios";

export const getAllStudents = async () => {
  const data = await axios.get("api/v1/students");
  return data;
};
