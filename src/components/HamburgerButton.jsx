import classNames from 'classnames';

const HamburgerButton = ({
    isNavOpen,
    handleIsNavOpen,
    handleFocusDisabled,
}) => {
    return (
        <button
            type="button"
            className="flex h-20 w-24 cursor-pointer flex-col justify-around focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-black md:hidden"
            onClick={() => {
                handleIsNavOpen();
                handleFocusDisabled();
            }}
            aria-label={
                isNavOpen ? 'Close navigation menu' : 'Open Navigation Menu'
            }
            aria-controls="navigation menu"
            aria-expanded={isNavOpen ? true : false}
        >
            <span
                className={classNames(
                    'h-2 w-full bg-black duration-200 ease-linear',
                    {
                        'translate-y-[.4rem] -rotate-45': isNavOpen,
                    }
                )}
            ></span>
            <span
                className={classNames(
                    'h-2 w-full bg-black duration-200 ease-linear',
                    {
                        'invisible opacity-0': isNavOpen,
                    }
                )}
            ></span>
            <span
                className={classNames(
                    'h-2 w-full bg-black duration-200 ease-linear',
                    {
                        '-translate-y-[.4rem] rotate-45': isNavOpen,
                    }
                )}
            ></span>
        </button>
    );
};

export default HamburgerButton;
