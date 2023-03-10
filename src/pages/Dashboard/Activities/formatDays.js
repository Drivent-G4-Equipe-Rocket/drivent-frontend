import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

require('dayjs/locale/pt-br');
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

export default function formatDays(activities) {
  dayjs.locale('pt-br');
  const days = [];
  for (let i = 0; i < activities.length; i++) {
    const formatted = dayjs(activities[i].date).format('dddd, DD/MM');
    console.log(dayjs.utc(activities[i].startAt).format('HH'));
    if (!days.includes(formatted)) {
      days.push(formatted);
    }
  }
  return days;
}
