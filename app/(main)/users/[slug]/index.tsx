import { Link, SafeAreaView, Text } from '@/components';

import { useLocalSearchParams } from '@/hooks';

export default function DynamicPage() {
  const { slug } = useLocalSearchParams();

  return (
    <SafeAreaView>
      <Link href="/">Back to home</Link>

      <Text>Current slug: {slug}</Text>
    </SafeAreaView>
  );
}
