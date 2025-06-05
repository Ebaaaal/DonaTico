
import type { Container } from 'react-dom/client';
import  Header  from './Header.tsx';
import  Section  from './Section.tsx';

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

interface ContainerProps {
   header?: HeaderProps;
   section?: SectionProps
}


export default function Container(props: ContainerProps) {
   //if(!props.header) return null;
   if(!props.section) return null;
   


    return (
        
        <div className="flex flex-col items-center">
        {/* <Header {...props.header}> </Header> */}
        <Section {...props.section}> </Section>
        </div>
        
    )
}