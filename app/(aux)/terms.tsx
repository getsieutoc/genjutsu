import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function TermsPage() {
  return (
    <View>
      <Link href="/">Back to Home</Link>

      <Text>Terms of Service</Text>
    </View>
  );
}
