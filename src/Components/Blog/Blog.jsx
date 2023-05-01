import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div>
            blogs {blogs.length}
        </div>
    );
};

export default Blog;