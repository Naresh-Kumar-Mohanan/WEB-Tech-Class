import React, { useState, useEffect } from 'react'

export default function Api() {
    let [data, setData] = useState(null)
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(false)

    useEffect(() => {

        async function abc() {
            let res = await fetch("https://fakestoreapi.com/products")
            console.log(res);
            if (res.status != 200) {
                setLoading(false);
                setError(true);
            } else {
                let data = await res.json();
                setData(data)
                setLoading(false)
                setError(true);
            }
        }
        abc()
    }, [])

    if (loading) {
        return (
            <div>
                Page Is Loading
            </div>
        )
    }

    if (error) {
        return (
            <div>
                There is an Error Please Try Again
            </div>
        )
    }
}
