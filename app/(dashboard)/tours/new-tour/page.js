'use client';

import NewTour from '../../../components/NewTour'
import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
const NewTourPage = () => {

    const queryClient = new QueryClient();
    return (


        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <NewTour />
            </HydrationBoundary>
        </QueryClientProvider>

    )
}

export default NewTourPage
