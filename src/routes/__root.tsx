import { createRootRoute } from "@tanstack/react-router";
import Phone from "../components/phone";
import resize from "@/utils/resize";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  resize();
  return <Phone></Phone>;
}
