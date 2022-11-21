import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivities } from '../../redux/actions/index.actions';
import { deleteActivity } from '../../redux/actions/index.actions';
import { getCountries } from '../../redux/actions/index.actions';

const Activities = () => {
  const dispatch = useDispatch();
  const activitiesByCountries = useSelector((state) => state.activities);

  React.useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  const handlerDelete = async (event, name) => {
    event.preventDefault();
    dispatch(deleteActivity(name));
    alert(`The activity ${name} has been deleted successfully`);
  };

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const allActivities = [];
    let activitiesIds = [];

    activitiesByCountries?.map((countryActivity) => {
      if (countryActivity?.activities.length !== 0) {
        for (const activity of countryActivity.activities) {
          activity.countryName = countryActivity.name;
          allActivities.push(activity);
          activitiesIds.push(activity.country_activity.activityId);
        }
      }
    });

    activitiesIds = activitiesIds.filter((value, index) => {
      return activitiesIds.indexOf(value) === index;
    });

    for (const [index, value] of activitiesIds.entries()) {
      activitiesIds[index] = {
        id: value,
        value: [],
      };
    }

    for (const activity of allActivities) {
      for (const activityId of activitiesIds) {
        if (activity.country_activity.activityId === activityId.id) {
          activityId.value.push(activity);
        }
      }
    }

    setActivities(activitiesIds);
  }, [activitiesByCountries]);

  return (
    <div className="">
      <h1>Tours around the world</h1>
      <div className="">
        {activities.map((activity) => {
          const { value } = activity;
          const { name, difficulty, length_time, season } = value[0];
          return (
            <div className="">
              <h3>{name}</h3>
              <p>{`Difficulty: ${difficulty}/5`}</p>
              <p>{`Duration: ${length_time}`}</p>
              <p>{`Season: ${season}`}</p>
              <h4>Countries:</h4>
              {value?.map((countries) => {
                return <p>{countries.countryName}</p>;
              })}

              {/* //  
          

            //   <button
            //     onClick={(event) => handlerDelete(event, activities.name)}
            //   >
            //     Delete
            //   </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Activities;
