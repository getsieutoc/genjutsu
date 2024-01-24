import 'react-native-url-polyfill/auto';

import * as QueryParams from 'expo-auth-session/build/QueryParams';
import { useState, useEffect, ReactNode } from 'react';
import { makeRedirectUri } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';

import { SupabaseContext } from './supabase-context';
import { supabase } from './supabase-client';

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

export type SupabaseProviderProps = {
  children: ReactNode;
};

export const SupabaseProvider = (props: SupabaseProviderProps) => {
  // Handle linking into app from email app.
  const url = Linking.useURL();
  if (url) createSessionFromUrl(url); // TODO: What the fuck this thing doing?

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [isNavigationReady, setNavigationReady] = useState(false);

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    setLoggedIn(true);
  };

  const register = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
  };

  const forgotPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) throw error;
  };

  const sendMagicLink = async (email: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    if (error) throw error;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setLoggedIn(false);
  };

  const checkIfUserIsLoggedIn = async () => {
    const result = await supabase.auth.getSession();
    setLoggedIn(result.data.session !== null);
    setNavigationReady(true);
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <SupabaseContext.Provider
      value={{ isLoggedIn, login, register, forgotPassword, logout, sendMagicLink }}
    >
      {isNavigationReady ? props.children : null}
    </SupabaseContext.Provider>
  );
};
