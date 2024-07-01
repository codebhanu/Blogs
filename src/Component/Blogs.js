import React, { useRef,useState,useEffect } from 'react';
import { Link,useParams,useNavigate} from 'react-router-dom';
import useIsOverflowing from '/Users/bhanudahal/blog/blogben/src/Component/useIsOverflowing.js';

import blogPosts from '../Content/BlogsContent';
import NavButton from './NavButton';




const Blogs = () => {
  const {page}=useParams()
  const navigate = useNavigate()
  const [currentPage,setCurrentPage] = useState(Number(page)||1)
  const numberPostPerPage=5;

  useEffect(()=>{
    if (page){
      setCurrentPage(Number(page))
    }

  },[page])

  const totalPages= Math.round(blogPosts.length / numberPostPerPage)

  const indexOfLastPost=currentPage*numberPostPerPage
  const indexOfFirstPost =indexOfLastPost-numberPostPerPage
  const currentPosts=blogPosts.slice(indexOfFirstPost,indexOfLastPost)
  
  useEffect(() =>{
    if(currentPage>totalPages) {
     navigate('/*')
    }
  },[currentPage,totalPages,navigate])


  const paginate =(pageNumber)=>{
    setCurrentPage(pageNumber)
    navigate(`/blogs/page/${pageNumber}`);
  }
 


  return (

    <div className='bg-red-600 flex justify-center items-center flex-col overflow-scroll space-x-3'>
     <NavButton/>
    <div className="  flex justify-center items-center flex-col  p-4">
      {currentPosts.map((blogPost) => (
        <BlogPost key={blogPost.id} blogPost={blogPost} />
      ))}
      
    </div>
    <Pagination className='' totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
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
      {isOverflowing &&( <Link to={`/blogs/${blogPost.id}`} className="absolute bottom-3  text-blue-500 hover:underline font-bold  ">
          Read More
        </Link>)}
      
    </div>
  );
};

const Pagination =({totalPages,paginate,currentPage})=>{
  const pageNumbers =[]
  for (let i=1; i<=totalPages; i++){
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className='felx flex-row justify-center  bg-blue-700 w-[300px]  text-white '>
        {pageNumbers.map(number=>(
          
          
          <button key={number} onClick={()=>paginate(number)}  className={`px-3 p-x-1 border rounded ${number===currentPage? 'bg-blue-500 text-white':''} `}>{number}</button>
        
        
        ))}
       </div> 
    </nav>
  )

}

export default Blogs;
