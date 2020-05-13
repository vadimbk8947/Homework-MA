import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { Loader } from "./Loader";

export default () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.fetchedPosts);
  let loading = useSelector((state) => state.app.loading);

  const handleClick = () => {
    dispatch(fetchPosts());
  };

  if (loading) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <>
        <button onClick={handleClick} className="btn btn-primary">
          Download
        </button>
      </>
    );
  }
  return posts.map((post) => <Post post={post} key={post.id} />);
};
