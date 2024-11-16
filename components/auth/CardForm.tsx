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
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

export default function CardForm({
  cardTitle,
  socialButtons,
  children,
}: CardFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {socialButtons && (
        <CardFooter>
          <div className="flex flex-col space-y-2">
            <Button
              variant={"outline"}
              onClick={() =>
                signIn("google", { redirect: false, redirectTo: "/" })
              }
            >
              Login with Google
            </Button>
            <Button
              variant={"outline"}
              onClick={() =>
                signIn("github", { redirect: false, redirectTo: "/" })
              }
            >
              Login with Github
            </Button>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
