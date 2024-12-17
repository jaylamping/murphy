import { Tabs } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function HomeLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs
        screenOptions={{
          headerShown: true,
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            tabBarLabel: 'Home',
          }}
        />
        <Tabs.Screen
          name='inbox/index'
          options={{
            title: 'Inbox',
            tabBarLabel: 'Inbox',
          }}
        />
      </Tabs>
    </QueryClientProvider>
  );
}
