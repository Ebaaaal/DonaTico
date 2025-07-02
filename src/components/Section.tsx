import { Link } from '@tanstack/react-router'


interface SectionProps {
    images: string[];
    images2: string[];
    links: string[];
    links2: string[];
}

export default function Section(props: SectionProps) {
    return (
        <section className="flex flex-col justify-center items-center my-25 w-full gap-6">

            <div className="flex justify-around w-6/7 gap-4">
                {props.images.map((image, number) => (
                    <Link to={props.links[number]} className='flex justify-around items-center ' >
                        <img src={image} alt={Image ${number}} className='w-13 min-md:w-20 ' />
                    </Link>
                ))}
            </div>
            
            <div className="flex justify-around w-6/9 gap-4">
                {props.images2.map((image2, number) => (
                    <Link to={props.links2[number]} className='flex justify-around items-center ' >
                        <img src={image2} alt={Image ${number}} className='w-13 min-md:w-20 ' />
                    </Link>
                ))}
            </div>

        </section>
    );
}