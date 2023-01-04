import { createContext, useEffect, useState } from 'react';
import useActivities from '../hooks/api/useActivities';

const ActivityContext = createContext();
export default ActivityContext;

export function ActivityProvider({ children }) {
  const [activity, setActivity] = useState([]);
  const { activityData } = useActivities();
  useEffect(() => {
    setActivity(activityData);
  });

  return <ActivityContext.Provider value={{ activity, setActivity }}>{children}</ActivityContext.Provider>;
}