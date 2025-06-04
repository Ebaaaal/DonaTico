import { Link } from '@tanstack/react-router'

interface PrincipalProps {
    title: string;
    img: string;
    alt: string;
}

export default function Principal(props: PrincipalProps) {



    return (
    <Link to="/Login">
        <div id="principal" className="flex flex-col justify-center items-center min-h-dvh bg-lime-100">
            <h1 className="relative font-fredoka text-green-900 text-5xl font-bold">{props.title}
                <img className="absolute w-1/5 -top-4 -left-1 " src={props.img} alt={props.alt} />
            </h1>
        </div>
    </Link>
    )

}