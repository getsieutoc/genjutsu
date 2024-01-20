import { Text } from 'react-native';

import { useLocalSearchParams } from '@/hooks';

export default function DynamicPage() {
  const { slug } = useLocalSearchParams();

  return <Text>Current slug: {slug}</Text>;
}
