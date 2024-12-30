import { createRootRoute } from "@tanstack/react-router";
import Phone from "../components/phone";
import resize from "@/utils/resize";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(import.meta.env.VITE_APP_KAKOTALK_API_KEY);
  }
  resize();
  return <Phone></Phone>;
}
