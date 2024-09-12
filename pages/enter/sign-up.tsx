import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAccountSchema } from "@/schemas/createAccountSchema";
import clsx from "clsx";
import { createUser } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createAccountSchema),
  });

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const { email, password, name, profilePic } = data;
      await createUser(email, password, name, profilePic[0]);
      router.push("/enter");
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-3/5 flex flex-col justify-center p-2"
      >
        <h1>Create your account</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="profilePic">Profile image</label>
          <input
            type="file"
            id="profilePic"
            {...register("profilePic")}
            className={clsx("border p-2", {
              "border-red-500": errors.profilePic,
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
            className={clsx("border p-2", {
              "border-red-500": errors.name,
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
            className={clsx("border p-2", {
              "border-red-500": errors.email,
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
            className={clsx("border p-2", {
              "border-red-500": errors.password,
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
            className={clsx("border p-2", {
              "border-red-500": errors.passwordConfirmation,
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
          className="bg-blue-500 text-white p-2 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating account..." : "Create account"}
        </button>
      </form>
    </main>
  );
}
