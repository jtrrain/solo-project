import React from 'react';

const FeedItem = ({ url }) => {
    return (
        <div>
            <img src={ url }></img>
            {/* if i get to adding comments theyd go here */}
        </div>
    )
}

export default FeedItem;