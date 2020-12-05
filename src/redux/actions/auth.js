import http from '../../helpers/http';
import qs from 'qs';

const loginAction = (email, password) => ({
  type: 'AUTH_USER',
  payload: http().post('auth/login', qs.stringify({email, password})),
});

const registerAction = (data) => ({
  type: 'MAKE_ACCOUNT',
  payload: http().post('auth/register/', qs.stringify(data)),
});

export {loginAction, registerAction};
