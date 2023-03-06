import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
     const [categories, setCategories] = useState([]);

     useEffect( () => {
          fetch('https://news-portal-react-auth-server.vercel.app/news-categories')
          .then(res => res.json())
          .then(data => setCategories(data))
     }, [])

     return (
          <div className=''>
               <h3>All Categories</h3>
              {
               categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
              }
          </div>
     );
};

export default LeftSide;