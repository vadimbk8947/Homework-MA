import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { AppState } from "..";
import styled from "styled-components";
import { getAllPosts } from "../redux/postReducers";

interface IHome {
  posts: [];
  getAllPosts: () => void;
}

const Home: React.FC<IHome> = ({ getAllPosts, posts }) => {
  const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    margin: 0 auto;
  `;

  const Card = styled.div`
    width: calc(33.333% - 70px);
    height: 250px;
    margin: 30px 20px 0 20px;
    padding: 15px;
    background-color: #eeefff;
    border-radius: 7px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    overflow: auto;
  `;

  const Title = styled.div`
    // background-color: red;
    font-size: 20px;
    text-align: center;
    margin: 5px 0;
    height: 30px;
    border-bottom: 1px solid #999;
  `;

  const Body = styled.div`
    font-size: 16px;
    line-height: 1.5;
  `;

  const history = useHistory();

  //loader
  const loading = useSelector((state: AppState) => state.appReducers.loading);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 40,
        position: "absolute",
        top: "calc(50% - 40px)",
        left: "calc(50% - 40px)",
      }}
      spin
    />
  );

  useEffect(() => {
    getAllPosts();
  }, []);

  if (loading) {
    return <Spin indicator={antIcon} />;
  }

  return (
    <>
      <Wrapper>
        {posts.map((post: { title: string; id: number; body: string }) => (
          <Card onClick={() => history.push(`/posts/${post.id}`)} key={post.id}>
            <Title>{post.title}</Title>
            <Body>
              {post.body
                ? post.body.length > 300
                  ? post.body.slice(0, 300) + "..."
                  : post.body
                : null}
            </Body>
          </Card>
        ))}
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  posts: state.postReducers.posts,
});

const mapDispatchToProps = {
  getAllPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
