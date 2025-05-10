"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import toast from "react-hot-toast"
import { Loader2 } from "lucide-react"

// Define schema using zod
const studentSignupSchema = z.object({
    name: z.string().min(1, "Name is required"),
    fatherName: z.string().min(1, "Father's name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string()
        .regex(/[A-Z]/, 'Password must contain atleast 1 uppercase letter')
        .regex(/[a-z]/, 'Password must contain atleast 1 lower case letter')
        .regex(/[0-9]/, "Password must contain atleast one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
        .min(8, "Password must be atleast 8 characters"),
    phone: z.string().regex(/^\d{10,15}$/, "Phone number must be valid"),
    age: z.number().min(5, "Too young").max(100, "Too old"),
    gender: z.enum(["male", "female", "other"]),
})

export default function Signup() {
    const [loading, setLoading] = useState(false)
   
    const form = useForm({
        resolver: zodResolver(studentSignupSchema),
        defaultValues: {
            name: "",
            fatherName: "",
            email: "",
            password: "",
            phone: "",
            age: 18,
            gender: "male",
        },
    })

    const onSubmit = async (values) => {
        setLoading(true)
       

        try {
            const res = await fetch("/api/student/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })

            if (!res.ok) toast.error("Signup failed")
            const data = await res.json()
            toast.success(data.message)
            form.reset()
        } catch (error) {
            console.error("Signup error:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-3xl mx-auto  px-5 py-10">
            <h2 className="mb-5 text-3xl font-medium">Create account</h2>
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {["name", "fatherName", "email", "password", "phone", "age"].map((fieldName) => (
                        <FormField
                            key={fieldName}
                            control={form.control}
                            name={fieldName}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{fieldName[0].toUpperCase() + fieldName.slice(1)}</FormLabel>
                                    <FormControl>
                                        <Input
                                            type={fieldName === "password" ? "password" : fieldName === "age" ? "number" : "text"}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gender</FormLabel>
                                <FormControl>
                                    <select {...field} className="w-full border rounded px-2 py-1">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={loading}>
                        {loading ? <>
                        <Loader2 className="animate-spin"/>
                        Please Wait...
                        </> : "Sign Up"}
                    </Button>

                   
                </form>
            </Form>
        </div>
    )
}
