
import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [university, setUniversity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, gender, university });
    setName("");
    setGender("male");
    setUniversity("");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="text"
          placeholder="University"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
