// import React from 'react';

// const Experience = () => {
//   const experiences = [
//     {
//       role: "Intern",
//       company: "Company Name",
//       duration: "Summer 2023",
//       responsibilities: [
//         "Developed features using React and Node.js",
//         "Collaborated with team members on project planning",
//         "Participated in code reviews and debugging sessions"
//       ]
//     },
//     {
//       role: "Teaching Assistant",
//       company: "University Department",
//       duration: "Fall 2022 - Present",
//       responsibilities: [
//         "Assisted students with programming assignments",
//         "Held weekly office hours",
//         "Graded assignments and provided feedback"
//       ]
//     }
//   ];

//   return (
//     <section id="experience" className="section">
//       <h2 className="section-title">Experience</h2>
//       <div className="experiences">
//         {experiences.map((exp, index) => (
//           <div key={index} className="experience-item">
//             <h3>{exp.role} at {exp.company}</h3>
//             <p className="duration">{exp.duration}</p>
//             <ul className="responsibilities">
//               {exp.responsibilities.map((resp, i) => (
//                 <li key={i}>{resp}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from 'react';

const Experience = () => {
  const sectionStyle = {
    padding: '60px 20px',
    background: '#f9f9f9'
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '40px',
    color: '#222',
    letterSpacing: '0.5px'
  };

  const timelineStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const cardStyle = {
    background: '#fff',
    padding: '20px 25px',
    borderRadius: '12px',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    borderLeft: '5px solid #4a90e2'
  };

  const roleStyle = {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#333'
  };

  const companyStyle = {
    fontSize: '1rem',
    color: '#4a90e2',
    margin: '5px 0'
  };

  const durationStyle = {
    fontSize: '0.95rem',
    color: '#777',
    marginBottom: '15px'
  };

  const listStyle = {
    listStyleType: 'disc',
    paddingLeft: '20px',
    color: '#555',
    lineHeight: '1.6'
  };

  const experiences = [
    {
      role: "Data Administrative",
      company: "Dream Works Realty, Pune",
      duration: "May 2024 – Aug 2024",
      responsibilities: [
        "Maintained and updated a real estate database using Excel, ensuring data accuracy and integrity.",
        "Streamlined data entry tasks through a custom dashboard, reducing errors by 15%.",
        "Automated job sheet generation using Excel, saving 5 hours per week.",
        "Provided technical support for the Leadcon app, resolving user queries and troubleshooting issues.",
        "Collaborated with IT and development teams to resolve technical issues and enhance system functionality."
      ]
    },
    {
      role: "Relationship Manager",
      company: "Metorology Data Pvt. Ltd, Nagpur",
      duration: "Aug 2022 – July 2023",
      responsibilities: [
        "Collaborated with BARC to manage data collection projects for 150+ households, ensuring 95% data accuracy.",
        "Conducted lead generation and recruitment, onboarding 100+ households within 11 months.",
        "Streamlined household data collection processes, reducing errors by 20%.",
        "Maintained real-time data updates for 150+ households with timely and accurate reporting.",
        "Built strong relationships with stakeholders, achieving a 90% satisfaction rate."
      ]
    }
  ];

  return (
    <section id="experience" style={sectionStyle}>
      <h2 style={titleStyle}>Professional Experience</h2>
      <div style={timelineStyle}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0px 6px 15px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.05)';
            }}
          >
            <h3 style={roleStyle}>{exp.role}</h3>
            <p style={companyStyle}>{exp.company}</p>
            <p style={durationStyle}>{exp.duration}</p>
            <ul style={listStyle}>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
