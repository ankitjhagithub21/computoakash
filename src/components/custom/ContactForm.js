'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useState } from "react"
import toast from "react-hot-toast";


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

     if(res.ok){
       const data = await res.json();
       setFormData({ name: '', email: '', message: '' });
       toast.success(data.message)

     }else{
      toast.error(data.message)
     }
    
      
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative mb-4">
        <Label htmlFor="name" className={"mb-2"}>Name</Label>
        <Input type="name" placeholder="Enter your name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      </div>
      <div className="relative mb-4">
        <Label htmlFor="email" className={"mb-2"}>Email</Label>
        <Input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      </div>
      <div className="relative mb-4">
        <Label htmlFor="message" className={"mb-2"}>Message</Label>
        <Textarea placeholder="Enter your message here..." value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
      </div>

      <Button disabled={loading}>
        {
          loading && <Loader2 className="animate-spin" />
        }
        {
          loading ? 'Sending...' :'Send Message'
        }

      </Button>
    </form>
  )
}

export default ContactForm