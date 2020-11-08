import React from 'react'

const LotTable = ({ posts, postsLoading }) => {
  return (
    <>
    {posts.map((item, i) => {
      return <li key={i}>{item.title}</li>
    })}
    </>
  )
}

export default LotTable
