import { Redirect, SafeAreaView, Slot } from '@/components';
import { StyleSheet } from 'react-native';
import { useSupabase } from '@/hooks';

export default function MainLayout() {
  const { isLoggedIn } = useSupabase();

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <Slot />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    // flex: 1,
  },
});
