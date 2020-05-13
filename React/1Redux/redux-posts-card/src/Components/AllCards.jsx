import React from "react";
import { Link } from "react-router-dom";
import { Card as SUICard, Icon, Image, Button, Label } from "semantic-ui-react";
import "../index.css";

export default function Card({ posts, handleLike }) {
  return (
    <ul className="posts-list">
      {posts.map((post) => (
        <Link
          key={`${post.id}`}
          className="post-list__link"
          to={`/post/${post.id}`}
        >
          <SUICard>
            <Image src={post.img} wrapped ui={false} />
            <SUICard.Content>
              <SUICard.Header>{post.title}</SUICard.Header>
              <SUICard.Meta>
                <span className="date">{post.createdAt}</span>
              </SUICard.Meta>
              <SUICard.Description>
                {post.body.slice(0, 100)}
              </SUICard.Description>
            </SUICard.Content>

            <SUICard.Content className="card-btn" extra>
              <Button
                as="div"
                labelPosition="left"
                onClick={() => handleLike(post)}
              >
                <Label basic pointing="right">
                  {post.likes}
                </Label>
                <Button icon color={post.isLiked ? "orange" : null}>
                  <Icon name="heart" />
                  Like
                </Button>
              </Button>
            </SUICard.Content>
          </SUICard>
        </Link>
      ))}
    </ul>
  );
}
