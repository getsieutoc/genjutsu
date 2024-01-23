import { Link } from 'expo-router';
import { View } from 'react-native';

import { MagicAuth } from '@/views';

export default function LoginPage() {
  return (
    <View>
      <Link href="/">Back to Home</Link>

      <MagicAuth />
    </View>
  );
}
