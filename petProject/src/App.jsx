import React from 'react'
import data from './Data'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/PetCard/PetCard'
import Footer from './components/Footer/Footer'



function App() {

  return (
    <>
      <Navbar title={data.title} />
      <div className='gallery'>
        {data.dog.map((dog) => (
          <Cards
            key={dog.id}
            name={dog.name}
            description={dog.description}
            age={dog.age}
            image={dog.image}
            breed={dog.breed}
          />
        ))}
      </div>
      <Footer description={data.description}/>
    </>
  );
}

export default App
