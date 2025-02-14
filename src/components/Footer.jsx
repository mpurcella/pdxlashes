import SocialList from './SocialList';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center gap-40 bg-black p-40 md:flex-row md:justify-between md:px-60 md:py-28">
            <SocialList />
            <p className="font-inter flex items-center font-light text-white">
                <span className="text-10">&#9400;</span>
                &nbsp;
                <span className="text-16">{year} PDX Lashes LLC</span>
            </p>
        </footer>
    );
};

export default Footer;
