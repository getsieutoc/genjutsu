import { SafeAreaView, Slot } from '@/components';
import { StyleSheet } from 'react-native';

export default function AuthLayout() {
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
