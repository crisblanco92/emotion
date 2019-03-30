import React from 'react'

export default function TheProject() {
  return (
    <section className="project-container">

      <article className="project-resume">
        <div className="column1">
          <h1>WHAT</h1>
          <p className="explanation">E-motion is a tool for visualizing information that transforms 
            the user’s emotional and rational level into visual forms.</p>

          <h1>WHY</h1>
          <p className="explanation">This platform is born to help the user for a  better understanding 
            of a small part of the complexity of the human being, in this case, 
            the universe of emotions. E-motion refers to emotion, movement and its virtuality.</p>

          <h1>HOW</h1>
          <p className="explanation">For the data collection and its transformation we will use Javascript 
            and CSS3. The data that we will obtain from the user are the ones that 
            will be used for the creation of the visual representations.</p>
         </div>

        <div className="column2">
        <h1>THE DATA</h1>
        <p className="explanation">All forms will be drawn previously and will be inspired by the universe 
          of emotions and other terms related to this “Universe”. Both the speed at 
          which they palpate, and the sections that compose it, will be defined 
          from a test of ten questions of double answer option each. This will 
          determine the percentage of emotionality or rationality and will be what 
          the form represents.</p>

        </div>

        <div className="column3">
        <h1>THE PURPOSE</h1>
        <p className="explanation">E-motion is created with the intention of representing a small part of 
          what we know as the universe of emotions, and of what we do not know about 
          ourselves. E-motion will allow the visualization of our data and those of 
          others, generating a memory that will accumulate previous data and will 
          create a path to visualize what will be registered later. The information 
          we will collect will give rise to a unique visual form.</p>

        </div>

      </article>
      <article className="project-forms">
        <img src="/client/public/project-forms/" alt=""/>
        
      </article>
      <article className="project-info">

        
      </article>

      
    </section>
  )
}
