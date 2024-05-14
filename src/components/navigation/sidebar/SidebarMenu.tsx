import { useState } from 'react';
import HorseRacingIcon from '../../../assets/images/HorseRacing.svg';
import nedsLogo from '../../../assets/images/homepage/neds-logo.svg';
import {
    CircleHelp,
    CreditCard,
    Filter,
    Home,
    MonitorPlay,
    Newspaper,
    Receipt,
    Trophy,
} from 'lucide-react';

export function SidebarMenu() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
    // Sidebar menu items have no functionality in this example
    const menuItems = [
        {
            icon: <Home className="h-4 w-4" />,
            title: 'Home',
            first: true,
        },
        {
            icon: <img src={HorseRacingIcon} className="h-4 w-4" />,
            title: 'Racing',
        },
        {
            icon: <Filter className="h-4 w-4" />,
            title: 'Filter Form',
        },
        {
            icon: <Trophy className="h-4 w-4" />,
            title: 'Sports',
        },
        {
            icon: <MonitorPlay className="h-4 w-4" />,
            title: 'Live - In Play',
        },
        {
            icon: <Receipt className="h-4 w-4" />,
            title: 'Promotion',
        },
        {
            icon: <CircleHelp className="h-4 w-4" />,
            title: 'How To',
        },
        {
            icon: <CreditCard className="h-4 w-4" />,
            title: 'Neds Card',
        },
        {
            icon: <Newspaper className="h-4 w-4" />,
            title: 'Blog',
        },
    ];
    return (
        <div className="hidden h-full w-[20%] flex-col items-start pr-2 text-sm font-medium lg:flex ">
            <div className="bg-nedsOrange flex h-52 w-full items-center justify-center">
                <img src={nedsLogo} alt="Neds Logo" className="h-10" />
            </div>

            {menuItems.map((item, index) => (
                <nav key={index} className="w-full items-start">
                    <a
                        href="#"
                        onClick={() => setSelectedIndex(index)}
                        className={`flex items-center gap-3 border px-3 py-5 uppercase shadow-sm transition-all active:bg-[#ff6000] active:text-white ${selectedIndex === index ? 'bg-[#ff6000] text-white' : 'bg-grey-300 text-black hover:bg-gray-200 hover:text-black'}`}
                    >
                        {item.icon}
                        {item.title}
                    </a>
                </nav>
            ))}
        </div>
    );
}
