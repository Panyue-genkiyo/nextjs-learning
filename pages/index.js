import React from 'react';
import Link from 'next/link'

const Home = () => {
    return (
        <div>
            <h1>home page</h1>
            <Link href="/blog">
                <a>blog</a>
            </Link>
            <Link href="/product">
                <a>product</a>
            </Link>
        </div>
    );
};

export default Home;
