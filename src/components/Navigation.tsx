import { Link } from '@tanstack/react-router'

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Login">login</Link>
                </li>
            </ul>
        </nav>
    )
}