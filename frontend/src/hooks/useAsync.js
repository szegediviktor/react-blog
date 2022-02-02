import { useEffect, useState } from "react";

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
export default useAsync;
