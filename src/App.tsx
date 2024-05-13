import GoRacingTable from './components/GoRacingTable/GoRacingTable';
import { QueryProvider } from './state/queryClient';

function App() {
    return (
        <div className="h-svh bg-[#f9f9f9] lg:h-lvh">
            <QueryProvider>
                <GoRacingTable />
            </QueryProvider>
        </div>
    );
}

export default App;
