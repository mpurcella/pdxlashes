import Footer from './components/Footer';
import Header from './containers/Header';

const App = () => {
    return (
        <div className="leading-none antialiased">
            <Header />
            <div className="bg-eggshell h-[600px]"></div>
            <Footer />
        </div>
    );
};

export default App;
