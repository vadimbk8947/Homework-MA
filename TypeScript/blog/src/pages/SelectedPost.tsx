import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { AppState } from "..";
import { getSelectedPost } from "../redux/postReducers";
import API from "../api";

interface ISelectedPost {
  post: IPost;
  match: IMatch;
  getSelectedPost: (id: string) => void;
}

interface IPost {
  title: string;
  body: string;
  id: number | string;
}
interface IMatch {
  isExact: boolean;
  params: {
    postId: string;
  };
  path: string;
  url: string;
}

const SelectedPost: React.FC<ISelectedPost> = ({
  getSelectedPost,
  match,
  post,
}) => {
  //post
  const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    background-color: #fff;
    postiton: relative;
  `;

  const Post = styled.div`
    width: 80%;
    margin: 30px auto;
  `;

  const Title = styled.div`
    min-height: 30px;
    font-size: 20px;
    text-align: center;
    margin: 5px 0;
    border-bottom: 1px solid #999;
  `;

  const Body = styled.div`
    font-size: 16px;
    line-height: 1.5;
    margin-top: 10px;
  `;

  const BtnComment = styled.button`
    width: 95px;
    height: 20px;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    background-color: rgb(252, 255, 49);
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: -30px;
    right: 90px;
  `;

  const BtnRemove = styled.button`
    width: 95px;
    height: 20px;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    background-color: red;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: -30px;
    right: -20px;
  `;

  //comment

  const CommentWrap = styled(Post)`
    margin-top: 100px;
    width: 30%;
    display: flex;
    flex-flow: column;
    position: relative;
  `;

  const CommentBody = styled.textarea`
    width: 100%;
    min-height: 100px;
    margin: 0 auto;
    resize: none;
    border-radius: 5px;
    outline: none;
    padding: 10px;
    font-size: 16px;
  `;

  const history = useHistory();

  useEffect(() => {
    getSelectedPost(match.params.postId);
  }, []);

  const handleRemoveClick = () => {
    API.removePost(match.params.postId);
    API.getAllPosts();
    history.push("/");
  };

  return (
    <>
      <Wrapper>
        <Post key={post.id}>
          <Title>{post.title}</Title>
          <Body>{post.body}</Body>
        </Post>
        <CommentWrap>
          <CommentBody placeholder="Enter comment for this post" />
          <BtnComment>Add comment</BtnComment>
          <BtnRemove onClick={handleRemoveClick}>Remove post</BtnRemove>
        </CommentWrap>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  post: state.postReducers.selected,
});

const mapDispatchToProps = {
  getSelectedPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedPost);
