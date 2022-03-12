import { getAllStudents } from "./clients";
import React, { useEffect, useState } from "react";
import SiderDemo from "./components/SiderDemo";
import "./App.css";
import { errorNotification } from "./components/Notification";

function App() {
  const [students, setStudents] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchStudents = async () => {
    try {
      const data = await getAllStudents();
      setStudents(data.data);
    } catch (err) {
      const errObj = err.response.data;
      errorNotification(
        "There was an issue",
        `${errObj.message} [${errObj.status}] ${errObj.error}`
      );
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <SiderDemo
      isFetching={isFetching}
      data={students}
      fetchStudents={fetchStudents}
    />
  );
}

export default App;
