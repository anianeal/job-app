import React from 'react'
import './Home.css'


const Home = () => {
  return (
    <div>
  <header>
    <h1 className="logo"><span className="text-gradient">Aicareer</span></h1>
    
  </header>
  {/* Canvas */}
  <canvas className="orb-canvas" />
  {/* Overlay */}
  <div className="overlay">
    {/* Overlay inner wrapper */}
    <div className="overlay__inner">
      {/* Title */}
      <h1 className="overlay__title">
        Congrats on taking the steps to start your new 
        <span className="text-gradient"> career</span> 
      </h1>
      <p className="overlay__description">
        You will be able to apply and filter job to suit your needs.
        <strong> You'll even be able to save them to comeback later</strong>
      </p>
      {/* Buttons */}
      <div className="overlay__btns">
        <button className="overlay__btn overlay__btn--transparent">
        <a href="signin.html">
            Signup
          </a>
        </button>
      </div>
    </div>
  </div>
  <div className="search-bar">
    <section className="job-search">
      <h2>Or start searching below</h2>
      <input type="text" id="job-keyword" name="job-keyword" required minLength={2} placeholder="Keywords" />
      <input type="text" id="job-location" name="job-location" required minLength={2} placeholder="Location" />
      <input type="text" id="job-type" name="job-type" required minLength={2} placeholder="Type" />
      <a href="#" className="search-btn">Search</a>
    </section>
  </div>
</div>

  )
}

export default Home