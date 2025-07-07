interface TargetsProps {
    images: string[];
    organizers: string[];
    titles: string[];
    locations: string[];
    categories: string[];
    types: string[];
    progress: string[];
}

export default function Targets(props: TargetsProps) {
    return (
        <section className="flex flex-col w-10/11 my-20 gap-10 mb-25">

            {props.organizers.map((organizer, number) => (
                <div className="flex border-1 items-center border-gray-300 rounded-2xl gap-8  ">
                    <div className="h-full w-full justify-center ">
                        <img className="h-60 w-full rounded-l-2xl" src={props.images[number]} alt='' />
                    </div>
                    <div className="flex flex-col justify-center w-full py-6 gap-2 flex-basis-1/2">
                        <h3 className="text-xs opacity-70 "> {organizer} - Organizer </h3>
                        <p className="font-bold text-lg line-clamp-2 leading-none"> {props.titles[number]} </p>
                        <p className="text-xs opacity-70 "> {props.locations[number]} - location </p>
                        <p className="text-xs opacity-70 "> {props.categories[number]} </p>
                        <p className="text-xs opacity-70 "> {props.types[number]} </p>
                        <div className="relative w-11/12 bg-gray-300 rounded-full h-3 mt-2 ">
                            <div className="absolute bg-green-600 h-3 duration-500 rounded-full  "
                                style={{
                                    width: ` ${Math.min(Math.max(Number(0), 0), 100)}%`,
                                }}>
                            </div>

                            <p className=" text-xs text-right mt-3 text-green-900 font-coiny">
                                ₡ {props.progress[number]} goal
                            </p>
                        </div>
                    </div>
                </div>
            ))}

        </section>
    );
}