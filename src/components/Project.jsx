import dayjs from 'dayjs';

export default function Project({ name, description, githubLink, demoLink, startDate, endDate }) {

  startDate = dayjs(startDate).format('MMM. YYYY');
  if (!endDate) {
    endDate = 'Present';
  } else {
    endDate = dayjs(endDate).format('MMM. YYYY');
  }

  const getButtons = () => {
    if (!githubLink && !demoLink) {
      return (
        <p className="text-gray-300">In progress</p>
      );
    }

    return (
      <>
        {githubLink && (
          <a href={githubLink} target='_blank'>
            <button type='button' className="border border-white rounded-lg px-4 py-2 cursor-pointer transition hover:bg-white hover:text-black">
              GitHub
            </button>
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target='_blank'>
            <button type='button' className="border border-white rounded-lg px-4 py-2 cursor-pointer transition hover:bg-white hover:text-black">
              Demo
            </button>
          </a>
        )}
      </>
    );
  }

  return (
    <>
      <div className={`w-full h-full border border-[var(--primary-color)] rounded-2xl text-white p-4 flex flex-col gap-4`}>
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            <p>{name}</p>
          </div>
          <div className="text-sm font-light">
            <p>{startDate} - {endDate}</p>
          </div>
        </div>
        <div className="text-white">
          <p>{description}</p>
        </div>
        <div className="flex flex-row justify-evenly">{getButtons()}</div>
      </div>
    </>
  );
}
