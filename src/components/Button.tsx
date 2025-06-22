import { Link } from '@tanstack/react-router'

interface ButtonProps {
  text: string;
  style: string;
  link?: string; // que sea opcional
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function Button(props: ButtonProps) {
  
    return (
      <Link to={props.link} className={props.style} onClick={props.onClick}>
        <button className="cursor-pointer" >{props.text}</button>
      </Link>
    )
  

  // Si no hay link, renderiza solo el botón interactivo
  // return (
  //   <button onClick={props.onClick} className={props.style}>
  //     {props.text}
  //   </button>
  // )
}
