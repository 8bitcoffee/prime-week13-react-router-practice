import React from 'react';
import StudentList from '../StudentList/StudentList';
import './AllStudents.css';

function AllStudents(){
    return(
        <div>
            <h3>Student List:</h3>
            <StudentList/>
        </div>
    )
}

export default AllStudents;