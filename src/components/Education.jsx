import React from 'react';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="education-item">
        <h3>Savitribai Phule pune University</h3>
        <p className="degree">Master of Computer Applications (MCA)</p>
        <p className="date">Graduated: July 2025</p>
        <p className="gpa">CGPA: 7.9 / 10</p>
        <div className="courses">
          <h4>Relevant Coursework:</h4>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Database Management Systems (DBMS)</li>
            <li>Web Technologies (HTML, CSS, JavaScript, React.js)</li>
            <li>Python Programming & Data Analysis</li>
            <li>Java & Object-Oriented Programming</li>
            <li>Software Engineering</li>
            <li>Computer Networks & Security</li>
            <li>Cloud Computing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
