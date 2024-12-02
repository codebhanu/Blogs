import blogPosts from "../Content/BlogsContent.jsx";
import { Link } from "react-router-dom";
import Button from "../Component/button.jsx";
const BlogpostFront = () => {
  return (
    <div className="border-red-700 relative hide h-screen w-screen bg-slate-100 flex flex-col items-center justify-center overflow-hidden">
      <p className="hide text-white text-6xl sm:text-6xl md:text-7xl lg:text-8xl mb-6">
        Blog
      </p>

      <div className="flex relative justify-center items-center flex-col bg-white w-11/12 sm:p-4 rounded-lg shadow-2xl h-2/3 sm:w-4/5 md:w-3/5 lg:w-4/5 xl:w-1/2 lg:p-8 md:p-6 p-3 break-word mb-4">
        <div className="relative p-2 flex flex-col w-full h-full overflow-hidden bg-gradient-to-b from-transparent text to-white">
          <h2 className="font-bold text-3xl mb-2">
            {blogPosts[blogPosts.length - 1].title}
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            {blogPosts[blogPosts.length - 1].date}
          </p>
          <p className="text-black text-sm sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 text-left">
            {blogPosts[blogPosts.length - 1].content}
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>
        <Link
          to={`/blogs/${blogPosts[blogPosts.length - 1].id}`}
          className="absolute bottom-3 text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>
      <Link to={"/Blogs/page/1"}>
        <Button title="More Posts" />
      </Link>

      <p className="absolute bottom-0 font-sans text-sm">
        this is the practie di bhanudddd all rights reserved
      </p>
    </div>
  );
};
export default BlogpostFront;
