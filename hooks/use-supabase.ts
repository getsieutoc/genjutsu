import { useContext } from 'react';

import { SupabaseContext } from '@/components';

export const useSupabase = () => useContext(SupabaseContext);
