import { makeRedirectUri } from 'expo-auth-session';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { Button } from 'react-native';

import { supabase } from '@/utils/supabase';

WebBrowser.maybeCompleteAuthSession(); // required for web only
const redirectTo = makeRedirectUri();

const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  return data.session;
};

const sendMagicLink = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: 'sangdth@gmail.com',
    options: {
      emailRedirectTo: redirectTo,
    },
  });

  if (error) throw error;
  // Email sent.
};

export const MagicAuth = () => {
  // Handle linking into app from email app.
  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);

  return (
    <>
      <Button onPress={sendMagicLink} title="Send Magic Link" />
    </>
  );
};
