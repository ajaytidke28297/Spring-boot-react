import { getAllStudents } from "./clients";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const data = await getAllStudents();
    console.log(data.data);
    setStudents(data.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <React.Fragment>
      {!students && <p>No Data!</p>}
      {students &&
        students.map((student) => <p key={student.id}>{student.name}</p>)}
    </React.Fragment>
  );
}

export default App;
