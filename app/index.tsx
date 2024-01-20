import { View } from 'react-native';
import { Link } from 'expo-router';


export default function HomePage() {
  return (
    <View>
      <Link href="/settings">Settings</Link>
      <Link href="/privacy">Privacy Policy</Link>
      <Link href="/terms">Terms of Service</Link>
      <Link href={{
        pathname: "/users/[slug]",
        params: { slug: 'bacon' }
      }}>
        View bacon user
      </Link>
    </View>
  );
}
