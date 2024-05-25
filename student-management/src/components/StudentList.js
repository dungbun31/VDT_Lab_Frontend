
import React from "react";

const StudentList = ({ students, editStudent, deleteStudent }) => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students.map((student, index) => (
        <div key={student.id} className="student-item">
          <span>
            {student.index} {student.name} - {student.gender} - university {" "}
            {student.university}
          </span>
          <div>
            <button onClick={() => editStudent(student)}>Edit</button>
            <button
              onClick={() => deleteStudent(student.id)}
              className="cancel"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
