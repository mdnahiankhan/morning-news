import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummarycard from '../../../Shared/NewsSummarycard/NewsSummarycard';

const Category = () => {
    const categorynews = useLoaderData();
    return (
        <div>
            <h4>This is categories has :{categorynews.length}</h4>
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