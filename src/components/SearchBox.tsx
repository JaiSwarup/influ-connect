import { BsSearch } from "react-icons/bs"
import { BiFilter } from "react-icons/bi"
type Props = {}

export default function Search({}: Props) {
  const handleClick = () => {
    console.log("Filter button clicked")
  }
  return (
    <div className="mt-10 flex justify-center gap-4 w-full">
      <div className="bg-white p-2 rounded-lg flex justify-between w-[60rem] gap-2">
      <div className="bg-gray-300 flex gap-2 items-center p-2 w-2/3 rounded-lg">
        <BsSearch size={30} />
        <input type="search" name="influencer" id="influencer" className="bg-gray-300 w-full rounded-md p-2 focus:outline-0 focus:border focus:border-black focus:shadow-none"  placeholder="Search Influencers by name or keyword..." />
      </div>
      <div className="flex gap-2 justify-between w-1/4">
        <button type="button" onClick={handleClick} className="flex gap-1 items-center bg-white text-black border px-3  rounded-md"><BiFilter />Filter</button>
        <button type="submit" className="bg-black text-white px-3  rounded-md">Search</button>
      </div>
      </div>
    </div>
  )
}