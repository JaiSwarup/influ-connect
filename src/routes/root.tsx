import Hero from "../components/Hero"
import LoginCard from "../components/LoginCard"
import { BsPerson } from "react-icons/bs"
import { BiBuilding } from "react-icons/bi"
type Props = {}

function root({}: Props) {
  return (
    <main>
        <Hero />
        <div className='flex sm:flex-col md:flex-row justify-center gap-4 p-4'>
            <LoginCard icon={BsPerson} title='Influencers' description='Boost your career and connect with top brands' buttonText='Login'/>
            <LoginCard icon={BiBuilding} title='Businesses' description='Find the perfect influencers for your campaigns' buttonText='Login'/>
        </div>
    </main>
  )
}

export default root