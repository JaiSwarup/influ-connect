import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className='flex pl-8 mb-12 pt-4 relative justify-between bg-white' style={{ height: 'calc(100vh - 80px)' }}>
      <div className="flex flex-col justify-center gap-4">
        <h1 className='text-6xl font-bold flex flex-col gap-4'>
          <span>Connect.</span>
          <span>Collaborate.</span>
          <span>Grow.</span>
        </h1>
        <p className='text-xl'>
          The ultimate platform for influencers and businesses to thrive together.
        </p>
        <span className="flex mt-6 items-center gap-4">
          <button className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600 transition-colors">Get Started</button>
          <Link to="#" className="text-blue-500 font-medium text-center px-4 py-2 border border-blue-500 rounded-lg" >How it works?</Link>
        </span>
      </div>
      <div className="flex-grow overflow-hidden hidden lg:block">
          <img src="src/assets/instagram-mobile.png" alt="Instagram mobile view" className="object-fit mx-auto" />
      </div>
    </div>
  )
}
