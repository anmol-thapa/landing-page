import headshot from '../assets/resources/Headshot.jpg';

export default function Headshot() {
  return (
  <div className='w-[500px] h-[500px]'>
    <img 
      src={headshot}
      className='w-[100%] h-[100%] object-cover object-center rounded-full'
    />
  </div>
  )

}