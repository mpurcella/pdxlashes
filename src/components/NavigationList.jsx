import { v4 as uuidv4 } from 'uuid';

const navigationLinks = [
    {
        id: uuidv4(),
        url: '#about',
        label: 'About',
    },
    {
        id: uuidv4(),
        url: '#services',
        label: 'Services',
    },
    {
        id: uuidv4(),
        url: '#contact',
        label: 'Contact',
    },
];

const NavigationList = ({ onClick }) => {
    return (
        <ul className="flex flex-col items-center justify-center gap-40">
            {navigationLinks.map((navigationLink) => {
                return (
                    <li key={navigationLink.id}>
                        <a
                            href={navigationLink.url}
                            className="font-inter text-24 font-light uppercase focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-black"
                            onClick={onClick}
                        >
                            {navigationLink.label}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default NavigationList;
