import { useState, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import HamburgerButton from '../components/HamburgerButton';
import NavigationMenu from '../components/NavigationMenu';

const useMediaQuery = (query) => {
    const [mql] = useState(() => window.matchMedia(query));
    const [matches, setMatches] = useState(mql.matches);

    useEffect(() => {
        const screenResize = (e) => {
            setMatches(e.matches);
        };

        mql.addEventListener('change', screenResize);

        return () => {
            mql.removeEventListener('change', screenResize);
        };
    }, [mql]);

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

    const closeNav = () => {
        setIsNavOpen(false);
    };

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

    const [focusDisabled, setFocusDisabled] = useState(false);

    const handleFocusDisabled = () => {
        setFocusDisabled((prevFocusDisabled) => !prevFocusDisabled);
    };

    return (
        <header className="z-20 flex justify-between bg-white p-28 md:px-60">
            <h1 className="font-montserrat text-20 text-black uppercase">
                PDX Lashes
            </h1>
            <nav>
                <FocusLock disabled={!focusDisabled}>
                    <HamburgerButton
                        isNavOpen={isNavOpen}
                        handleIsNavOpen={handleIsNavOpen}
                        handleFocusDisabled={handleFocusDisabled}
                    />
                    <NavigationMenu
                        isNavOpen={isNavOpen}
                        onClick={closeNav}
                        isScreenWide={isScreenWide}
                        focusDisabled={focusDisabled}
                    />
                </FocusLock>
            </nav>
        </header>
    );
};

export default Header;
