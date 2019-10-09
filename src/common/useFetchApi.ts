import React, { useState, useEffect, useReducer, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const phaseFetchReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: null,
      };
    default:
      throw new Error();
  }
};

const useFetchApi = (initialUrl: string, requestParams: AxiosRequestConfig, onStateChange: Function = (state: any) => {}, initialData: any = null) => {
  const [params, setParams] = useState(requestParams);
  const [canFetch, setCanFetch] = useState(false);

  const [fetchState, dispatchState] = useReducer(phaseFetchReducer, {
    isLoading: false,
    error: null,
    data: initialData,
  });

  const callback = useCallback(onStateChange(fetchState), [fetchState]);

  useEffect(() => {
    if (canFetch) {
      setCanFetch(false);

      const fetchData = async () => {
        dispatchState({ type: 'FETCH_INIT' });

        try {
          const result = await axios(initialUrl, params);

          dispatchState({ type: 'FETCH_SUCCESS', payload: result.data });
        } catch (error) {
          dispatchState({ type: 'FETCH_FAILURE', payload: error });
        }
      };

      fetchData();
    }

    return () => {
    };
  });

  return [fetchState, (params: any) => {
    setParams(params);

    setCanFetch(true);
  }];
};

export default useFetchApi;