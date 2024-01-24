import { Link, View } from '@/components';
import { MagicAuth } from '@/views';

export default function LoginPage() {
  return (
    <View>
      <Link href="/">Back to Home</Link>

      <MagicAuth />
    </View>
  );
}
