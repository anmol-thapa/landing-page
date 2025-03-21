import projectsJson from '../assets/data/projects.json';

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-4 border border-[var(--primary-color)] rounded-2xl items-center w-[500px] p-8 text-white">
      <div className="flex flex-row gap-4">
        <p>My name is Anmol Thapa and I'm a first-year computer science student at University of Virginia.</p>
        <img className="w-[240px] h-[135px]" src='https://logos-world.net/wp-content/uploads/2021/11/UVA-Logo.png' />
      </div>
      <div className="flex flex-row gap-[2px]">
        <p>I'm interested in a variety of skills, ranging from frontend to backend and game development.</p>
      </div>
      <div className="flex flex-row justify-evenly w-full">
        <a href={projectsJson.github} target='_blank'>
          <button className="border border-white rounded-lg p-2 cursor-pointer transition hover:bg-white hover:text-black">GitHub</button>
        </a>
        <a href={projectsJson.linkedin} target='_blank'>
          <button className="border border-white rounded-lg p-2 cursor-pointer transition hover:bg-white hover:text-black">Indeed</button>
        </a>
        <a href={'/'} target='_blank'>
          <button className="border border-white rounded-lg p-2 cursor-pointer transition hover:bg-white hover:text-black">Resume</button>
        </a>
      </div>
    </div>
  )
}