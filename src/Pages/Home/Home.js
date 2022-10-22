import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummarycard from '../../Shared/NewsSummarycard/NewsSummarycard';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            <h3>This is Home and all news is:{allnews.length}</h3>
            {
                allnews.map(news => <NewsSummarycard
                    key={news._id}
                    news={news}
                ></NewsSummarycard>)
            }
        </div>
    );
};

export default Home;