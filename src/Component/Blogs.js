import React, { useRef, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useIsOverflowing from "/Users/bhanudahal/blog/blogben/src/Component/useIsOverflowing.js";

import blogPosts from "../Content/BlogsContent";

const Blogs = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(Number(page) || 1);
  const numberPostPerPage = 5;

  useEffect(() => {
    if (page) {
      setCurrentPage(Number(page));
    }
  }, [page]);

  let totalPages = Math.round(blogPosts.length / numberPostPerPage);

  if (
    blogPosts.length % numberPostPerPage > 0 ||
    blogPosts.length % numberPostPerPage <= 4
  ) {
    totalPages += 1;
  }

  const indexOfLastPost = currentPage * numberPostPerPage;
  const indexOfFirstPost = indexOfLastPost - numberPostPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (currentPage > totalPages) {
      navigate("/*");
    }
  }, [currentPage, totalPages, navigate]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/blogs/page/${pageNumber}`);
  };

  return (
    <div className="relative w-screen min-h-screen justify-center bg-pink-50 flex flex-col ">
      

      <div className="flex-grow flex items-center justify-center flex-col mb-24">
        {currentPosts.map((blogPost) => (
          <BlogPost key={blogPost.id} blogPost={blogPost} />
        ))}
      </div>

      <div className="w-full absolute bottom-7 flex justify-center items-center ">
        <Pagination
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

const BlogPost = ({ blogPost }) => {
  const contentRef = useRef(null);
  const isOverflowing = useIsOverflowing(contentRef);

  return (
    <div className="flex relative justify-center items-center flex-col bg-white mt-10 max-w-3xl p-6 rounded-lg shadow-2xl w-[900px] h-[500px]">
      <div
        ref={contentRef}
        className={`relative p-2 flex flex-col w-full h-full overflow-hidden ${
          isOverflowing ? "bg-gradient-to-b from-transparent to-white" : ""
        }`}
      >
        <h1 className="font-bold text-xl mb-2 text-black">{blogPost.title}</h1>
        <p className="text-sm text-gray-600 mb-4">{blogPost.date}</p>
        <p className="mb-4 text-black">{blogPost.content}</p>
        {isOverflowing && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>
      <Link
        to={`/blogs/${blogPost.id}`}
        className="absolute bottom-3  text-blue-500 hover:underline font-bold  "
      >
        Read More
      </Link>
    </div>
  );
};

const Pagination = ({ totalPages, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className="felx flex-row   text-white content-between ">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 p-x-1   border rounded ${
              number === currentPage ? "bg-blue-500 text-white" : "bg-red-500"
            } `}
          >
            {number}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Blogs;
