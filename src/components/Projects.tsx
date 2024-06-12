import "../styles/home.css";

function Projects() {
  return (
    <div className="title">
      <h2 className="heading">Projects</h2>

      <div className="card">
        <h3 className="project-info">
          Real-time Animation of Articulated Objects Using PCA-Based Motion
          Representation
        </h3>
        <ul>
          <li>
            Developed a novel system for animating articulated objects by
            integrating PCA-based motion representations, significantly
            improving the tracking and animation quality.
          </li>
          <li>
            Applied deep learning techniques for background motion modeling and
            disentanglement mechanisms, achieving a 96.6% user preference rate
            over state-of-the-art methods on challenging benchmarks.
          </li>
        </ul>
        <p>
          <strong>Tech stack:</strong> Python, TensorFlow, PyTorch, U-Net, and
          Detectron2.
        </p>
      </div>

      <div className="card">
        <h3 className="project-info">
          Predictive Analysis of Diabetes Status Using R-Programming
        </h3>
        <ul>
          <li>
            Led the implementation of machine learning models in R to analyze
            physiological markers and demographics, achieving a high prediction
            accuracy rate of 92.93% for early diabetes diagnosis.
          </li>
          <li>
            Accounted for 70% of the project work, demonstrating strong
            leadership and statistical analysis skills in advancing early
            diabetes detection.
          </li>
        </ul>
        <p>
          <strong>Tech stack:</strong> R
        </p>
      </div>

      <div className="card">
        <h3 className="project-info">Hospital Performance Analysis</h3>
        <ul>
          <li>
            Applied Python, SQL, NumPy, Scikit Learn, and machine learning
            models to evaluate hospital performance, demonstrating proficiency
            in data-driven analysis and the ability to use technological tools
            for benchmarking and performance management.
          </li>
          <li>
            Significantly contributed (70%) to the creation of dynamic Power BI
            dashboards, crafting interactive charts, graphs, and maps to aid in
            healthcare decision-making
          </li>
        </ul>
        <p>
          <strong>Tech stack:</strong> Python, SQL, Numpy, Scikit Learn,,
          PowerBI
        </p>
      </div>
    </div>
  );
}

export default Projects;
