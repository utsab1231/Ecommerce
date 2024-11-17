"use server";
import { authSchemaRegister } from "@/types/schemaTypes/authSchema";
import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient();

export const emailSignUp = actionClient.schema(authSchemaRegister).action(async ({parsedInput:{email,password}}) => {
    
})