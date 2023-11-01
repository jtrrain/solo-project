import React, { useEffect, useState } from 'react';
import FeedItem from './FeedItem';

const Feed = ({ url }) => {
    const [urls, updateUrls] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data2 = await fetch(url).then((res) => res.json());
            console.log('data2', data2);
            updateUrls(data2);
        }
        fetchData();
    }, []);

    return (
        <div>
            {urls.map((url, index, array) => {
                return (
                    <FeedItem url={ url } key={ index }/>
                );
            })}
        </div>
    );
};

export default Feed;