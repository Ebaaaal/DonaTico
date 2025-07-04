import type { Container } from 'react-dom/client';
import Header from './Header.tsx';
import Section from './Section.tsx';
import Targets from './Targets.tsx';


import typeReact, { useState } from 'react'

interface HeaderCard {
    title: string;
    img: string;
    alt: string;
    text: string;
}

interface HeaderProps {
    card1: HeaderCard;
    card2: HeaderCard;
    card3: HeaderCard;
}
interface SectionProps {
    images: string[];
    images2: string[];
    links: string[];
    links2: string[];
}

interface TargetsProps {
    images: string[];
    organizers: string[];
    titles: string[];
    locations: string[];
    categories: string[];
    types: string[];
    progress: string[];

}

interface Campaign {
    img: string;
    name: string;
    description: string;
    location: string;
    categories: string;
    types: string;
    amount: number[];
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
    //console.log(props.values);

    //para imagenes
    const api_imagesSaves = "http://donatico_backend.test/storage/"; //url de la carpeta donde se guardan las imagenes

    const images = Array.isArray(props.values) ? props.values.map(campaign => `${api_imagesSaves}${campaign.img} `) : [];//busca la imagen en la api con la url de las carpetas
    const titles = Array.isArray(props.values) ? props.values.map(title => `${title.name} `) : [];
    const description = Array.isArray(props.values) ? props.values.map(description => `${description.description} `) : [];
    const location = Array.isArray(props.values) ? props.values.map(location => `${location.location} `) : [];
    const categories = Array.isArray(props.values) ? props.values.map(categories => `${categories.categories.name} `) : [];
    const types = Array.isArray(props.values) ? props.values.map(types => `${types.types.name} `) : [];
    const amount = Array.isArray(props.values) ? props.values.map(amount => `${amount.amount} `) : [];

    console.log(images, titles, description, location, categories, types, amount);
    //
    
    return (

        <div className="flex flex-col justify-center items-center w-full">
            <Header
                card1={props.header.card1}
                card2={props.header.card2}
                card3={props.header.card3}
            />

            <h2 className="font-fredoka text-3xl font-semibold mt-20 -mb-15 cursor-default">Donation Options</h2>
            <Section {...props.section}> </Section>


            <h2 className="font-fredoka text-3xl font-semibold -mb-15 cursor-default">Latest Campaings</h2>
            <Targets images={images} organizers={titles} titles={description} categories={categories} types={types} locations={location} progress={amount} />
        </div>

    )
}