import GoRacingTable from './components/GoRacingTable/GoRacingTable';
import HeroBannerCarousel from './components/Banner/HeroBannerCarousel';
import { MobileFooterNav } from './components/Navigation/MobileNavigation/MobileFooterNav';
import { MobileHeaderNav } from './components/Navigation/MobileNavigation/MobileHeaderNav';
import { DesktopSidebarNav } from './components/Navigation/DesktopSidebarNav';
import { QueryProvider } from './state/queryClient';

function App() {
    return (
        <div className=" flex h-svh flex-row justify-evenly bg-[#f9f9f9] lg:h-lvh">
            {/* All navigation is for demo purposes only  */}
            <DesktopSidebarNav />
            <div className="w-full lg:w-[80%]">
                <MobileHeaderNav />
                <HeroBannerCarousel />
                <QueryProvider>
                    <GoRacingTable />
                </QueryProvider>
                <MobileFooterNav />
            </div>
        </div>
    );
}

export default App;
