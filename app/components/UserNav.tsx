import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
 
export async function UserNav() {

    const {getUser} = getKindeServerSession();
    const user = await getUser();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5"/>

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={ 
                            user?.picture ?? "https://ih1.redbubble.net/image.1380092756.9137/raf,360x360,075,t,fafafa:ca443f4786.jpg"
                         } 
                        alt="" 
                        className="rounded-full h-8 w-8 hidden lg:block"    
                        />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                { user ? (
                    <>
                        <DropdownMenuItem>
                            <LogoutLink className="w-full">Logout</LogoutLink>
                        </DropdownMenuItem>
                    </>
                ): (
                    <>
                        <DropdownMenuItem>
                            <RegisterLink className="w-full">Register</RegisterLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LoginLink className="w-full">Login</LoginLink>
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
 }
 
 export default UserNav
 