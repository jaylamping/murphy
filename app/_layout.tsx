import { Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
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
  );
}
