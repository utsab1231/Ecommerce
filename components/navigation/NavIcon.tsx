"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { NaviconProps } from "@/types/components/Navigation";
import DefaultIcon from "../ui/DefaultIcon";
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";
import Link from "next/link";

function NavIcon({ session }: NaviconProps) {
  const isUserLoggedIn = session?.user;

  // Sign In Function
  const handleSignIn = () => {
    signIn();
  };
  if (isUserLoggedIn) {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none active:bg-transparent hover:scale-[1.2]">
            <DefaultIcon image={session?.user?.image} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem onClick={() => signOut()}>
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  } else {
    return (
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none active:bg-transparent hover:scale-[1.2]">
            <DefaultIcon image={session?.user?.image} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Link href={"/auth/login"}> Sign In</Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>About Us</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
}

export default NavIcon;
