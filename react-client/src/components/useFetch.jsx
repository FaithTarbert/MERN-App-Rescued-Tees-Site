import { useState, useEffect } from 'react';

const useFetch = (url) => {

    //HOOKS useState
    const [data, setData] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //HOOK useEffect fires every time the page loads or something re-renders, passing an empty array makes it only fire when the page first loads. Adding a param(s) to the array makes the function only fire when that element(s) updates, called a dependency
    useEffect(() => {
        //abortController stops the fetch running if the page is unmounted by clicking away before fetch completes
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(res => {
            console.log(res);
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
    }, [url]);//any variable in the [] means useEffect only fires when this variable is updated

    return { data, error };
};

export default useFetch;
