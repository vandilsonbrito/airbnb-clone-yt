import Image from "next/image";
import Link from "next/link";
import DesktopLogo from '../../public/airbnb-desktop.png';
import MobileLogo from '../../public/airbnb-mobile.webp';
import UserNav from "./UserNav";

function NavBar() {
  return (
    <nav className="w-full border-b">
        <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
            <Link href='/' >
                <Image 
                    src={DesktopLogo} 
                    className="w-32 hidden lg:block"
                    alt="Desktop Logo"
                />
                <Image 
                    src={MobileLogo} 
                    className="w-12 lg:hidden"
                    alt="Mobile Logo"
                />
            </Link>
            <div className="rounded-full border px-5 py-2">
                <h1>Hello from the search</h1>
            </div>

            <UserNav/>
        </div>
    </nav>
  )
}

export default NavBar
