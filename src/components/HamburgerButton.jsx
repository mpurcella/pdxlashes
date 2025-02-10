import classNames from 'classnames';

const HamburgerButton = ({ isNavOpen, handleIsNavOpen }) => {
    return (
        <button
            type="button"
            className="focus-visible:outline-light-grey md:none flex h-20 w-24 cursor-pointer flex-col justify-around focus-visible:outline-1 focus-visible:outline-offset-4 md:hidden"
            onClick={handleIsNavOpen}
            aria-label={
                isNavOpen ? 'Close navigation menu' : 'Open Navigation Menu'
            }
            aria-controls="navigation menu"
            aria-expanded={isNavOpen ? true : false}
        >
            <span
                className={classNames(
                    'h-2 w-full bg-white duration-200 ease-linear',
                    {
                        'translate-y-[.4rem] -rotate-45': isNavOpen,
                    }
                )}
            ></span>
            <span
                className={classNames(
                    'h-2 w-full bg-white duration-200 ease-linear',
                    {
                        'invisible opacity-0': isNavOpen,
                    }
                )}
            ></span>
            <span
                className={classNames(
                    'h-2 w-full bg-white duration-200 ease-linear',
                    {
                        '-translate-y-[.4rem] rotate-45': isNavOpen,
                    }
                )}
            ></span>
        </button>
    );
};

export default HamburgerButton;
