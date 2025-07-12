import { createFileRoute } from "@tanstack/react-router";
import HomePageView from "../pages/homepage-view";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <HomePageView />;
}
