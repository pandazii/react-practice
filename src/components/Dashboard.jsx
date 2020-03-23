import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './Dashboard.css'

export default function Dashboard() {

    // useEffect wordt aangeroepen nadat de DOM is ingeladen.
    // What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. 
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );

        const items = await data.json();
        setItems(items);
    };

    return (
        <h1>
            {items.map(item => (
                <h5>
                    <Link to={`/dashboard/${item.id}`}>
                        {item.title}
                    </Link>
                </h5>
            ))}
        </h1>
    )
}
