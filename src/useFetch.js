import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {          // res (response object)
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }

                return res.json();  // res.json=(this passes the json into a javascript object) then return it.
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
    }, [url]);

    return {data, isPending, error};
}
 
export default useFetch;