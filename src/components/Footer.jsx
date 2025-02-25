import SocialList from './SocialList';
import { Copyright } from '@phosphor-icons/react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center gap-40 bg-black p-40 md:flex-row md:justify-between md:px-60 md:py-28">
            <SocialList />
            <p className="font-inter text-16 text-light-grey flex items-center">
                <Copyright weight="light" />
                &nbsp;
                <span>{year} PDX Lashes LLC</span>
            </p>
        </footer>
    );
};

export default Footer;
