import { Link } from "@tanstack/react-router";

interface TargetsProps {
    images: string[];
    alts: string[];
    titles: string[];
    organizers: string[];
    texts: string[];
    locations: string[];
    link:string;
    progress: number[];
}

export default function Targets(props: TargetsProps) {
    return (
        <section className="flex flex-col w-10/11 my-20 gap-10">

            {props.organizers.map((organizer, number) => (
                <Link to={props.link}>
                <div className="flex border-1 items-center border-gray-300 rounded-2xl gap-3 ">
                    <div className="h-full w-full justify-center ">
                        <img className="h-55 w-50 rounded-1xl" src={props.images[number]} alt={props.alts[number]} />
                    </div>
                    <div className="flex flex-col justify-center w-full  gap-2 pr-2">
                        <h2 className=" text-l font-semibold cursor-default font-fredoka"> {props.titles} </h2>
                        <h3 className="text-xs opacity-70 "> {organizer} - Organizer </h3>
                        <p className="font-fredoka text-sm line-clamp-2 leading-none "> {props.texts[number]} </p>
                        <p className="text-xs opacity-70 "> {props.locations[number]} - location </p>
                        <div className="relative w-11/12 bg-gray-300 rounded-full h-3 mt-4 ">
                            <div
                                className="absolute bg-green-600 h-3 duration-500 rounded-full "
                                style={{
                                    width: `${Math.min(Math.max(Number(props.progress[number]), 0), 100)}%`,
                                }}>
                                <p className="text-sm text-right mt-3 text-green-900 font-coiny">
                                    {props.progress[number]}% funded
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            ))}

        </section>
    );
}