import GoRacingTable from './components/GoRacingTable/GoRacingTable';
import HeroCarousel from './components/banner/HeroCarousel';
import { FooterNavigation } from './components/navigation/mobileNavigation/FooterNavigation';
import { HeaderNavigation } from './components/navigation/mobileNavigation/HeaderNavigation';
import { SidebarMenu } from './components/navigation/sidebar/SidebarMenu';
import { QueryProvider } from './state/queryClient';

function App() {
    return (
        <div className=" flex h-svh flex-row justify-evenly bg-[#f9f9f9] lg:h-lvh">
            {/* All navigation is for demo purposes only  */}
            <SidebarMenu />
            <div className="w-full lg:w-[80%]">
                <HeaderNavigation />
                <HeroCarousel />
                <QueryProvider>
                    <GoRacingTable />
                </QueryProvider>
                <FooterNavigation />
            </div>
        </div>
    );
}

export default App;
