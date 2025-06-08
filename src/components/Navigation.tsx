import { Link } from '@tanstack/react-router'

export default function Navigation() {
    
    return (
        <footer className="bg-black fixed bottom-0 w-full h-1/18 z-50">
            <nav className='flex justify-around items-center h-full'>
                <Link to="/HomePage">
                    <img src="home.svg" alt="home" className='w-10 h-10' />
                </Link>

                <Link to="/CreateDonation"  >
                    <img src="donate.svg" alt="Donation" className='w-10 h-10' />
                </Link>

                <Link to="/Notifications" >
                    <img src="bell.svg" alt="Notification" className='w-10 h-10 ' />
                </Link>

                <Link to="/"  >
                    <img src="user.svg" alt="profile" className='w-10 h-10 ' />
                </Link>

            </nav>
        </footer>
    )
}