import AboutPage from "./components/About";
import EducationPage from "./components/Education";
import ExperiencePage from "./components/Experience";
import HomePage from "./components/Home";
import ProjectsPage from "./components/Projects";

function App() {
  return (
    <div>
      <HomePage />
      <div style={{ paddingBottom: "8rem" }}></div>
      <ExperiencePage />

      <div style={{ paddingBottom: "8rem" }}></div>
      <EducationPage />

      <div style={{ paddingBottom: "8rem" }}></div>
      <ProjectsPage />

      <div style={{ paddingBottom: "8rem" }}></div>
      <AboutPage />
    </div>
  );
}

export default App;
