import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useIsOverflowing from '/Users/bhanudahal/blog/blogben/src/Component/useIsOverflowing.js';

const blogPosts = [
  {
    id: 1,
    title: 'Blog Post 1',
    content: 'This is the content of the first blog post. It has a certain number of words.',
    date: 'June 30, 2024',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content: 'This is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorter This is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorterThis is the content of the second blog post. It might be longer or shorter than the first one. It might be longer or shorter than the first one. It might be longer or shorter than the first one. It might be longer or shorter than the first one. It might be longer or shorter than the first one.',
    date: 'July 1, 2024',
  },
  // Add more blog posts here...
];

const Blogs = () => {
  return (
    <div className="bg-pink-100 flex justify-center items-center flex-col overflow-scroll p-4">
      {blogPosts.map((blogPost) => (
        <BlogPost key={blogPost.id} blogPost={blogPost} />
      ))}
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
          isOverflowing ? 'bg-gradient-to-b from-transparent to-white' : ''
        }`}
      >
        <h1 className="font-bold text-xl mb-2">{blogPost.title}</h1>
        <p className="text-sm text-gray-600 mb-4">{blogPost.date}</p>
        <p className="mb-4">{blogPost.content}</p>
        {isOverflowing && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>
      <Link to={`/blogs/${blogPost.id}`} className="absolute bottom-3 text-blue-500 hover:underline">
        Read More
      </Link>
    </div>
  );
};

export default Blogs;
