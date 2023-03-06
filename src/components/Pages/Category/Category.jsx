import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';


const Category = () => {
     const categoryNews = useLoaderData();
     // console.log(categoryNews);
     return (
          <div>
               <h1>this is categorys has news</h1>
               {
                    categoryNews.map(news => <NewsCard news={news} key={news._id}></NewsCard>)
               }
          </div>
     );
};

export default Category;