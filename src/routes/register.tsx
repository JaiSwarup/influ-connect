import { useState } from "react"
import Role from "../components/Role"
import { BsFacebook, BsInstagram } from "react-icons/bs"

type Props = {
}


const SelectRole = () => {
  const [selectedRole, setSelectedRole] = useState<string>("Influencer");

  const handleRoleSelect = (role: string) => {
      setSelectedRole(role);
  };

  return (
      <div className="w-full px-8 mt-4">
        <h1 className="text-black text-center font-bold text-5xl">
            Who are you?
        </h1>
        <div className="flex w-full gap-12 mt-8">

        <Role 
            img="src\assets\influencer.jpg"
            title="Influencer"
            description="Boost your career and connect with top brands"
            buttonText="Register as an Influencer"
            isSelected={selectedRole === "Influencer"}
            onClick={handleRoleSelect}
            />
        <Role 
            img="src\assets\business.jpg"
            title="Business"
            description="Find the perfect influencers for your campaigns"
            buttonText="Register as a Business"
            isSelected={selectedRole === "Business"}
            onClick={handleRoleSelect}
            />
        </div>
      </div>
  );
}

//email and password
const Step1 = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <label className="text-black font-semibold">Email</label>
        <input type="email" className="p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-black font-semibold">Password</label>
        <input type="password" className="p-2 border border-gray-300 rounded-md" />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-black font-semibold">Confirm Password</label>
        <input type="password" className="p-2 border border-gray-300 rounded-md" />
      </div>
    </>
  )
}

function Register({}: Props) {
  const [step, setStep] = useState<number>(1);
  return (
    <>
      <SelectRole />
      <div className="mt-10 w-full flex justify-center">
        <form action="" className="w-1/2 flex flex-col justify-center bg-white shadow-sm rounded-xl p-4">
          {step === 1 && <Step1 />}
          <p className="text-center">Or Continue With</p>
          <div className="flex w-full justify-evenly gap-4">
            <button className="bg-blue-500 text-white py-2 w-60 flex justify-center rounded-lg"><BsInstagram size={30} /></button>
            <button className="bg-blue-500 text-white py-2 w-60 flex justify-center rounded-lg"><BsFacebook size={30} /></button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register