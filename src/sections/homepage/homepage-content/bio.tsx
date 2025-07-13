import { Col, Row, Typography } from "antd";

const Bio = () => {
  const { Text, Title } = Typography;
  const name = "Nuth Mengkheang"
  const bio = "I am a Passionate Software Engineer with a strong foundation in coding, problem-solving, and delivering innovative solutions to complex real - world challenges Proficient in both backend and front end, also experienced in designing and developing efficient, scalable, and user - focused applications.Skilled at bridgingtechnology, business, and design to create optimal solutions that meet project requirements and drive value.Committed to continuous learning, clean code practices, and collaborating within dynamic teams to contribute meaningfully to real - world projects."

  return (
    <div className=" bg-red-50">
      <Row>
        <Col span={6}></Col>
        <Col span={18}>
          <Title className="p-0 !m-0">{name}</Title>
          <Text>
            {bio}
          </Text>
        </Col>
      </Row>

    </div>
  );
};

export default Bio;
