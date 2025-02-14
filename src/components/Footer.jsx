import SocialList from './SocialList';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center gap-24 bg-black p-32">
            <SocialList />
            <p className="font-inter text-light-grey flex items-center font-light">
                <span className="text-10">&#9400;</span>
                &nbsp;
                <span className="text-14">{year} PDX Lashes LLC</span>
            </p>
        </footer>
    );
};

export default Footer;
