import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import _ from 'lodash';
import useFetchApi from './common/useFetchApi';
import { Const } from './common/Const';
import { CoinMarketResponse } from './common/Interfaces';
import BitcoinPanel from './components/BitcoinPanel/BitcoinPanel';

const App = () => {
  const params: any = {
    method: 'GET',
    headers: {
      'X-CMC_PRO_API_KEY': Const.apiKey,
    },
    params: {
      'start': '1',
      'limit': '1',
      'convert': 'USD',
    },
  };

  const [{ data, error, isLoading }, doFetch] = useFetchApi(Const.apiUrl, params);

  useEffect(() => {
    doFetch({...params, /*data: { auth: 'auth-token' }*/});

    return () => {};
  }, []);

  return (
    <BitcoinPanel data={data && data.data} />
  );
};

export default App;
