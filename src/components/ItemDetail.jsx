import React, { useState, useEffect } from 'react';

export default function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
        )
        const item = await fetchItem.json();
        setItem(item);
    };

    return (
        <div>
            <h1>{item.id}</h1>
        </div>
    )
}

