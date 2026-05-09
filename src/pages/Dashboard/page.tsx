export default function Dashboard() {
  const applications = [
    { id: '#1021', pet: 'Buddy',  species: 'Dog',    date: '2026-04-10', status: 'Approved'  },
    { id: '#1022', pet: 'Luna',   species: 'Cat',    date: '2026-04-18', status: 'Approved'  },
    { id: '#1031', pet: 'Max',    species: 'Dog',    date: '2026-05-01', status: 'Pending'   },
    { id: '#1034', pet: 'Cleo',   species: 'Rabbit', date: '2026-05-04', status: 'Rejected'  },
  ];

  const saved = [
    { name: 'Charlie', breed: 'Beagle',           age: '2 yrs', location: 'New York'    },
    { name: 'Bella',   breed: 'Persian Cat',       age: '3 yrs', location: 'Los Angeles' },
    { name: 'Rocky',   breed: 'German Shepherd',   age: '4 yrs', location: 'Chicago'     },
    { name: 'Daisy',   breed: 'Golden Retriever',  age: '1 yr',  location: 'Houston'     },
    { name: 'Oliver',  breed: 'Siamese Cat',       age: '2 yrs', location: 'Phoenix'     },
  ];

  return (
    <section className="page">
      <h1>My Dashboard</h1>
      <p>Welcome back! Here is a summary of your adoption activity.</p>

      <div className="card-container">
        <div className="card">
          <h3>🐾 Total Applications</h3>
          <h2>4</h2>
          <p>Submitted adoption requests</p>
        </div>
        <div className="card">
          <h3>✅ Approved</h3>
          <h2>2</h2>
          <p>Successfully adopted pets</p>
        </div>
        <div className="card">
          <h3>⏳ Pending</h3>
          <h2>1</h2>
          <p>Applications under review</p>
        </div>
        <div className="card">
          <h3>❤️ Saved Pets</h3>
          <h2>5</h2>
          <p>Pets saved to your wishlist</p>
        </div>
      </div>

      <h2>My Adoption Applications</h2>
      <div className="table-container">
        <table style={{ minWidth: '600px', maxWidth: '100%' }}>
          <thead>
            <tr>
              <th style={{ minWidth: '50px'  }}>ID</th>
              <th style={{ minWidth: '120px' }}>Pet Name</th>
              <th style={{ minWidth: '100px' }}>Species</th>
              <th style={{ minWidth: '120px' }}>Applied On</th>
              <th style={{ minWidth: '100px' }}>Status</th>
              <th style={{ minWidth: '100px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.pet}</td>
                <td>{app.species}</td>
                <td>{app.date}</td>
                <td>{app.status}</td>
                <td><button className="tiny-button">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Saved Pets</h2>
      <div className="table-container">
        <table style={{ minWidth: '500px', maxWidth: '860px' }}>
          <thead>
            <tr>
              <th style={{ minWidth: '120px' }}>Pet Name</th>
              <th style={{ minWidth: '100px' }}>Breed</th>
              <th style={{ minWidth: '80px'  }}>Age</th>
              <th style={{ minWidth: '100px' }}>Location</th>
              <th style={{ minWidth: '100px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {saved.map(pet => (
              <tr key={pet.name}>
                <td>{pet.name}</td>
                <td>{pet.breed}</td>
                <td>{pet.age}</td>
                <td>{pet.location}</td>
                <td><button className="tiny-button">Adopt</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
