import projectsJson from '../assets/data/projects.json';
import dayjs from 'dayjs';
import Project from './Project.jsx';

export default function Projects({ clickedSkill }) {

  // Dynamically display projects depending on highlighted skill (if applicable), and sorts them chronologically 
  const projects = projectsJson.projects
  .filter(project => !clickedSkill || project.skills.includes(clickedSkill))
  .sort((project1, project2) => {
    const e1 = dayjs(project1.endDate);
    const e2 = dayjs(project2.endDate);

    // If both endDates are null (Currently working on project), the newer project is on top
    if ((!project1.endDate) && (!project2.endDate)) {
      const s1 = dayjs(project1.startDate);
      const s2 = dayjs(project2.startDate);
      return s2.diff(s1);
    }
    if (!project1.endDate) {
      return -1;
    }
    else if (!project2.endDate) {
      return 1;
    }

    return e2.diff(e1);
  })
  .map((project, index) => {
    if (!project) return null;

    return <Project key={index}
      name={project.name}
      startDate={project.startDate}
      endDate={project.endDate}
      description={project.description}
      githubLink={project.githubLink}
      demoLink={project.demoLink}
    />
  });

  return (
    <div className="flex flex-col gap-[10px] w-[500px] relative">
      <div className="absolute top-[-3rem] right-0 text-white text-lg font-bold">
        <p>Projects</p>
      </div>
      {projects}
    </div>
  )
  
}