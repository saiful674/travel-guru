import React from 'react';

const BlogCard = ({ sinBlog }) => {
    const { id, blog_name, blog, img_link } = sinBlog
    return (
        <div className='p-5 shadow-2xl rounded-lg bg-black bg-opacity-40'>
            <figure><img className='w-full rounded-lg h-60 md:h-96 ' src={img_link} alt="" /></figure>
            <h2  className='text-3xl text-center text-warning mt-4' style={{ fontFamily: ['Bebas Neue', 'cursive'] }}>{blog_name}</h2>
            <p>{blog}...<button className='text-warning btn-link m-0 p-0'>read more</button></p>
        </div>
    );
};

export default BlogCard;