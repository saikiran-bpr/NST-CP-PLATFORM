"use client";
import React, { SyntheticEvent, useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import Link from "next/link";
import { auth, provider } from "@/lib/firebaseConfig";
import { signInWithPopup,createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [inputDetails, setInputDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    passwords: false,
    password: false,
  });
  const handleInput = (e: any) => {
    setInputDetails((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };
  const emailChecker = (email: string) => {
    console.log(email.split("@")[1]);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailChecker(inputDetails.email);
  };

  const handleGoogle = (e : any) => {
    e.preventDefault();
    console.log("Attempting Google sign-in...");
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log("User signed in:", data.user.email);
        if(data.user.email){
          localStorage.setItem("email", data.user.email);
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  const handleSignup = async (e : any) => {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, inputDetails.email, inputDetails.password);
        localStorage.setItem('email', inputDetails.email);
        router.push('/dashboard');
    } catch (error) {
        console.error('Error during sign-up:', error);
    }
};

  return (
    <div className="max-w-md mt-24 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to CP Club
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Sign up to get started!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstName"
              placeholder="Tyler"
              type="text"
              onChange={handleInput}
              value={inputDetails.firstName}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastName"
              placeholder="Durden"
              type="text"
              onChange={handleInput}
              value={inputDetails.lastName}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            onChange={handleInput}
            value={inputDetails.email}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            onChange={handleInput}
            value={inputDetails.password}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            onChange={handleInput}
            value={inputDetails.confirmPassword}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          onClick={handleSignup}
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
        <p className=" text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link href={"/signin"} className=" text-sm text-blue-500">
            Sign in
          </Link>
        </p>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
            onClick={handleGoogle}
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
