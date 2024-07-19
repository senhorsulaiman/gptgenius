

import ToursPage from '../../components/ToursPage';
import { getAllTours } from '../../../utils/action';

import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
export default async function AllToursPage() {

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['tours', ''],
        queryFn: () => getAllTours(),
    })
    return (


        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <ToursPage />
            </HydrationBoundary>
        </QueryClientProvider>

    )
}

