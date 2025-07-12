import { Col, Row } from "antd";
import HomePageContent from "./homepage-content";
import HomePageAnchor from "./homepage-anchor";

const HomePageMain = () => {
  return (
    <>
      <Row>
        <Col span={20}>
          <HomePageContent />
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
