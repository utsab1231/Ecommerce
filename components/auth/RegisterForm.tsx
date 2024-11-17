"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authSchemaRegister as schema } from "@/types/schemaTypes/authSchema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAction } from "next-safe-action/hooks";
import { emailSignUp } from "@/server/actions/EmailActions/emailSignUp";

function RegisterForm() {
  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { execute, status } = useAction(emailSignUp);
  return (
    <div>
      <form onSubmit={() => {}} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-2">
          <label className="flex-1">Full Name:</label>
          <div className="flex-2 flex flex-col gap-1">
            <input
              type="text"
              {...register("fullName")}
              className="flex-2 w-32 md:w-96 text-black p-1 rounded-md"
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName.message}</p>
            )}
          </div>
        </div>
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

        <div className="flex justify-center">
          <Button
            type="submit"
            className={cn(
              "w-full bg-blue-500 font-bold hover:scale-105 hover:bg-blue-800 hover:shadow-sm hover:shadow-white transition-all duration-300",
              status === "executing" && "animate-pulse"
            )}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
