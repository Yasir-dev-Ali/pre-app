import './App.css'
import Home from './component/Home'
const App = () => {
  return (
   <>
     <h1 className=' text-center text-cyan-700 text-4xl'>Yasir Ali  </h1>

<p className='text-center text-cyan-700 text-2xl'>This is a React Tailwind CSS Starter Project</p>
{/* Social Link Complete  */}
<div className='flex justify-center space-x-4 mt-4'>
  <a href='https://www.facebook.com/yasirali.unar.56' target='_blank' rel='noreferrer'>
    <img src='https://img.icons8.com/color/48/000000/facebook.png' alt='facebook' />
  </a>
  <a href='https://www.linkedin.com/in/yasiryaseen/' target='_blank' rel='noreferrer'>
    <img src='https://img.icons8.com/color/48/000000/linkedin.png' alt='linkedin' />
  </a>
  <a href='https://www.instagram.com/yasirali.dev/' target='_blank' rel='noreferrer'>
    <img src='https://img.icons8.com/color/48/000000/instagram-new.png' alt='instagram' />
  </a>
  <a href='https://twitter.com/Yasir6Yaseen' target='_blank' rel='noreferrer'>
    <img src='https://img.icons8.com/color/48/000000/twitter--v1.png' alt='twitter' />
  </a>
  <a href='https://www.youtube.com/@YasirCode' target='_blank' rel='noreferrer'>
    <img src='https://img.icons8.com/color/48/000000/youtube-play.png' alt='youtube' />
  </a>
  <Home />
</div>


   </>
  )
}

export default App