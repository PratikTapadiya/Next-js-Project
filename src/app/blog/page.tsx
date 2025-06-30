import React from "react";
// import ThrowError from "./ThrowError";

const Blog = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Internal Delay");
    }, 2000);
  });
  return (
    <div>
      <h1>Blog Page!</h1>
      {/* <ThrowError></ThrowError> */}
    </div>
  );
};

export default Blog;
