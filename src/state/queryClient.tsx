import { QueryClient, QueryClientProvider } from 'react-query';

interface QueryProviderProps {
    children: React.ReactNode;
}

// Wrap the application with QueryClientProvider

export function QueryProvider({ children }: QueryProviderProps) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
