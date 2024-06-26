import React, { useState } from "react";

const UpdateStudent = ({ student, updateStudent, setShowUpdatePage }) => {
  const [name, setName] = useState(student.name);
  const [gender, setGender] = useState(student.gender);
  const [university, setUniversity] = useState(student.university);
  const [age, setAge] = useState(student.age);
  const [email, setEmail] = useState(student.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(student.id, { name, age, email, gender, university });
  };

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Update Student</button>
        <button
          type="button"
          className="cancel"
          onClick={() => setShowUpdatePage(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateStudent;
