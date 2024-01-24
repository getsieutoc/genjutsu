import { useFonts, Nunito_500Medium } from '@expo-google-fonts/nunito';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SplashScreen, Slot } from 'expo-router';
import { SupabaseProvider } from '@/components';
import { useEffect } from '@/hooks';

SplashScreen.preventAutoHideAsync();

// Try to reduce the scope of providers to only the routes that need them.
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

  return (
    <ThemeProvider value={DarkTheme}>
      <SupabaseProvider>
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </SupabaseProvider>
    </ThemeProvider>
  );
}
