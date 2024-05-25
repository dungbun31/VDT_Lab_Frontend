import React from "react";
import "./StudentDetails.css"; // Ensure you have some basic CSS for modal

const StudentDetails = ({ student, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>Student Details</h2>
        <p>Name: {student.name}</p>
        <p>Age: {student.age}</p>
        <p>Email: {student.email}</p>
        <p>Gender: {student.gender}</p>
        <p>University: {student.university}</p>
      </div>
    </div>
  );
};

export default StudentDetails;
