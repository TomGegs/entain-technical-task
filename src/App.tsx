import GoRacingTable from './components/GoRacingTable/GoRacingTable';
import { HeroBanner } from './components/banner/heroBanner';
import { SidebarMenu } from './components/sidebar/sidebarMenu';
import { QueryProvider } from './state/queryClient';

function App() {
    return (
        <div className=" h-svh justify-evenly flex flex-row bg-[#f9f9f9] lg:h-lvh">
            <SidebarMenu />
            <div className='w-[80%]'>
                <HeroBanner />
                <QueryProvider>
                    <GoRacingTable />
                </QueryProvider>
            </div>
        </div>
    );
}

export default App;
