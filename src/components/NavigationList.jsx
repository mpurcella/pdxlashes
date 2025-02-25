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

const NavigationList = ({ onClick, isScreenWide, focusDisabled }) => {
    const tabIndex = () => {
        if (!isScreenWide && !focusDisabled) {
            return -1;
        } else {
            0;
        }
    };
    return (
        <ul className="flex -translate-y-66 flex-col items-center justify-center gap-40 md:translate-none md:flex-row">
            {navigationLinks.map((navigationLink) => {
                return (
                    <li key={navigationLink.id}>
                        <a
                            href={navigationLink.url}
                            className="font-inter text-24 md:text-18 lg:navigation-link-transition uppercase focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-black md:lowercase lg:border-y-[.0625rem] lg:border-transparent lg:hover:border-b-black"
                            onClick={onClick}
                            tabIndex={tabIndex()}
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
