import React from 'react'
import data from './data'
import Header from './components/Header/Header'
import Cards from './components/PetCard/PetCard'
import Footer from './components/Footer/Footer'
import './index.css'



function App() {

  return (
    <>
      <Header title={data.title} />
      <div className='gallery'>
        <div className="card-container">
          {data.dogs.map((dog) => (
            <Cards
              key={dog.id}
              name={dog.name}
              description={dog.description}
              age={dog.age}
              image={dog.image}
              breed={dog.breed}
              color={dog.color}
            />
          ))}
        </div>
      </div>
      <Footer description={data.description}/>
    </>
  );
}

export default App
