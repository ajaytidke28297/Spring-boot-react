import { getAllStudents } from "./clients";
import React, { useEffect, useState } from "react";
import SiderDemo from "./components/SiderDemo";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchStudents = async () => {
    const data = await getAllStudents();
    setStudents(data.data);
    setIsFetching(false);
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
