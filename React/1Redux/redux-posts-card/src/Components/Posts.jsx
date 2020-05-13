import React, { useEffect } from "react";
import { connect } from "react-redux";

import api from "../api/api";
import { getPosts, changePostData } from "../redux/reducers/postReducer";
import { Dimmer, Loader } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import PostView from "./PostView";
import AllCards from "./AllCards";
import "../index.css";

function Posts({ getPosts, posts, changePostData }) {
  useEffect(() => {
    api
      .getAllPosts()
      .then((res) => getPosts(res))
      .catch(console.error);
  }, []);

  const handleLike = (post) => {
    api
      .changeLikeStatus(post)
      .then((res) => changePostData(res))
      .catch(console.error);
  };

  if (!posts.length) {
    return (
      <Dimmer active>
        <Loader size="massive">Loading</Loader>
      </Dimmer>
    );
  }

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          children={<AllCards posts={posts} handleLike={handleLike} />}
        />
        <Route
          exact
          path="/post/:id"
          children={<PostView posts={posts} />}
        ></Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
});

const mapDispatchToProps = {
  changePostData,
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
