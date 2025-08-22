

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-content">
//         <div className="header-text">
//           <h1>Hi, I'm Jivansing Navalsing Ingle</h1>
//           <h2>MCA Graduate | Aspiring Software Engineer</h2>
//           <p>
//             A passionate MCA graduate with expertise in React.js, Node.js, Express.js, 
//             MongoDB, Python, Java, and SQL. Skilled in building full-stack applications, 
//             problem solving, and eager to contribute to innovative projects in 
//             software development or web technologies.
//           </p>
//         </div>
//         <div className="header-social">
//           <a
//             href="https://linkedin.com/in/jivansing-ingle-599846226"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faLinkedin} size="2x" />
//           </a>
//           <a
//             href="https://github.com/jivansingh2175"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faGithub} size="2x" />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.css';  // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">

        {/* Intro Section */}
        <div className="header-text">
          <h1 className="name">Hi, I'm <span className="highlight">Jivansing Navalsing Ingle</span></h1>
          <h2 className="title">MCA Graduate • Aspiring Software Engineer</h2>
          <p className="description">
            I am a passionate <strong>MCA graduate</strong> with hands-on experience in 
            <span className="skill"> React.js</span>, 
            <span className="skill"> Node.js</span>, 
            <span className="skill"> Express.js</span>, 
            <span className="skill"> MongoDB</span>, 
            <span className="skill"> Python</span>, 
            <span className="skill"> Java</span>, and 
            <span className="skill"> SQL</span>. 
            I enjoy solving problems and building scalable, full-stack web applications. 
            Always eager to learn and contribute to innovative software projects.
          </p>

          {/* Call To Action */}
          <div className="header-cta">
            <a href="/Jivansingingle.pdf" className="btn" download>
              📄 Download Resume
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="header-social">
          <a
            href="https://linkedin.com/in/jivansing-ingle-599846226"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>

          <a
            href="https://github.com/jivansingh2175"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
