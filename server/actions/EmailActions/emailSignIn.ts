"use server";
import { authSchemaLogin } from "@/types/schemaTypes/authSchema";
import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient();

export const emailSignIn = actionClient.schema(authSchemaLogin).action(async ({parsedInput:{email,password}}) => {
    
})