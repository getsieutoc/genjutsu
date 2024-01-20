import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function TermsPage() {
  return (
    <View>
      <Link href="/">Back to Home</Link>

      <Text>Terms of Service</Text>
    </View>
  );
}
