import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAccountSchema } from "@/schemas/createAccountSchema";
import clsx from "clsx";
import { createUser } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "sonner";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(createAccountSchema),
  });

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const { email, password, name, profilePic } = data;

      await createUser(email, password, name, profilePic);
      toast.success(
        "The new user was created successfully, now you need to log in"
      );

      reset();
      router.push("/");
    } catch (error) {
      toast.error(error.message || "Failed to create user");
      console.error("Error creating user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-3/5 flex flex-col justify-center p-2 border border-[#f5f5f5] rounded-md"
      >
        <h1 className="pt-4 pb-10 font-bold">Create your account</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="profilePic">
            Profile image <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="profilePicLink"
            {...register("profilePic")}
            className={clsx("border p-2 rounded-md", {
              "border-red-500": errors.profilePic,
              "border-[#f4f4f4]": !errors.profilePic,
              "hover:border-[#a6a6a6]": !errors.profilePic,
            })}
          />
          {errors.profilePic && (
            <p className="text-red-500">{errors.profilePic.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={clsx("border p-2 rounded-md", {
              "border-red-500": errors.name,
              "border-[#f4f4f4]": !errors.name,
              "hover:border-[#a6a6a6]": !errors.name,
            })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={clsx("border p-2 rounded-md", {
              "border-red-500": errors.email,
              "border-[#f4f4f4]": !errors.email,
              "hover:border-[#a6a6a6]": !errors.email,
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className={clsx("border p-2 rounded-md", {
              "border-red-500": errors.password,
              "border-[#f4f4f4]": !errors.password,
              "hover:border-[#a6a6a6]": !errors.password,
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="passwordConfirmation">Confirm Password</label>
          <input
            type="password"
            id="passwordConfirmation"
            {...register("passwordConfirmation")}
            className={clsx("border p-2 rounded-md", {
              "border-red-500": errors.passwordConfirmation,
              "border-[#f4f4f4]": !errors.passwordConfirmation,
              "hover:border-[#a6a6a6]": !errors.passwordConfirmation,
            })}
          />
          {errors.passwordConfirmation && (
            <p className="text-red-500">
              {errors.passwordConfirmation.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#3b49df] text-white text-sm py-2 px-4 rounded-md hover:bg-[#2f3ab1] self-start"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating..." : "Sign up"}
        </button>
      </form>
    </main>
  );
}
