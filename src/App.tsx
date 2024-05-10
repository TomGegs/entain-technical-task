import GoRacingTable from './components/GoRacingDisplay/GoRacingTable';
import { QueryProvider } from './state/queryClient';

function App() {
    return (
        <div>
            <QueryProvider>
                <GoRacingTable />
            </QueryProvider>
        </div>
    );
}

export default App;
