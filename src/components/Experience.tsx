import "../styles/experience.css";
import "../../public/praneeth.jpg";
function ExperiencePage() {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <div className="experience">
        <img
          width={350}
          src="https://mofact.org/wp-content/uploads/2023/09/Randolph-County-CCP-logo.png"
        ></img>

        <div>
          <h1>Knowledge Engineering Specialist </h1>
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
        </div>
      </div>

      <div className="experience">
        <img
          width={350}
          src="https://seekvectorlogo.com/wp-content/uploads/2018/01/indiana-university-vector-logo.png"
        ></img>

        <div>
          <h1>Research Assistant</h1>
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

      <div className="experience">
        <img
          width={350}
          src="https://seekvectorlogo.com/wp-content/uploads/2018/01/indiana-university-vector-logo.png"
        ></img>

        <div>
          <h1>Teaching Assistant</h1>
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

      <div className="experience">
        <img
          height={140}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png"
        ></img>

        <div>
          <h1>Systems Engineer Trainee</h1>
          <ul>
            <li>Worked as Systems Engineer Trainee</li>
            <li>Worked on Big data technologies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
