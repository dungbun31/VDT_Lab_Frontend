import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [university, setUniversity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, age, email, gender, university });
    setName("");
    setAge("");
    setEmail("");
    setGender("");
    setUniversity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
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
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
