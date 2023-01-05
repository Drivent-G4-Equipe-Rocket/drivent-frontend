import * as activityApi from '../../services/activityApi';
import useAsync from '../useAsync';
import useToken from '../useToken';

export default function useActivity() {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivity,
  } = useAsync(() => activityApi.getActivity(token));

  return {
    activities,
    activitiesLoading,
    activitiesError,
    getActivity,
  };
}
