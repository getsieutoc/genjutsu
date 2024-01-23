import { Link, SafeAreaView } from '@/components';
import { StyleSheet } from 'react-native';

export default function HomePage() {
  return (
    <SafeAreaView style={[styles.container]}>
      <Link href="/settings">Settings</Link>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/terms">Terms of Service</Link>
      <Link href="/login">Login</Link>
      <Link
        href={{
          pathname: '/users/[slug]',
          params: { slug: 'bacon' },
        }}
      >
        View bacon user
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  },
});
