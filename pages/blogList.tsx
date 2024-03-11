import Link from "next/link";
const blog = [
    { id: 1, contain: 'blog number1' },
    { id: 2, contain: 'blog number2' },
    { id: 3, contain: 'blog number3' },
    { id: 4, contain: 'blog number4' },
    { id: 5, contain: 'blog number5' }
]
export default function blogList (){
    return (
        <div>
                <ul>
                    <p>BLOG-LIST</p>
                    {blog.map(blog => (
                        <li key={blog.id}>
                            <Link href={`/blog/${blog.id}`}>{blog.contain}</Link>
                        </li>
                    ))}
                </ul>
        </div>
    )
}