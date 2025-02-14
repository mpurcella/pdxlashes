import SocialList from './SocialList';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="flex items-center justify-between bg-black p-28">
            <SocialList />
            <p className="font-inter flex items-center text-white">
                <span className="text-10">&#9400;</span>
                &nbsp;
                <span className="text-14">{year} PDX Lashes LLC</span>
            </p>
        </footer>
    );
};

export default Footer;
