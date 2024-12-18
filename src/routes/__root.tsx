import { createRootRoute } from "@tanstack/react-router";
import Phone from "../components/phone";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return <Phone></Phone>;
}
