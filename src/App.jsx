import { Suspense } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/Includes/Loading/Loading";
import { router } from "./components/Includes/Routing/Router";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}
export default App;
