"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardFormProps } from "@/types/components/Auth";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithubAlt } from "react-icons/fa";

export default function CardForm({
  cardTitle,
  socialButtons,
  children,
  backButtonHref,
  backButtonLabel,
}: CardFormProps) {
  return (
    <Card className="flex flex-col items-center">
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>

      <CardFooter className="flex flex-col gap-5">
        {socialButtons && (
          <div className="flex flex-col md:flex-row gap-5">
            <Button
              variant={"outline"}
              onClick={() =>
                signIn("google", { redirect: false, redirectTo: "/" })
              }
              className="hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Login with Google
              <FcGoogle />
            </Button>
            <Button
              variant={"outline"}
              onClick={() =>
                signIn("github", { redirect: false, redirectTo: "/" })
              }
              className="hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Login with Github
              <FaGithubAlt />
            </Button>
          </div>
        )}
        {backButtonHref && (
          <Button variant={"link"} asChild className="bg-purple-400 w-48 md:w-72 text-black">
            <Link href={backButtonHref}>{backButtonLabel}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
