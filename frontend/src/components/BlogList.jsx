import { useEffect, useState } from "react";
import Blogpost from "./Blogpost";

const fetchBlogposts = async () => {
    const url = "http://localhost:3000/posts";
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
};

const useAsync = (fn) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    // useEffectnek amit átadok SOSEM lehet ASYNC, mert nem lett visszatérési értéke egyből, amire szüksége van.
    useEffect(() => {
        fn().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [fn]);

    return [data, loading];
};

const BlogList = () => {
    const [data, loading] = useAsync(fetchBlogposts);
    if (loading) {
        return <section> Loading ... </section>;
    }
    console.log(data);
    return (
        <section>
            {data.map((item) => (
                <Blogpost
                    key={item.id}
                    author={item.author}
                    title={item.title}
                    body={item.body}
                />
            ))}
        </section>
    );
};

export default BlogList;
