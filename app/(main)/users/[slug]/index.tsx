import { Link, View, Text } from '@/components';
import { useLocalSearchParams } from '@/hooks';

export default function DynamicPage() {
  const { slug } = useLocalSearchParams();

  return (
    <View>
      <Link href="/">Back to home</Link>

      <Text>Current slug: {slug}</Text>
    </View>
  );
}
