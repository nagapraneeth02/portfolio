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
          <li>
            Led the ML Dashboard team in developing machine learning models in
            Power BI dashboard to create decision support tool in community
            health, managing software installation, team coordination, and
            delivering weekly progress reports.
          </li>
          <li>
            Conducted literature reviews, collaborated on written content, and
            presented project plans and results to RCCCP Project Managers,
            integrating feedback to refine final deliverables
          </li>
        </ul>
        <p>
          <strong>Tech stack:</strong> PowerBI, Tableu
        </p>
      </div>

      <div className="card">
        <h3 className="project-info">
          Research Assistant - Indiana University
        </h3>
        <ul>
          <li>
            Spearheaded the development of a global health informatics database,
            emphasizing data management and analysis using SQL and Power BI,
            aligning with focus on data-driven insights and benchmarking.
          </li>
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
          <li>
            Assisted in planning and conducting Assignments and quizzes on
            informatics concepts.
          </li>
          <li>Conducted tutorials to help students understanding concepts.</li>
          <li>
            Graded assignments, tests, and projects, as well as kept correct
            records and provided constructive feedback.
          </li>
        </ul>
        <p>
          <strong>Tech stack:</strong> Microsoft Office Suite
        </p>
      </div>
    </div>
  );
}

export default Experience;
