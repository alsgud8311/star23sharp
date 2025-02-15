import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFound from "@/components/common/notFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return <NotFound />;
  },
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();
// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  );
}
