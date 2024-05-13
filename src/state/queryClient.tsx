import { QueryClient, QueryClientProvider } from 'react-query';

interface QueryProviderProps {
    children: React.ReactNode;
}

// Purpose: the application with QueryClientProvider

export function QueryProvider({ children }: QueryProviderProps) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
