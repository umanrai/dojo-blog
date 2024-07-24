import { useEffect, useState } from "react";

const API_HOST = process.env.REACT_APP_API_HOST

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    url = API_HOST + url

    useEffect(() => {
        const abortCont = new AbortController(); // to handle cleanup

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
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
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        }, 1000);

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}
 
export default useFetch;