import Preloader from "./components/Preloader";
import Header from "./components/Header";
import MainSlider from "./components/MainSlider";
import Blog from "./components/Blog";
import ImportantDates from "./components/ImportantDates";
import OrganizingCommittee from "./components/OrganizingCommittee";
import CallForPapers from "./components/CallForPapers";
import Registration from "./components/Registration";
import PaperSubmission from "./components/PaperSubmission";
import RC2025Tabs from "./components/RC2025Tabs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div style={{ marginTop: "133px" }}>
        <Preloader />
        <Header />
        <MainSlider />
        <Blog />
        <ImportantDates />
        <OrganizingCommittee />
        <CallForPapers />
        <Registration />
        <PaperSubmission />
        <RC2025Tabs />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
