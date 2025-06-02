import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact-us - Next JS Intro",
  description: "This page is the contact page for the next JS intro exercise"
}

const page = () => {
  return (
    <div>
      <h1>Get in contact with us!!!!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus at inventore cumque facere nostrum expedita, modi mollitia adipisci, veritatis odit unde sit, beatae voluptate!</p>
    </div>
  )
}

export default page