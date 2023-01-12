import * as activityApi from '../../services/activityApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useSchedule() {
  const token = useToken();

  const {
    data: schedules,
    loading: schedulesLoading,
    error: schedulesError,
    act: getSchedule,
  } = useAsync(() => activityApi.getActivitySchedule(token));

  return {
    schedules,
    schedulesLoading,
    schedulesError,
    getSchedule,
  };
}
