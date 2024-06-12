import "../styles/home.css";

function Education() {
  return (
    <div className="title">
      <h2 className="heading">Education</h2>
      <div className="card">
        <h3 className="project-info">MS in Health Informatics</h3>
        <ul>
          <li>
            Spearheaded the development of a global health informatics database,
            emphasizing data management and analysis using SQL and Power BI,
            aligning with focus on data-driven insights and benchmarking.
          </li>
        </ul>
        <p>
          <strong>Course Material: </strong> Project Management, Machine
          Learning, Deep Learning, Security & Privacy Policies & Regulations in
          Health Care, Human Factors Engineering for Health Informatics, Applied
          Statistics.
        </p>
      </div>

      <div className="card">
        <h3 className="project-info">
          Bachelors in Pharmaceutical Engineering
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
          <strong>Course Material: </strong> Heat Transfer, Mass Transfer,
          Pharmaceutical Analysis, Industrial Pharmacy
        </p>
      </div>
    </div>
  );
}

export default Education;
