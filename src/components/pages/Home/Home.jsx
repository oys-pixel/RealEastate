import Email from "./Email";
import Info from "./Info";
import Properties from "./Properties";
import Testimonials from "./Testimonials";
import TopPage from "./TopPage";
import Tour from "./Tour";

function Home() {
  return (
    <>
      <TopPage />
      <Info />
      <Tour />
      <Properties />
      <Testimonials />
      <Email />
    </>
  );
}

export default Home;
