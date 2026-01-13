import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Workouts API endpoint:', endpoint);
        console.log('Fetched workouts:', results);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [endpoint]);

  return ( 
    <div className="mb-4"> 
      <h2 className="mb-3 display-6">Workouts</h2> 
      <div className="card shadow-sm"> 
        <div className="card-body"> 
          <table className="table table-striped table-hover"> 
            <thead className="table-danger"> 
              <tr> 
                <th>Name</th> 
                <th>Type</th> 
                <th>Duration</th> 
                <th>Intensity</th> 
              </tr> 
            </thead> 
            <tbody> 
              {workouts.map((workout, idx) => ( 
                <tr key={workout.id || idx}> 
                  <td>{workout.name}</td> 
                  <td>{workout.type}</td> 
                  <td>{workout.duration}</td> 
                  <td>{workout.intensity}</td> 
                </tr> 
              ))} 
            </tbody> 
          </table> 
          <button className="btn btn-danger mt-3">Add Workout</button> 
        </div> 
      </div> 
    </div> 
  ); 
};

export default Workouts;
