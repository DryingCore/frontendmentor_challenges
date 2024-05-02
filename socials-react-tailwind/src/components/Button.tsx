export default function Button({ link, desc }: { link: string, desc: string }) {
    return (
        <div className="flex justify-center m-[2rem]">
            <button className="bg-button w-[15rem] h-[2.6rem] rounded-xl hover:bg-location hover:text-black">
                <a href={link} target="_blank">{desc}</a>
            </button>
        </div>
    )
}