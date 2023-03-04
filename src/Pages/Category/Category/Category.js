import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummarycard from '../../../Shared/NewsSummarycard/NewsSummarycard';

const Category = () => {
    const categorynews = useLoaderData();
    return (
        <div>
            {
                categorynews.map(news => <NewsSummarycard
                    key={news._id}
                    news={news}
                ></NewsSummarycard>)
            }
        </div>
    );
};

export default Category;