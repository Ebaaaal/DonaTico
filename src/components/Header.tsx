import typeReact from "react";
interface HeaderProps {

    title: string;
    img: string;
    alt: string;
    text: string;
    button?: typeReact.ReactNode;
}

export default function Header(props: HeaderProps) {
    return (
        <div className="flex flex-col justify-between w-full text-left gap-10 mt-10 ">
            <h1 className="px-20 font-fredoka text-green-900 text-5xl font-bold cursor-default"> {props.title} </h1>

            <div className='flex bg-gray-800 w-full p-15 justify-center items-center'>
                <div className="flex flex-col items-end w-full bg-lime-200 rounded-4xl">
                    <div className="flex pt-10 text-left w-full justify-between px-7">
                        <h3 className="text-green-800 font-fredoka text-1xl font-semilight cursor-default min-md:text-3xl">{props.text}</h3>
                        <img className="w-3/7 " src={props.img} alt={props.alt} />
                    </div>
                    <div className='relative bottom-8 right-6'>
                        {props.button ? props.button : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}