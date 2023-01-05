import dayjs from 'dayjs';

export default function formatDays(activities) {
  dayjs.locale('pt-br');
  const days = [];
  for (let i = 0; i < activities.length; i++) {
    const formatted = dayjs(activities[i].date).format('dddd, DD/MM');
    if (!days.includes(formatted)) {
      days.push(formatted);
    }
  }
  return days;
}
