import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {
     const allNews = useLoaderData();
     return (
          <div>
              
               {
                    allNews.map(news => <NewsCard news={news} key={news._id}></NewsCard>)
               }
          </div>
     );
};

export default Home;