import React from 'react';

const Skills = () => {
  const technicalSkills = [
    "JavaScript (ES6+)",
    "React.js",
    "HTML5 / CSS3 / Tailwind",
    "Python (Pandas, NumPy)",
    "Node.js & Express.js",
    "Firebase / Firestore",
    "MongoDB",
    "Git & GitHub",
    "SQL / PostgreSQL",
  ];

  const softSkills = [
    "Problem Solving & Debugging",
    "Team Collaboration",
    "Effective Communication",
    "Time Management",
    "Adaptability to New Technologies",
    "Project Management",
    "Self-Learning & Research"
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "40px 20px",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "20px",
          textAlign: "center",
          color: "#333"
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >
        {/* Technical Skills */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#444" }}>Technical Skills</h3>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
            {technicalSkills.map((skill, index) => (
              <li
                key={index}
                style={{
                  background: "#e3f2fd",
                  margin: "8px 0",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  color: "#0d47a1",
                  fontSize: "1rem"
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Soft Skills */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <h3 style={{ fontSize: "1.5rem", color: "#444" }}>Soft Skills</h3>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
            {softSkills.map((skill, index) => (
              <li
                key={index}
                style={{
                  background: "#f1f8e9",
                  margin: "8px 0",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  color: "#33691e",
                  fontSize: "1rem"
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
