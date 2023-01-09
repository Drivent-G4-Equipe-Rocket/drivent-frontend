import api from './api';

export async function getActivity(token) {
  const response = await api.get('/activities', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postActivity(body, token) {
  const response = await api.post('/activities', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
