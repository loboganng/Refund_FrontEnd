import { useState } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Function to handle submit event
  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(name, email, password, confirmPassword);
  }


  return (
    <form className="w-full flex flex-col gap-4" action="" onSubmit={onSubmit}>

      <Input 
        required 
        legend="Name" 
        placeholder="Your name" 
        onChange ={(e) => setName(e.target.value)}
      />

      <Input 
        required 
        legend="E-mail" 
        type="email" 
        placeholder="your@email.com" 
        onChange ={(e) => setEmail(e.target.value)}
      />

      <Input 
        required 
        legend="Password" 
        type="password" 
        placeholder="Your password" 
        onChange ={(e) => setPassword(e.target.value)}
      />

      <Input 
        required 
        legend="Confirm password" 
        type="password" 
        placeholder="Confirm your password" 
        onChange ={(e) => setConfirmPassword(e.target.value)}
      />

{/* Declaring the type as submit is important to trigger the form submission when the button is clicked */}
      <Button type="submit" isLoading={isLoading}>
        Sign up
      </Button>

      <a href="/"className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Already have an account</a>
    </form>
  )
}