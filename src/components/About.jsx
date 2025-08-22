// import React from 'react';
// import profilePic from './assets/image111.jpg';  

// const About = () => {
//   return (
//     <section id="about" className="section">
//       <h2 className="section-title">About Me</h2>
//       <div className="about-content">
//         <div className="about-text">
//           <p>
//             I have completed my MCA from Savitribai Phule Pune University, 
//             specializing in software engineering, web development, 
//             and database management. My academic foundation has equipped me 
//             with the skills to build efficient, user-friendly, and scalable applications.
//           </p>
//           <p>
//             Currently, I am working as a Software Engineer, where I design, develop, 
//             and maintain modern web applications. I am passionate about creating 
//             high-quality, optimized solutions and continuously learning new technologies 
//             to stay ahead in the ever-evolving tech landscape.
//           </p>
//           <p>
//             My core skills include React.js, Node.js, Express.js, MongoDB, Python, 
//             and Java. I aim to contribute to impactful projects that solve real-world problems 
//             while enhancing my expertise in full-stack development.
//           </p>
//         </div>
//         <div className="about-image">
//          <img src={profilePic} alt="profile" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import React from 'react';
import profilePic from './assets/image111.jpg'; 
import './About.css'; 

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I have completed my MCA from Savitribai Phule Pune University, 
            specializing in software engineering, web development, 
            and database management. My academic foundation has equipped me 
            with the skills to build efficient, user-friendly, and scalable applications.
          </p>
          <p>
            Currently, I am working as a Software Engineer, where I design, develop, 
            and maintain modern web applications. I am passionate about creating 
            high-quality, optimized solutions and continuously learning new technologies 
            to stay ahead in the ever-evolving tech landscape.
          </p>
          <p>
            My core skills include React.js, Node.js, Express.js, MongoDB, Python, 
            and Java. I aim to contribute to impactful projects that solve real-world problems 
            while enhancing my expertise in full-stack development.
          </p>
        </div>
        <div className="about-image">
          <img 
            src={profilePic} 
            alt="profile" 
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
