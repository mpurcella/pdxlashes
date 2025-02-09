import { useState, useEffect } from 'react';
import PageLogo from '../assets/icons/eyelash-light.svg';
import HamburgerButton from '../components/HamburgerButton';

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const listener = (event) => setMatches(event.matches);

        mediaQueryList.addEventListener('change', listener);
        return () => mediaQueryList.removeEventListener('change', listener);
    }, [query]);

    return matches;
};

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(() => {
        false;
    });
    const isScreenWide = useMediaQuery('(min-width: 768px)');

    const handleIsNavOpen = () => {
        setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
    };

    // const closeNav = () => {
    //     setIsNavOpen(false);
    // }

    useEffect(() => {
        if (isScreenWide) {
            setIsNavOpen(false);
        }
    }, [isScreenWide]);

    useEffect(() => {
        if (isNavOpen) {
            document.body.classList.add('overflow-hidden');
        }

        return () => document.body.classList.remove('overflow-hidden');
    }, [isNavOpen]);

    return (
        <header className="bg-black p-28">
            <nav className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        className="mr-12 w-36"
                        src={PageLogo}
                        alt=""
                        aria-hidden
                    />
                    <h1 className="font-montserrat text-18 font-medium text-white uppercase">
                        PDX Lashes
                    </h1>
                </div>
                <HamburgerButton
                    isNavOpen={isNavOpen}
                    handleIsNavOpen={handleIsNavOpen}
                />
            </nav>
        </header>
    );
};

export default Header;
