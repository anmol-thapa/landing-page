import { useState } from "react";
import Projects from "../components/Projects.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Skills from "../components/Skills.jsx";
import Headshot from "../components/Headshot.jsx";

export default function MainContent() {
  const [hasClickedBefore, setHasClickedBefore] = useState(localStorage.getItem('clicked') === 'true');
  const [clickedSkill, setClickedSkill] = useState('');

  const handleSkillSelect = (skill) => {
    if (!hasClickedBefore && skill !== '') {
      localStorage.setItem('clicked', 'true');
      setHasClickedBefore(true);
    }
    setClickedSkill(skill);
  };

  return (
    <>
      <div className="flex flex-col gap-[10rem] items-center h-[2000px] w-screen">
        <div className="flex flex-row gap-[50px] w-[1020px] justify-center items-center">
          <Headshot />
          <AboutMe />
        </div>

        <div onMouseLeave={() => handleSkillSelect('')} className="flex flex-row gap-[50px] items-start">
          <Skills 
            hasClickedBefore={hasClickedBefore}
            clickedSkill={clickedSkill}
            setClickedSkill={setClickedSkill}
            setHasClickedBefore={setHasClickedBefore} 
          />
          <Projects clickedSkill={clickedSkill} />
        </div>
      </div>
    </>
  );
}
