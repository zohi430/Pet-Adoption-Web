import { useState } from 'react';
import { Link } from 'react-router-dom';

const pets = [
  { name: 'Buddy',  species: 'dog',    img: '/images/pic 1.jpg', breed: 'Labrador',         age: '3 yrs', sex: 'Male',   desc: 'Playful and energetic. Loves outdoor adventures and children.' },
  { name: 'Luna',   species: 'cat',    img: '/images/pic 2.jpg', breed: 'Domestic Shorthair', age: '2 yrs', sex: 'Female', desc: 'Calm and affectionate. Perfect for apartment living.' },
  { name: 'Max',    species: 'dog',    img: '/images/pic 3.png', breed: 'Border Collie',     age: '4 yrs', sex: 'Male',   desc: 'Highly intelligent and loyal. Thrives with active owners.' },
  { name: 'Bella',  species: 'cat',    img: '/images/pic 4.jpg', breed: 'Persian',           age: '3 yrs', sex: 'Female', desc: 'Gentle and quiet. Loves being groomed and cuddling.' },
  { name: 'Cleo',   species: 'rabbit', img: '/images/pic 5.png', breed: 'Holland Lop',       age: '1 yr',  sex: 'Female', desc: 'Curious and friendly rabbit who enjoys being handled.' },
  { name: 'Rocky',  species: 'dog',    img: '/images/pic 6.jpg', breed: 'German Shepherd',   age: '5 yrs', sex: 'Male',   desc: 'Brave, loyal, and well-trained. Great family guardian.' },
];

export default function Pets() {
  const [filter, setFilter] = useState('all');

  const visible = pets.filter(p => filter === 'all' || p.species === filter);

  return (
    <section className="page">
      <h1>Browse Available Pets</h1>
      <p>All pets listed below are vaccinated, health-checked, and ready for adoption. Filter by species to find your match.</p>

      <div className="select-container">
        <label htmlFor="species-filter">Filter by Species</label>
        <select id="species-filter" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All Animals</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
          <option value="rabbit">Rabbits</option>
        </select>
      </div>

      <div className="card-container">
        {visible.map(pet => (
          <div className="card" key={pet.name}>
            <img src={pet.img} alt={pet.name} />
            <h3>{pet.name}</h3>
            <h4>{pet.breed} · {pet.age} · {pet.sex}</h4>
            <p>{pet.desc}</p>
            <Link to="/adopt">Adopt {pet.name}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
