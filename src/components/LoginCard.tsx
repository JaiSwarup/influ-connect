import { IconType } from "react-icons"
type Props = {
    icon: IconType
    title: string
    description: string
    buttonText: string
}

function LoginCard({icon :Icon, title, description, buttonText}: Props) {
  return (
    <div className='bg-white shadow-lg rounded-lg py-5 px-4 flex flex-col gap-4'>
        <Icon className='text-6xl text-blue-500 place-self-center'/>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-gray-600'>{description}</p>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 place-self-end'>{buttonText}</button>
    </div>
  )
}

export default LoginCard