import React, { Component } from "react";
import { Container, Tab, Nav, Col, Row } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    src="https://cms-assets.tutsplus.com/uploads/users/30/posts/32053/image/freebiesupply.jpg"
                    alt="hui"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur aspernatur fuga non officiis tempore dolorem, natus
                    ea blanditiis recusandae vitae ratione voluptas quia nostrum
                    est quae rem sequi perspiciatis ab.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <img src="https://www.hexacta.com/wp-content/uploads/2018/07/5-clues-to-keep-your-software-development-team-productive-11.jpg" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur aspernatur fuga non officiis tempore dolorem, natus
                    ea blanditiis recusandae vitae ratione voluptas quia nostrum
                    est quae rem sequi perspiciatis ab.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur aspernatur fuga non officiis tempore dolorem, natus
                    ea blanditiis recusandae vitae ratione voluptas quia nostrum
                    est quae rem sequi perspiciatis ab.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <img
                    src="https://www.topsinfosolutions.com/wp-content/uploads/2018/12/2.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur aspernatur fuga non officiis tempore dolorem, natus
                    ea blanditiis recusandae vitae ratione voluptas quia nostrum
                    est quae rem sequi perspiciatis ab.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <img
                    src="https://devtechnosys.com/images/ckeditior/images/xweb-development-frameworks.png.pagespeed.ic.MmmnHiDEy7.png"
                    alt=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur aspernatur fuga non officiis tempore dolorem, natus
                    ea blanditiis recusandae vitae ratione voluptas quia nostrum
                    est quae rem sequi perspiciatis ab.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <img src="https://lh3.googleusercontent.com/proxy/OVc4GqjCcdEM-P6nl1U-p1pELhsnsxZvfSo8VnEtcj-8mj0_k49FZhOrIL79C4Op_q9_83MIH6TB5IGm9nIRyadnmKHVj1rwF9uVh3DHmADjd3FSD4_E2-ITmZPTROIpwh7qTDBqfGF3LTByArC0olnF3HXITFdlEJvmMuSq" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Pariatur aspernatur fuga non officiis tempore dolorem, natus
                    ea blanditiis recusandae vitae ratione voluptas quia nostrum
                    est quae rem sequi perspiciatis ab.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}
