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
        Data Visualization Project (Power BI) | “Empowered Decision-Making for Retail Store”
        </h3>
        <ul>
          <li>
            Analyzed 13months of sales data using Power BI to identify the categories with low sales volumes and potential 
            areas for improvement.
    
          </li>
          <li>
          Recommended strategic placement of low-selling items based on in-store observations, 
          advised management on acquiring new displays, and implemented effective display strategies, 
          resulting in a significant 30% increase in sales for targeted categories.
          
          </li>
        </ul>
       
      </div>

      <div className="card">
        <h3 className="project-info">
        Tata Data Visualisation: Empowering Business with Effective Insights Job Simulation on Forage
        </h3>
        <ul>
          <li>
          Completed a simulation involving creating data visualizations for Tata Consultancy Services
          </li>
          <li>
          Prepared questions for a meeting with client senior leadership
          </li>
          <li>
          Created visuals for data analysis to help executives with effective decision making. 
          </li>
        </ul>
       
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
          <strong>Tech stack:</strong> R- Programming
        </p>
      </div>


      <div className="card">
        <h3 className="project-info">
        Blockchain Technology in Telehealth and Telemedicine
        </h3>
        <ul>
          <li>
          Delved into a comprehensive examination of patient data security and privacy challenges within the healthcare sector.
          </li>
          <li>
          Identified vulnerabilities within telemedicine's current security and privacy protocols.
          </li>
          <li>
          Advocated for an innovative solution, integrating blockchain technology, decentralized identity management,
           and cutting-edge encryption techniques, to enhance security and privacy policies.
          </li>
        </ul>
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
