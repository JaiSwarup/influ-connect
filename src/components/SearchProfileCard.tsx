type Props = {
    coverImage : string
    profileImage : string
    name : string
    followers : string
}

export default function SearchProfileCard({
    coverImage,
    profileImage,
    name,
    followers
}: Props) {
  return (
    <div className='gap-4 rounded-xl overflow-hidden h-60 w-60 relative'>
        <img src={coverImage} alt="" className="object-cover h-full w-full" />
        <div className="flex absolute bottom-0 text-white backdrop-blur-sm w-full pl-3 py-2">
            <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full border-2 border-white" />
            <div className="flex flex-col items-center">
                <h1 className="text-lg font-semibold h-16 flex items-center">{name}</h1>
                <p className="text-sm">
                    {followers} followers
                </p>
            </div>
        </div>
    </div>
  )
}