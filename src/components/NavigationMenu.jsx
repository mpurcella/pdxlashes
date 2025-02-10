import classNames from 'classnames';
import NavigationList from './NavigationList';

const NavigationMenu = ({ isNavOpen, onClick }) => {
    return (
        <div
            className={classNames(
                'bg-eggshell fixed top-88 z-10 flex h-[calc(100vh-88px)] w-full justify-center duration-200 ease-in-out md:static md:h-auto md:w-auto md:bg-transparent',
                {
                    'right-0': isNavOpen,
                    'right-full': !isNavOpen,
                }
            )}
        >
            <NavigationList onClick={onClick} />
        </div>
    );
};

export default NavigationMenu;
