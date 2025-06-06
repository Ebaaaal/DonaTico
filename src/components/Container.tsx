
import type { Container } from 'react-dom/client';
import Header from './Header.tsx';
import Section from './Section.tsx';
import Targets from './Targets.tsx';

import typeReact from 'react'

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
    titles: string[];
    organizers: string[];
    texts: string[];
    images: string[];
    alts: string[];
}

interface ContainerProps {
    header?: HeaderProps;
    section?: SectionProps;
    targets?: TargetsProps;
}


export default function Container(props: ContainerProps) {
    if (!props.header) return null;
    if (!props.section) return null;
    if (!props.targets) return null;



    return (

        <div className="flex flex-col justify-center items-center w-full">
            <Header {...props.header}> </Header>

            <h2 className="font-fredoka text-3xl font-semibold mt-20 -mb-15 cursor-default">Donation Options</h2>
            <Section {...props.section}> </Section>
            
            
            <h2 className="font-fredoka text-3xl font-semibold mt-20 -mb-15 cursor-default">Latest Campaings</h2>
            <Targets {...props.targets}> </Targets>
        </div>

    )
}