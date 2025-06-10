import { Link } from '@tanstack/react-router'

interface ButtonProps {
    text: string;
    style: string;
    link: string;
}

export default function Button(props: ButtonProps) {
  
    return(
         <Link to={props.link}> <button className={props.style}> {props.text} </button></Link> 
    )
}