import { useState } from "react"
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Function to handle submit event
  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(email, password);
  }


  return (
    <form className="w-full flex flex-col gap-4" action="" onSubmit={onSubmit}>

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

{/* Declaring the type as submit is important to trigger the form submission when the button is clicked */}
      <Button type="submit" isLoading={isLoading}>
        Sign in
      </Button>

      <a href="/signup"className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Create an account</a>
    </form>
  )
}