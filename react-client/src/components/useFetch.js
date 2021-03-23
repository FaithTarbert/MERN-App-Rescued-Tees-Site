import { useState, useEffect } from 'react';

const useFetch = (url) => {
    console.log("this is the useFetch top #1 ", url)
    //HOOKS useState
    const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // console.log("this is the useFetch url 1 ", url);
    //HOOK useEffect fires every time the page loads or something re-renders, passing an empty array makes it only fire when the page first loads. Adding a param(s) to the array makes the function only fire when that element(s) updates, called a dependency
    useEffect(() => {
        //abortController stops the fetch running if the page is unmounted by clicking away before fetch completes
        const abortCont = new AbortController();
        // console.log('useEffect url ', url);
        fetch(url, { signal: abortCont.signal })
        .then(res => {
            console.log("this the useFetch res 2", res);
            if(!res.ok){
                throw Error('Could not fetch the data for that resource');
            }
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            setData(data);
            // setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }
            // setIsPending(false);
            setError(err.message);
        });

        return () => abortCont.abort();
    }, []);//any variable in the [] means useEffect only fires when this variable is updated

    return { data, error };
};

export default useFetch;
