import GoRacingTable from './components/GoRacingTable/GoRacingTable';
import { HeroBanner } from './components/banner/HeroBanner';
import { HeaderNavigation } from './components/navigation/mobileNavigation/HeaderNavigation';
import { SidebarMenu } from './components/navigation/sidebar/SidebarMenu';
import { QueryProvider } from './state/queryClient';

function App() {
    return (
        <div className=" flex h-svh flex-row justify-evenly bg-[#f9f9f9] lg:h-lvh">
            <SidebarMenu />
            <div className="w-full lg:w-[80%]">
                <HeaderNavigation />
                <HeroBanner />
                <QueryProvider>
                    <GoRacingTable />
                </QueryProvider>
            </div>
        </div>
    );
}

export default App;
