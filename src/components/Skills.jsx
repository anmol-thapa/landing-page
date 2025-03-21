import projectsJson from '../assets/data/projects.json';
import clickMeSvg from '../assets/resources/ClickMe.svg';

export default function Skills({ clickedSkill, hasClickedBefore, setClickedSkill, setHasClickedBefore }) {
  const handleSkillSelect = (skill) => {
    if (!hasClickedBefore && skill !== '') {
      localStorage.setItem('clicked', 'true');
      setHasClickedBefore(true);
    }
    setClickedSkill(skill);
  };

  // Dynamically display skills
  const skills = projectsJson.skills.map((skill, index) => (
    <div key={index} onClick={() => handleSkillSelect(skill.name)}>
      <img 
        className={`
          w-[150px] h-[150px] cursor-pointer justify-self-center self-center transition-filter hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.5)] duration-250 ease-in-out 
          ${clickedSkill === skill.name ? 'drop-shadow-[0_0_35px_rgba(255,255,255,0.5)]' : ''}
        `} 
        src={skill.icon} 
      />
    </div>
  ));

  return (

    <div className="grid grid-cols-3 gap-[10px] width-[500px] relative">
      <div className="absolute top-[-3rem] left-0 text-white text-lg font-bold">
        <p>Skills</p>
      </div>
      {skills}
      {/* Click Me Hint */}
      <img 
        className={`
          absolute left-[-9em] drop-shadow-[0_0_35px_white] transition-opacity duration-250 ease-out
          ${hasClickedBefore ? 'opacity-0' : ''}
        `} 
        src={clickMeSvg}
      />
  </div>
  )
}