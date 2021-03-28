import React, { useState } from 'react'

function PostsPage() {
  const [postLoader, setLoader] = useState(true)
  return (
    <div className="site-container">
      {postLoader ? (
        <div className="flex justify-center">
          Loader
          <div
            className="bg-blue-500 text-white px-2 py-2 rounded"
            onClick={() => setLoader(false)}
          >
            Loaded
          </div>
        </div>
      ) : (
        <div>List post</div>
      )}
    </div>
  )
}
export default PostsPage
