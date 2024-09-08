import { useForm } from "react-hook-form";
import { socialSessionButtons } from "@/components/Icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { login } from "@/utils/api";
import { toast } from "sonner";

export default function Enter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(data) {
    console.log("Form submitted with data:", data);
    try {
      setIsSubmitting(true);
      const token = await login(data.email, data.password);

      if (token) {
        localStorage.setItem("token", token);
        router.push("/");
        setIsSubmitting(false);
        return;
      }

      console.log("Received token:", token);

      toast.error("Invalid data");
      setError("root.data", {
        type: "manual",
        message: "Invalid username or password",
      });
      setIsSubmitting(false);
    } catch (error) {
      toast.error("Invalid data");
      console.error("Error: ", error);
      setIsSubmitting(false);
    }
  }

  return (
    <main className="bg-white w-full max-h-full mx-auto max-w-3xl">
      <div className="w-3/4 flex flex-col gap-2 mx-auto">
        <section className="flex flex-col gap-4 items-center text-center">
          <img className="h-16" src="/dev-icon.png" alt="" />
          <h1 className="text-3xl font-bold">Join the DEV Community</h1>
          <p className="text-gray-600">
            DEV Community is a community of 2,015,351 amazing developers
          </p>
        </section>
        <section className="flex flex-col gap-2">
          {socialSessionButtons.map((button, index) => (
            <button
              key={index}
              className="w-full bg-transparent border border-[#d4d4d4] rounded hover:bg-gray-100 cursor-pointer flex items-center p-2"
            >
              <div className="flex items-center w-full">
                <div className="mr-2">{button.icon}</div>
                <div className="flex-grow text-sm text-center">
                  {button.name}
                </div>
              </div>
            </button>
          ))}
        </section>
        <div className="flex items-center justify-center w-full my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              className="w-full border border-[#d4d4d4] rounded py-2 focus:border-[#3b49df]"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              className="w-full border border-[#d4d4d4] rounded py-2 focus:border-[#3b49df]"
              type="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <div className="flex flex-row justify-between text-sm py-4">
              <div className="flex flex-row gap-2">
                <input
                  type="checkbox"
                  name="remember me"
                  id="remember-me"
                  className="form-checkbox size-4 focus:ring-[#3b49df]"
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <p className="text-[#3b49df]">Forgot password?</p>
            </div>
            <button
              className="w-full p-2 rounded-md bg-[#3b49df] text-[#f8f8f8]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Login"}
            </button>
          </form>
          <div className="flex flex-row justify-center">
            <p className="w-3/4 py-2 text-[#a1a1a1] text-sm text-center">
              By signing in, you are agreeing to our{" "}
              <span className="text-[#3b49df]">privacy policy</span>,{" "}
              <span className="text-[#3b49df]">terms of use</span> and{" "}
              <span className="text-[#3b49df]">code of conduct</span>.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
