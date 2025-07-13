import { Col, Row } from "antd";
import HomePageAnchor from "./homepage-anchor";
import HomePageContentMain from "./homepage-content-main";

const HomePageMain = () => {
  return (
    <>
      <Row>
        <Col span={20}>
          <HomePageContentMain />
        </Col>

        <Col span={4}>
          <div className="h-screen flex items-center fixed">
            <HomePageAnchor />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomePageMain;
