import Hero from './components/Hero';
import Header from './containers/Header';
import Landing from './sections/Landing';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="leading-none antialiased">
            <Header />
            <main>
                <Landing>
                    <Hero />
                </Landing>
                <About />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
