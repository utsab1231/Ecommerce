// components/Form.tsx
"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchemaLogin as schema } from "@/types/schemaTypes/authSchema";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { emailSignIn } from "@/server/actions/EmailActions/emailSignIn";
import { useAction } from "next-safe-action/hooks";
import { cn } from "@/lib/utils";

type FormData = z.infer<typeof schema>;

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { execute, status } = useAction(emailSignIn);

  const onSubmit = (data: FormData) => {
    execute(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col md:flex-row gap-2">
        <label className="flex-1">Email:</label>
        <div className="flex-2 flex flex-col gap-1">
          <input
            type="text"
            {...register("email")}
            className="flex-2 w-32 md:w-96 text-black p-1 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <label className="flex-1">Password:</label>
        <div className="flex flex-col flex-2 gap-1">
          <input
            type="password"
            {...register("password")}
            className="w-32 md:w-96 text-black p-1 rounded-md"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-baseline">
        <Button
          type="submit"
          className={cn(
            "w-48 md:w-72 bg-blue-500 font-bold hover:scale-105 hover:bg-blue-800 hover:shadow-sm hover:shadow-white transition-all duration-300",
            status === "executing" && "animate-pulse"
          )}
        >
          Login
        </Button>
        <Button type="button" variant={"link"} className="p-0">
          Forget your password?
        </Button>
      </div>
    </form>
  );
};

export default Form;
