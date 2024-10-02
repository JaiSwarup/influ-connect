import SearchBox from "../components/SearchBox"
import SearchProfileCard from "../components/SearchProfileCard"

type Props = {}

export default function Search({}: Props) {
  return (
    <div>
      <SearchBox />
      <div className="flex flex-wrap gap-4 justify-around p-10">
        {[...Array(10)].map((_, i) => (
          <SearchProfileCard key={i} profileImage="/profile.jpg" coverImage="/cover.jpg" name={"John Doe"} followers={"10k"} />
        ))}
      </div>
    </div>
  )
}