'use client';

import Chat from '../../components/Chat'
import { dehydrate, HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
const ChatPage = () => {

    const queryClient = new QueryClient();
    return (


        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Chat />
            </HydrationBoundary>
        </QueryClientProvider>

    )
}

export default ChatPage
