import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams API endpoint:', endpoint);
        console.log('Fetched teams:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, [endpoint]);

  return (
    <div className="mb-4">
      <h2 className="mb-3 display-6">Teams</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-info">
              <tr>
                <th>Name</th>
                <th>Members</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={team.id || idx}>
                  <td>{team.name}</td>
                  <td>{team.members.join(', ')}</td>
                  <td>{team.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success mt-3">Create Team</button>
        </div>
      </div>
    </div>
  );
};

export default Teams;
