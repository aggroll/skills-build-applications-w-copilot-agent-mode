import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities API endpoint:', endpoint);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

    return (
      <div className="mb-4">
        <h2 className="mb-3 display-6">Activities</h2>
        <div className="card shadow-sm">
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Duration</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, idx) => (
                  <tr key={activity.id || idx}>
                    <td>{activity.date}</td>
                    <td>{activity.type}</td>
                    <td>{activity.duration}</td>
                    <td>{activity.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-primary mt-3">Add Activity</button>
          </div>
        </div>
      </div>
    );
};

export default Activities;
