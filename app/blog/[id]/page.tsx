"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Header from '@/pages/header';
import Footer from '@/pages/footer';
import BlogList from '@/pages/blogList';
import "@/app/home.css";
const PostDetails = () => {
    const pathName = usePathname();
    const id = pathName ? pathName.split("/").pop():null;

    return (
        <>
            <Header />
            <main>
                <div className='blogContent'>
                    <BlogList />
                    <div className="blogImg">
                        <h1>Blog-{id}</h1>
                        <Link href={`/blog/${id}/image`}>Voir l'image</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PostDetails;