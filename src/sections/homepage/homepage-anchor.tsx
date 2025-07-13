import { Anchor } from "antd";

const HomePageAnchor = () => {
  return (
    <Anchor
      bounds={50}
      items={[
        {
          key: "bio",
          href: "#bio",
          title: "bio",
        },
        {
          key: "part-2",
          href: "#part-2",
          title: "Part 2",
        },
        {
          key: "part-3",
          href: "#part-3",
          title: "Part 3",
        },
      ]}
    />
  );
};

export default HomePageAnchor;
