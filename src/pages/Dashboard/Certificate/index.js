import { useEffect, useState } from 'react';
import ActivityContext from '../../../contexts/ActivitiesInfoContext';
import useActivities from '../../../hooks/api/useActivities';

export default function Certificate() {
  const { activityData } = useActivities();
  const [show, setShow] = useState('fail!');

  useEffect(() => {
    if (activityData) {
      setShow('funcionando!');
    }
  });

  return (
    <>
      <p>{show}</p>
    </>
  );
}
