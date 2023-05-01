import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../Card/BlogCard/BlogCard';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div className='mt-32 mb-10'>
            <h1 className='text-6xl text-center' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>Our Recent Blogs </h1>
            <div className='grid md:grid-cols-2 gap-6 mt-10'>
                {
                    blogs.map(sinBlog => <BlogCard
                    key={sinBlog.id}
                    sinBlog={sinBlog}
                    ></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blog;