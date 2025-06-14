import { Link } from '@tanstack/react-router'

interface ButtonProps {
  text: string;
  style: string;
  link?: string; // que sea opcional
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, style, link, onClick }: ButtonProps) {
  if (link) {
    return (
      <Link to={link} className={style}>
        <button className="cursor-pointer">{text}</button>
      </Link>
    )
  }

  // Si no hay link, renderiza solo el botón interactivo
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  )
}
