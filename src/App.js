import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import BookTrip from "./components/BookTrip/BookTrip";
import Sponsor from "./components/Sponsor/sponsor";
import ExploreIntro from "./components/ExploreIntro/ExploreIntro";
import Explore from "./components/Explore/Explore";
import Resort from "./components/Resort/Resort";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <div className="App">
                <section id="landing-layout">
                    <Navbar />
                    <main>
                        <h4>Plan The Perfect Winter Trip</h4>
                        <p>
                            Easily plan your ideal ski trip from home with the
                            <br /> help of professionals
                        </p>
                        <button>Book Here</button>
                    </main>
                    <BookTrip />
                </section>
                <Sponsor />
                <ExploreIntro />
                <Explore />
                <Resort />
                <section id="passes-layout">
                    <h2>
                        View Passes We’ve Made <br /> Available For You
                    </h2>
                    <button>View Passes</button>
                </section>
                <Footer />
            </div>
            <div id="mobile-version">
                <h3>Sorry Mobile Design not yet Available</h3>
            </div>
        </>
    );
}

export default App;
