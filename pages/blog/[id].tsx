import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '@/pages/header';
import Footer from '@/pages/Footer';
const blog = [
    { id: 1, contain: 'blog number1' },
    { id: 2, contain: 'blog number2' },
    { id: 3, contain: 'blog number3' },
    { id: 4, contain: 'blog number4' },
    { id: 5, contain: 'blog number5' }
]

const PostDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Header />
            <main>
                <div className='blogContent'>

                    <ul>
                        <p>BLOG-LIST</p>
                        {blog.map(blog => (
                            <li key={blog.id}>
                                <Link href={`/blog/${blog.id}`}>{blog.contain}</Link>
                            </li>
                        ))}
                    </ul>
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