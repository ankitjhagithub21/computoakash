"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {useRouter} from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import toast from "react-hot-toast"

// Schema for validation
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password:z.string()
    .regex(/[A-Z]/,'Password must contain atleast 1 uppercase letter')
    .regex(/[a-z]/,'Password must contain atleast 1 lower case letter')
    .regex(/[0-9]/,"Password must contain atleast one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
    .min(8,"Password must be atleast 8 characters")
})


export function LoginForm() {
  const router = useRouter()
  const [loading,setLoading] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async(values) => {
    setLoading(true)
    try{
      const res = await fetch("/api/student/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(values)
      })
      const data = await res.json()
      if(res.ok){
        toast.success(data.message)
        router.push("/")
      }else{
        toast.error(data.message)
      }
    }catch(error){
        console.log(error)
        toast.error(error.message)
    }finally{
      setLoading(false)
    }
  }

  return (
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={loading}>
          {
            loading ? <><Loader2 className="animate-spin" /> Please Wait... </> : 'Login'
          }
         
        </Button>
      </form>
    </Form>
  )
}
