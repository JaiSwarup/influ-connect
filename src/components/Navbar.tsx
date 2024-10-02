import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

function Navbar() {
  const handleClick = () => {
    console.log('Menu clicked');
  }
  return (
    <nav className='flex justify-between items-center gap-4 px-6 text-lg font-medium bg-white sticky top-0 z-10 text-black shadow-md h-20'>
      <Link to="/" className="text-2xl font-bold p-3">
        InfluConnect
      </Link>
      <span className='gap-3 hidden lg:flex'>
        <Link className="px-4 py-1.5 rounded-xl outline-4 hover:outline hover:outline-blue-200 border border-white hover:bg-blue-200 hover:border-blue-500 hover:text-blue-500 transition-colors" to='#'>For Business</Link>
        <Link className="px-4 py-1.5 rounded-xl outline-4 hover:outline hover:outline-blue-200 border border-white hover:bg-blue-200 hover:border-blue-500 hover:text-blue-500 transition-colors" to='#'>For Influencers</Link>
        <Link className="px-4 py-1.5 rounded-xl outline-4 hover:outline hover:outline-blue-200 border border-white hover:bg-blue-200 hover:border-blue-500 hover:text-blue-500 transition-colors" to='#'>Discover</Link>
      </span>
      <span className='gap-4 hidden lg:flex'>
        <Link className="px-4 py-1.5 rounded-xl outline-4 hover:outline hover:outline-blue-200 border border-black hover:bg-blue-200 hover:border-blue-500 hover:text-blue-500 transition-colors" to='login'>Sign In</Link>
        <Link className="px-4 py-1.5 rounded-xl outline-4 hover:outline hover:outline-blue-500 border border-white hover:bg-blue-500 transition-colors text-white bg-black" to='register'>Sign Up</Link>
        {/* <SignInButton />
        <SignUpButton /> */}
      </span>
      <button onClick={handleClick} className='lg:hidden text-3xl'><BiMenu /></button>
    </nav>
  );
}

export default Navbar;
