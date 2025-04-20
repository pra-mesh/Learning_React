import React from "react";
import { Link } from "react-router";

const Blogs = () => {
  return (
    <div>
      <ol>
        <li>
          <Link to="/blog/the-great-blog-1">The Great Blog 1</Link>
        </li>
        <li>
          <Link to="/blog/broadway-nepal">Broadway Nepal</Link>
        </li>
      </ol>
    </div>
  );
};

export default Blogs;
