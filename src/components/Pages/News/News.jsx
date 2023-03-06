import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
  const detailsNews = useLoaderData();
  console.log(detailsNews);
  const { category_id, image_url, title, details  } = detailsNews;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title><h1>{title}</h1></Card.Title>
          <Card.Text>{details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="primary">Go to Post Category</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
