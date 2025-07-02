
import type { Container } from 'react-dom/client';
import Header from './Header.tsx';
import Section from './Section.tsx';
import Targets from './Targets.tsx';

import typeReact, { useState } from 'react'

interface HeaderProps {
    title: string;
    img: string;
    alt: string;
    text: string;
    button?: typeReact.ReactNode;
}

interface SectionProps {
    images: string[];
    images2: string[];
    links: string[];
    links2: string[];
}

interface TargetsProps {
    images: string[];
    alts: string[];
    titles: string[];
    organizers: string[];
    texts: string[];
    locations: string[];
    progress: number[];

}

interface Campaign {
    image: string;
    location: string;
    organizer: string;
    heading: string;
    progress: number;
    details: string;
    link: string;
}

interface ContainerProps {
    header?: HeaderProps;
    section?: SectionProps;
    targets?: TargetsProps;
    values?: Campaign[];
}


export default function Container(props: ContainerProps) {
    if (!props.header) return null;
    if (!props.section) return null;
    if (!props.targets) return null;


    //  
    console.log(props.values);

    //para imagenes
    const api_imagesSaves = "http://donatico_backend.test/storage/"; //url de la carpeta donde se guardan las imagenes

    const images = Array.isArray(props.values) ? props.values.map(campaign => `${api_imagesSaves}${campaign.image}`) : []; //busca la imagen en la api con la url de las carpetas

    console.log(images);
    //

    const [selected, setSelected] = useState(images[0]);

    return (

        <div className="flex flex-col justify-center items-center w-full">
            <Header {...props.header}> </Header>

            <h2 className="font-fredoka text-3xl font-semibold mt-20 -mb-15 cursor-default">Donation Options</h2>
            <Section {...props.section}> </Section>


            <h2 className="font-fredoka text-3xl font-semibold mt-20 -mb-15 cursor-default">Latest Campaings</h2>
            <Targets {...props.targets} images={images} /> 
        </div>

    )
}