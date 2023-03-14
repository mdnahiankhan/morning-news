import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummarycard from '../../Shared/NewsSummarycard/NewsSummarycard';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
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