import { v4 as uuidv4 } from 'uuid';
import { InstagramLogo, Chats } from '@phosphor-icons/react';

const SocialList = () => {
    const socialLinks = [
        {
            id: uuidv4(),
            url: 'https://www.instagram.com/pdxlashes.llc/',
            label: 'PDX Lashes on Instagram',
            icon: <InstagramLogo />,
        },
        {
            id: uuidv4(),
            url: 'sms:+15038064404',
            label: 'Send a Text Message to PDX Lashes',
            icon: <Chats />,
        },
    ];
    return (
        <ul className="flex items-center gap-24">
            {socialLinks.map((socialLink) => {
                return (
                    <li key={socialLink.id}>
                        <a
                            href={socialLink.url}
                            className="text-24 text-white"
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
