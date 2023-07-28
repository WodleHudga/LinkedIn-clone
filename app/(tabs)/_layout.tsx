import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#191919',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home Feed',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/Search" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="search"
                    size={21}
                    color='grey'
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
        <Tabs.Screen
            name="Network"
            options={{
                title: "My Network",
                tabBarIcon: ({ color }) => <TabBarIcon name="group" color={color} />,
            }}
        />
        <Tabs.Screen
            name="Post"
            options={{
                title: "Post",
                tabBarIcon: ({ color }) => (
                    <TabBarIcon name="plus-square" color={color} />
                ),
            }}
        />
        <Tabs.Screen
            name="Notification"
            options={{
                title: "Notifications",
                tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
            }}
        />
        <Tabs.Screen
            name="Jobs"
            options={{
                title: "Jobs",
                tabBarIcon: ({ color }) => (
                    <TabBarIcon name="briefcase" color={color} />
                ),
            }}
        />
    </Tabs>
  );
}
