import Link from "next/link";
import Header from "@/pages/header";
import Footer from "@/pages/footer";
import BlogList from "@/pages/blogList";
import "@/app/home.css";

export default function home() {
    return (
        <div>
            <Header/>
            <main>
                <h1>HOME</h1>
                <BlogList/>
            </main>
            <Footer/>
        </div>
    )
}