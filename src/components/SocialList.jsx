import { v4 as uuidv4 } from 'uuid';
import { InstagramLogo, Chats } from '@phosphor-icons/react';

const SocialList = () => {
    const socialLinks = [
        {
            id: uuidv4(),
            url: 'https://www.instagram.com/pdxlashes.llc/',
            label: 'PDX Lashes on Instagram',
            icon: <InstagramLogo weight="fill" />,
        },
        {
            id: uuidv4(),
            url: 'sms:+15038064404',
            label: 'Send a Text Message to PDX Lashes',
            icon: <Chats weight="fill" />,
        },
    ];
    return (
        <ul className="flex gap-40">
            {socialLinks.map((socialLink) => {
                return (
                    <li key={socialLink.id}>
                        <a
                            href={socialLink.url}
                            className="text-32 md:text-28 text-light-grey lg:icon-link-transition block focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white lg:hover:text-white"
                            target="_blank"
                            rel="noopener noreference"
                            aria-label={socialLink.label}
                        >
                            {socialLink.icon}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default SocialList;
