import Bio from "./homepage-content/bio";

const HomePageContentMain = () => {
  return (
    <div>
      <div id="bio">
        <Bio />
      </div>
      <div id="part-1" className="h-screen">
        Hello 1
      </div>
      <div id="part-2" className="h-screen">
        Hello 2
      </div>
      <div id="part-3" className="h-screen">
        Hello 3
      </div>
    </div>
  );
};

export default HomePageContentMain;
