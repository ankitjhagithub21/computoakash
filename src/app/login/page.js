import { LoginForm } from "@/components/custom/LoginForm";
import Link from "next/link";


export default function Login() {
  return (
   <div className="max-w-6xl mx-auto w-full p-5 grid grid-cols-1 gap-10 md:grid-cols-2 my-10 items-center">
    <div className="w-full">
      <img src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="login page" className="rounded-lg"/>
    </div>
   <div>
  <h2 className="text-3xl mb-5 font-medium">Login Now</h2>
    <LoginForm/>
    <p className="mt-4 text-sm">Don't have an account ? <Link href={"/signup"} className="mt-3 hover:underline">Create here</Link> </p>
   </div>
   </div>
  );
}
