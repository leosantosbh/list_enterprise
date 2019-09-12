import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/users/auth/sign_in', {
      email,
      password,
    });

    const token = response.headers;

    yield put(signInSuccess(token));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Erro na requisição', err.response.data.error);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.common['access-token'] = token['access-token'];
    api.defaults.headers.common.client = token.client;
    api.defaults.headers.common.uid = token.uid;
  }
}

export function signOut() {}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
