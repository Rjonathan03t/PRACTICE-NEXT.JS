
import Link from "next/link";
export default function Header(){
    return(
        <div>
            <header>
                <Link href="/home" className="homePage">BLOG</Link>
            </header>
        </div>
    )
}