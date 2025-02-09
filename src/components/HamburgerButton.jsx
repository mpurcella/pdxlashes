import classNames from 'classnames';

const HamburgerButton = ({ isNavOpen, handleIsNavOpen }) => {
    return (
        <button
            type="button"
            className="flex h-24 w-28 cursor-pointer flex-col justify-around"
            onClick={handleIsNavOpen}
            aria-label={
                isNavOpen ? 'Close navigation menu' : 'Open Navigation Menu'
            }
            aria-controls="navigation menu"
            aria-expanded={isNavOpen ? true : false}
        >
            <span
                className={classNames(
                    'h-3 w-full bg-white duration-200 ease-linear',
                    {
                        'translate-y-8 -rotate-45': isNavOpen,
                    }
                )}
            ></span>
            <span
                className={classNames(
                    'h-3 w-full bg-white duration-200 ease-linear',
                    {
                        'invisible opacity-0': isNavOpen,
                    }
                )}
            ></span>
            <span
                className={classNames(
                    'h-3 w-full bg-white duration-200 ease-linear',
                    {
                        '-translate-y-8 rotate-45': isNavOpen,
                    }
                )}
            ></span>
        </button>
    );
};

export default HamburgerButton;
