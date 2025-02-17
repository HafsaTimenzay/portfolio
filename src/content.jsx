import React from 'react'

const index = () => {
  return (
    <div>
      <section id="about">
        <span className='label'>Home</span>
        <h1>I'm Hafsa Timenzay, Full-Stack and Mobile Developer</h1>
        <div className="d-flex flex-row space-between gap-5">
          <button className='btn btn-primary'>
            My Work
            <i className="bi bi-folder ps-3"></i>
          </button>
          <button className='btn btn-primary'>
            Download CV
            <i className="bi bi-download ps-3"></i>
          </button>
        </div>
      </section>
    </div>
  )
}

export default index
