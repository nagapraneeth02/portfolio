import "../styles/education.css";
import "../../public/praneeth.jpg";
function EducationPage() {
  return (
    <div id="education">
      <h1>Education</h1>
      <div className="education">
        <img
          width={350}
          src="https://seekvectorlogo.com/wp-content/uploads/2018/01/indiana-university-vector-logo.png"
        ></img>

        <div>
          <h1>MS in Health Informatics</h1>
          <ul>
            <li>
              Spearheaded the development of a global health informatics
              database, emphasizing data management and analysis using SQL and
              Power BI, aligning with focus on data-driven insights and
              benchmarking.
            </li>
          </ul>
        </div>
      </div>

      <div className="education">
        <img
          width={350}
          src="https://asset.brandfetch.io/id19-jVFJl/idHpZGlfNI.png"
        ></img>

        <div>
          <h1>Bachelors in Pharmaceutical Engineering</h1>
          <ul>
            <li>
              Assisted in planning and conducting Assignments and quizzes on
              informatics concepts.
            </li>
            <li>
              Conducted tutorials to help students understanding concepts.
            </li>
            <li>
              Graded assignments, tests, and projects, as well as kept correct
              records and provided constructive feedback.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EducationPage;
