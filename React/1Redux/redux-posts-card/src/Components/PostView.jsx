import React, { useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import api from "../api/api";

import {
  Card,
  Icon,
  Image,
  Button,
  Label,
  Comment,
  Form,
  Grid,
  Rail,
  Sticky,
  Segment,
  Checkbox,
  Ref,
} from "semantic-ui-react";

import { connect } from "react-redux";
import { changePostData, deletePost } from "../redux/reducers/postReducer";

function PostView({ posts, deletePost }) {
  const history = useHistory();
  const [checked, setChecked] = useState(false);

  let { id } = useParams();
  let card = posts[parseInt(id - 1, 10)];

  const handleLike = (post) => {
    api
      .changeLikeStatus(post)
      .then((res) => changePostData(res))
      .catch(console.error);
  };

  const wrapperRef = useRef();

  if (!card) return <div>Card not found</div>;

  return (
    <Grid ref={wrapperRef} celled="internally">
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={10}>
          <Card fluid={true}>
            <Image src={card.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{card.title}</Card.Header>
              <Card.Meta>
                <span className="date">{card.createdAt}</span>
              </Card.Meta>
              <Card.Description>{card.body}</Card.Description>
            </Card.Content>
            <Card.Content className="card-btn" extra>
              <Button
                as="div"
                labelPosition="left"
                onClick={() => handleLike(card)}
              >
                <Label as="a" basic pointing="right">
                  {card.likes}
                </Label>
                <Button icon color={card.isLiked ? "orange" : null}>
                  <Icon name="heart" />
                  Like
                </Button>
              </Button>
            </Card.Content>
          </Card>
          <Comment.Group fluid="true">
            <Comment fluid="true">
              <Comment.Avatar
                as="a"
                src="https://react.semantic-ui.com/images/avatar/small/steve.jpg"
              />
              <Comment.Content>
                <Comment.Author as="a">Steve Jobes</Comment.Author>
                <Comment.Metadata>
                  <div>2 days ago</div>
                </Comment.Metadata>
                <Comment.Text>Revolutionary!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action active>Reply</Comment.Action>
                </Comment.Actions>
                <Form reply>
                  <Form.TextArea />
                  <Button
                    content="Add Reply"
                    labelPosition="left"
                    icon="edit"
                    primary
                  />
                </Form>
              </Comment.Content>
            </Comment>
          </Comment.Group>{" "}
        </Grid.Column>

        <Grid.Column width={3}>
          <Ref innerRef={wrapperRef}>
            <Rail position="left">
              <Sticky context={wrapperRef}>
                <Segment>
                  <Checkbox
                    checked={checked}
                    label="Hide"
                    onChange={() => {
                      setChecked(true);
                      setTimeout(() => {
                        history.push("/");
                        deletePost(card);
                      }, 1000);
                    }}
                    toggle
                  />
                </Segment>
              </Sticky>
            </Rail>
          </Ref>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

const mapDispatchToProps = {
  deletePost,
};

export default connect(null, mapDispatchToProps)(PostView);
