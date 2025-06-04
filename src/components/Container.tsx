
import type { Container } from 'react-dom/client';
import  Header  from './Header.tsx';

import typeReact from 'react'

interface HeaderProps {

    title: string;
    img: string;
    alt: string;
    text: string;
    button?: typeReact.ReactNode;
}



interface ContainerProps {
   header?: HeaderProps;
}


export default function Container(props: ContainerProps) {
   if(!props.header) return null;
   


    return (
        
        <div>
        <Header {...props.header}> </Header>
        {/* <Principal {...props.principalProps}> </Principal> */}
        </div>
        
    )
}