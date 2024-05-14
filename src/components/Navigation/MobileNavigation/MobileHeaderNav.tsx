import { Search } from 'lucide-react';
import nedsLogo from '../../../assets/images/homepage/neds-logo.svg';

export function MobileHeaderNav() {
    return (
        <div className="flex h-32 w-full flex-row items-center justify-between bg-gradient-to-r from-nedsOrange to-[#fc5504] text-3xl font-medium lg:hidden">
            <img
                loading="lazy"
                src={nedsLogo}
                alt="Neds Logo"
                className="m-6 h-10"
            />
            <div className="grid h-full grid-cols-4 flex-row items-center justify-items-center gap-8 px-4 text-white">
                <Search className="col-span-1 h-10 w-10" />
                <div>Join</div>
                <div>Login</div>
                <div className="relative">
                    <p className="rounded-full border px-4 py-2">0</p>
                    <p className="absolute -right-1 -top-1 place-content-center rounded-full bg-black px-2 py-1 text-center text-sm text-white">
                        0
                    </p>
                </div>
            </div>
        </div>
    );
}
