import React from 'react'
const Section = () => {
  return(
    <section>
        <h2>
          Soy el componente Sección
        </h2>
      </section>
  )
}
const Main = () => {
  return (
    <main>
      <Section/>
      <Section/>
      
    </main>
  )
}

export default Main