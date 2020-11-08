import React from 'react'

import Test from './TestView'

const Home = ({ posts }) => {
    console.log("XXX", posts)
    return (
        <>
            <Test posts={posts}/>
        </>
    )
}

export default Home

