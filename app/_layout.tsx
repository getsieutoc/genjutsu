import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { ThemeProvider, DarkTheme /* DefaultTheme */ } from '@react-navigation/native';
import { SplashScreen, Slot } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

// Try to reduce the scope of your providers to only the routes that need them.
// This will improve performance and cause fewer rerenders.
export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_500Medium,
  });

  useEffect(() => {
    // Hide the splash screen after the fonts have loaded
    // (or an error was returned) and the UI is ready.
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Prevent rendering until the font has loaded or an error was returned
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // <>
  //     <Header />
  //     <Slot />
  //     <Footer />
  // </>
  return (
    <ThemeProvider value={DarkTheme}>
      <Slot />
    </ThemeProvider>
  );
}
