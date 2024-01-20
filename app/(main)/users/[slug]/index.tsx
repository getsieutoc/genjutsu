import { useLocalSearchParams } from '@/hooks';
import { Text } from 'react-native';

export default function DynamicPage() {
  const { slug } = useLocalSearchParams();

  return <Text>Current slug: {slug}</Text>;
}
