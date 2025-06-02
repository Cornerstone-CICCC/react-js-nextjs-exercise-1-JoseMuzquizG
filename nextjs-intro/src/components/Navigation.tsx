import Link from "next/link"

const Navigation = () => {
  return (
    <nav>
      <menu className="flex py-5 gap-3 justify-center bg-gray-200 mb-10 *:hover:bg-white *:ease-in-out *:duration-150 *:px-4 *:py-2 *:rounded-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="contact-us">Get in Contact</Link>
        </li>
      </menu>
    </nav>
  )
}

export default Navigation