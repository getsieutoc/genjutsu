import { Button, TextInput } from '@/components';
import { useSupabase, useState } from '@/hooks';

export const MagicAuth = () => {
  const { sendMagicLink } = useSupabase();

  const [email, setEmail] = useState('');

  return (
    <>
      <TextInput
        placeholder="Your email address"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <Button onPress={() => sendMagicLink(email)} title="Send Magic Link" />
    </>
  );
};
