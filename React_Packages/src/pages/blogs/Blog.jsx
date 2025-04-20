import React from "react";
import { useParams /*, useLocation */ } from "react-router";
const Blog = () => {
  //const location = useLocation();
  const { slug } = useParams();
  return <div>Blog name is {slug}</div>;
};

export default Blog;
