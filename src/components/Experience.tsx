import "../styles/home.css";

function Experience() {
  return (
    <div className="title">
      <h2 className="heading">Experience</h2>

      <div className="card">
        <h3 className="project-info">
          Knowledge Engineering Specialist - Caring Community Partnership
          (Randolph county)
        </h3>
        <ul>
        During my internship, I took on the role of leading the ML Dashboard team. 
        My primary responsibility was to develop machine learning models within Power BI, 
        aimed at creating decision support tools for community health. I successfully 
        managed software installations, coordinated team efforts, and provided weekly 
        progress reports. Additionally, I conducted thorough literature reviews, 
        collaborated on written content, and presented project plans and results to 
        RCCCP Project Managers. I integrated their feedback to refine and perfect the 
        final deliverables.
        </ul>
        <p>
          <strong>Tech stack:</strong> PowerBI, Tableu, Machine Learning.
        </p>
      </div>

      <div className="card">
        <h3 className="project-info">
          Research Assistant - Indiana University
        </h3>
        <ul>
        Spearheaded the development of a global health informatics database, focusing on 
        data management and analysis using SQL and Power BI. This project emphasized the 
        importance of data-driven insights and benchmarking, aligning with our goal to 
        enhance decision-making processes through comprehensive data analysis.
        </ul>
        <p>
          <strong>Tech stack:</strong> SQL, PowerBI
        </p>
      </div>

      <div className="card">
        <h3 className="project-info">
          Teaching Assistant - Indiana University
        </h3>
        <ul>
        I assisted in planning and conducting assignments and quizzes on informatics concepts.
        I conducted tutorials to help students understand these concepts better. Additionally, 
        I graded assignments, tests, and projects, maintained accurate records, and provided 
        constructive feedback to support student learning and improvement.
        </ul>
        <p>
          <strong>Tech stack:</strong> Microsoft Office Suite
        </p>
      </div>
    </div>
  );
}

export default Experience;
