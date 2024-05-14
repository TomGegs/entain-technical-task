import { Search } from 'lucide-react';
import nedsLogo from '../../../assets/images/homepage/neds-logo.svg';

export function HeaderNavigation() {
    return (
        <div className="from-nedsOrange flex h-10 w-full flex-row items-center justify-between bg-gradient-to-r to-[#fc5504] text-sm font-medium lg:hidden">
            <img src={nedsLogo} alt="Neds Logo" className="m-3 h-4" />
            <div className="grid h-full  grid-cols-4 flex-row items-center justify-items-center gap-4 px-2 text-white">
                <Search className="col-span-1 h-5 w-5" />
                <div>Join</div>
                <div>Login</div>
                <div className="relative">
                    <p className="rounded-full border px-2.5 py-1">0</p>
                    <p className="absolute -right-1 -top-1 h-4 w-4 place-content-center rounded-full bg-black text-center text-[10px] text-white">
                        0
                    </p>
                </div>
            </div>
        </div>
    );
}
