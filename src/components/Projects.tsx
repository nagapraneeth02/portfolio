import "../styles/projects.css";
import "../../public/praneeth.jpg";
function ProjectsPage() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <div>
          <h1>
            Real-time Animation of Articulated Objects Using PCA-Based Motion
            Representation
          </h1>
          <ul>
            <li>
              Developed a novel system for animating articulated objects by
              integrating PCA-based motion representations, significantly
              improving the tracking and animation quality.
            </li>
            <li>
              Applied deep learning techniques for background motion modeling
              and disentanglement mechanisms, achieving a 96.6% user preference
              rate over state-of-the-art methods on challenging benchmarks.
            </li>
            <li>
              <strong>
                Tech Stack: Python, TensorFlow, PyTorch, U-Net, and Detectron2.
              </strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="projects">
        <div>
          <h1>Predictive Analysis of Diabetes Status Using R-Programming </h1>
          <ul>
            <li>
              Led the implementation of machine learning models in R to analyze
              physiological markers and demographics, achieving a high
              prediction accuracy rate of 92.93% for early diabetes diagnosis.
            </li>
            <li>
              Accounted for 70% of the project work, demonstrating strong
              leadership and statistical analysis skills in advancing early
              diabetes detection.
            </li>
          </ul>
        </div>
      </div>

      <div className="projects">
        <div>
          <h1>Hospital Performance Analysis</h1>
          <ul>
            <li>
              Applied Python, SQL, NumPy, Scikit Learn, and machine learning
              models to evaluate hospital performance, demonstrating proficiency
              in data-driven analysis and the ability to use technological tools
              for benchmarking and performance management.
            </li>
            <li>
              Significantly contributed (70%) to the creation of dynamic Power
              BI dashboards, crafting interactive charts, graphs, and maps to
              aid in healthcare decision-making
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
