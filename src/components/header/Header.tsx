'use client'
import Link from "next/link"

const Header = () => {
  return (
    <div className="flex justify-center gap-10">
        <Link href={"/blog"}>blog</Link>
        <Link href={"/user"}>user</Link>
        <Link href={"/city"}>city</Link>
    </div>
  )
}

export default Header