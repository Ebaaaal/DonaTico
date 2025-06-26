interface TargetsProps {
    titles: string[];
    organizers: string[];
    texts: string[];
    progress: number[];
    images: string[];
    alts: string[];
}

export default function Targets(props: TargetsProps) {
    return (
        <section className="flex flex-col w-6/8 my-20 gap-10  ">

            {props.titles.map((title, number) => (
                <div className="flex border-1 items-center border-gray-300 rounded-2xl gap-8 py-5">
                    <div className="flex w-1/2 justify-center items-center min-md:w-1/5">
                        <img className=" w-full rounded-1xl" src={props.images[number]} alt={props.alts[number]} />
                    </div>
                    <div className="flex flex-col items-start w-full gap-2">
                        <h1 className=" text-1xl font-semibold cursor-default"> {title} </h1>
                        <h3> {props.organizers[number]} </h3>
                        <p className=""> {props.texts[number]} </p>
                        <div
                            className=" bg-green-600 h-3 transition-all motion-safe:animate-progress duration-500 ease-in-out rounded-full "
                            style={{
                                width: `${Math.min(Math.max(Number(props.progress[number]), 0), 95)}%`,
                            }}
                        ></div>
                    </div>

                </div>
            ))}

        </section>
    );
}