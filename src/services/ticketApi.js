import api from './api';

export async function getTicketType(token) {
  const response = await api.get('/tickets/types', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
export async function getTicket(token) {
  console.log('entrei no getTicket');
  const response = await api.get('/tickets', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
