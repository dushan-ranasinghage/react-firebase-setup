import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import { getPostsFunc } from '../../store/actions/post.action'

const HomeContainer = ({ posts, getPostsFunc }) => {

    console.log("POSTS", posts)

    useEffect(() => {
        if(posts.length === 0){
            getPostsFunc()
        }
    },[posts])

    return <Home posts={posts} />
}

const mapStateToProps = state => {
    return { posts: state.post.posts }
}

export default connect(mapStateToProps, { getPostsFunc })(HomeContainer)
