import classNames from 'classnames';
import NavigationList from './NavigationList';

const NavigationMenu = ({
    isNavOpen,
    onClick,
    isScreenWide,
    focusDisabled,
}) => {
    return (
        <div
            className={classNames(
                'bg-eggshell fixed top-88 z-10 flex h-[calc(100vh-5.5rem)] w-full justify-center p-44 duration-200 ease-in-out md:static md:h-auto md:w-auto md:bg-transparent md:p-0',
                {
                    'right-0': isNavOpen,
                    'right-full': !isNavOpen,
                }
            )}
        >
            <NavigationList
                onClick={onClick}
                isScreenWide={isScreenWide}
                focusDisabled={focusDisabled}
            />
        </div>
    );
};

export default NavigationMenu;
