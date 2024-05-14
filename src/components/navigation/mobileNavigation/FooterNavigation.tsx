import { Bell, Menu, Shirt, Timer } from 'lucide-react';
import horseRacingIcon from '../../../assets/images/HorseRacing.svg';

export function FooterNavigation() {
    const menuItems = [
        {
            icon: <Timer className="h-6 w-6" />,
            title: 'Next Up',
        },
        {
            icon: (
                <img loading="lazy" src={horseRacingIcon} className="h-6 w-6" />
            ),
            title: 'Racing',
        },
        {
            icon: <Shirt className="h-6 w-6" />,
            title: 'Sports',
        },
        {
            icon: <Bell className="h-6 w-6" />,
            title: 'Notifications',
        },
        {
            icon: <Menu className="h-6 w-6" />,
            title: 'Menu',
        },
    ];

    return (
        <div className="absolute bottom-0 grid h-14 w-full grid-cols-5 items-center justify-items-center gap-4 border-t border-black border-opacity-25 bg-white px-2 text-[10px] font-normal text-black shadow-md lg:hidden">
            {menuItems.map((item, index) => {
                return (
                    <div
                        className="mx-auto flex flex-col items-center text-center"
                        key={index}
                    >
                        {item.icon}
                        <p>{item.title}</p>
                    </div>
                );
            })}
        </div>
    );
}
