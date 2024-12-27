import { SplashScreen, Tabs } from "expo-router";
import { useSystemFont } from "@moeum/common/hooks/useSystemFont";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useSystemFont();

  return (
    <Tabs initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "home" }} />
      <Tabs.Screen name="setting" options={{ title: "setting" }} />
    </Tabs>
  );
}
