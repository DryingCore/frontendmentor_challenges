export default function Description({ width, avatar, alt }: { width: number; avatar: string; alt: string }) {
    return (
        <div>
            <div className="flex justify-center">
                <img src={avatar} alt={alt} width={width} className="mt-[2rem] mb-[1rem] rounded-full" />
            </div>
            <h1>Gabriel Antunes Rocha</h1>
            <p className="text-location mt-[0.2rem]">Brazil, Santa Catarina</p>
            <p className="text-experience mt-[0.6rem]">'Software Engineer and cybersecurity enthusiast'</p>
        </div>
    );
}
