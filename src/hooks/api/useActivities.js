import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activityApi from '../../services/activityApi';

export default function useActivities() {
  const token = useToken();

  const {
    data: activityData,
    loading: activityLoading,
    error: activityError,
    act: getActivity,
  } = useAsync(() => activityApi.getActivity(token));

  return {
    activityData,
    activityLoading,
    activityError,
    getActivity,
  };
}
