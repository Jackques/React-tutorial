import {useEffect, useState} from "react";

// ! custom hooks in React needs to start with the word "use", otherwise it will not work
const useFetch = (url) => {
    const [data, setData] = useState(
        //[
        // {title: "first title", body: "Lorum ipsum...", author: "Jack", id: 1},
        // {title: "second title", body: "Lorum ipsum...", author: "Tim", id: 2},
        // {title: "third title", body: "Lorum ipsum...", author: "Jack", id: 3},
        // above blogs are dummy data to test if it works correctly
        //]
        null // since this is the defaultvalue, we cannot 'map/loop' over this value when setting the blogs initially, thus we should first check if blogs is available
    );
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // url = 'http://localhost:7000/blogs'
    useEffect(() => {
        console.log('this fires on every init & manipulation of the attached dependancies');
        setTimeout(()=>{
            fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error(`Could not receive data from the resource`);
                    }
                    return res.json();
                })
                .then(data => {
                    console.log('Data from JSON Server: ', data);
                    // Asynchronously set the blogs
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err)=>{
                    console.log(err.message);
                    setError(true);
                    setIsPending(false);
                })
        }, 1000)
    }, []);

    return { data, isPending, error };
}

export default useFetch;