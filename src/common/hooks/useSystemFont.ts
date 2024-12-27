import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export const useSystemFont = () => {
  const [loaded, error] = useFonts({
    Pretendard: require("@moeum/../assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-Medium": require("@moeum/../assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-Bold": require("@moeum/../assets/fonts/Pretendard-Bold.otf")
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
};
