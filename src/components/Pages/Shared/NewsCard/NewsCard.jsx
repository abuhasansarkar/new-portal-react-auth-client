import React from "react";
import { Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import { FaShareAlt, FaStar, FaRegEye, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
     const {_id, author, rating, title, total_view, image_url, details} = news;
     // console.log(news);
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
               <img style={{width:"60px", borderRadius:"100px"}} src={author.img} alt="name" />
               <div className="info">
                    <b>{author?.name}</b>
                    <div>{author?.published_date}</div>
               </div>
          </div>
          <div className="shere-icons d-flex gap-2">
               <FaRegBookmark></FaRegBookmark>
               <FaShareAlt></FaShareAlt>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Image className="w-100" src={image_url}></Image>
          <Card.Text>
            {details.length > 200 ? 
            <> {details.slice(0, 200) + '...'} <Link to={`/news/${_id}`} >Read More</Link></> : 
            <>{details}</> }

          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
          <div className="rating text-warning">
               <FaStar></FaStar> {rating.number}
          </div>
          <div className="views text-success">
               <FaRegEye></FaRegEye> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
