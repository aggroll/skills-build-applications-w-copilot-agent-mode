import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Users API endpoint:', endpoint);
        console.log('Fetched users:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [endpoint]);

    return (
      <div className="mb-4">
        <h2 className="mb-3 display-6">Users</h2>
        <div className="card shadow-sm">
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead className="table-warning">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user.id || idx}>
                    <td>{user.name || JSON.stringify(user)}</td>
                    <td>{user.email}</td>
                    <td>{user.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-warning mt-3">Add User</button>
          </div>
        </div>
      </div>
    );
};

export default Users;
