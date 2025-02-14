import Footer from './components/Footer';
import Hero from './components/Hero';
import Header from './containers/Header';

const App = () => {
    return (
        <div className="leading-none antialiased">
            <Header />
            <main>
                <Hero />
            </main>
            <Footer />
        </div>
    );
};

export default App;
