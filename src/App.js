import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import UpdateStudent from "./components/UpdateStudent";
import StudentDetails from "./components/StudentDetails";
import MetricsDashboard from "./MetricsDashboard";

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [showUpdatePage, setShowUpdatePage] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const fetchStudents = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}/api/students`);
      let data = await response.json();
      data = data.sort((a, b) => a.id - b.id);
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const addStudent = async (studentData) => {
    try {
      const response = await fetch(`${apiUrl}/api/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
      if (response.ok) {
        fetchStudents();
      } else {
        console.error("Failed to add student");
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const editStudent = (student) => {
    setEditingStudent(student);
    setShowUpdatePage(true);
  };

  const updateStudent = async (id, updatedData) => {
    try {
      const response = await fetch(`${apiUrl}/api/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        fetchStudents();
        setShowUpdatePage(false);
      } else {
        console.error("Failed to update student");
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/students/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchStudents();
      } else {
        console.error("Failed to delete student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const showDetails = (student) => {
    setSelectedStudent(student);
    setShowDetailsModal(true);
  };

  const closeModal = () => {
    setShowDetailsModal(false);
    setSelectedStudent(null);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/metrics" element={<MetricsDashboard />} />
          <Route
            path="/"
            element={
              showUpdatePage ? (
                <UpdateStudent
                  student={editingStudent}
                  updateStudent={updateStudent}
                  setShowUpdatePage={setShowUpdatePage}
                />
              ) : (
                <>
                  <StudentForm addStudent={addStudent} />
                  <StudentList
                    students={students}
                    editStudent={editStudent}
                    deleteStudent={deleteStudent}
                    showDetails={showDetails}
                  />
                  {showDetailsModal && selectedStudent && (
                    <StudentDetails
                      student={selectedStudent}
                      closeModal={closeModal}
                    />
                  )}
                </>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
