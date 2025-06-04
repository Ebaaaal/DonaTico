import { Link } from '@tanstack/react-router'

interface ButtonProps {
    text: string;
    style: string;
    link: string;
}

export default function Button(props: ButtonProps) {
  
    return(
         <Link to={props.link} className={props.style}> <button > {props.text} </button></Link> 
    )
}