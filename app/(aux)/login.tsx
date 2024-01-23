import { Link, SafeAreaView } from '@/components';

import { MagicAuth } from '@/views';

export default function LoginPage() {
  return (
    <SafeAreaView>
      <Link href="/">Back to Home</Link>

      <MagicAuth />
    </SafeAreaView>
  );
}
