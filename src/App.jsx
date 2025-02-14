import Footer from './components/Footer';
import Header from './containers/Header';

const App = () => {
    return (
        <div className="leading-none antialiased">
            <Header />
            <div className="h-[600px] bg-white"></div>
            <Footer />
        </div>
    );
};

export default App;
