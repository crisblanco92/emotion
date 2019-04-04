import React from 'react'

export default function TheProject() {
  return (

    <section className="project-container">
 

      <article className="project-resume">
        <div className="column1">
          <h2>WHAT</h2>
          <p className="explanation">E-motion is a game/tool for visualizing information provided from the users
          The final intention is to transform their emotional and rational result level into visual forms.</p>

          <h2>WHY</h2>
          <p className="explanation">This platform was born as an experimental project for the author, Cristina. 
            The goal of researching and knowing about the universe of emotions, and the need to get to a better 
            understanding of a small part of the complexity of the human being, disembarked in a journey of investigation that later became into
            developing an online game to give shape to certain concepts. E-motion refers to movement, emotions and their relationship.</p>

          <h2>HOW</h2>
          <p className="explanation">For the data transformation we needed Javascript and CSS. The whole application 
            was developed in React and the data information is continually saved in Mongoose Database. The parameters that are obtained
            from the user are used for the creation of the visual representations.</p>
         </div>

        <div className="column2">
        <h2>THE DATA</h2>
        <p className="explanation">All forms were drawed previously. They were inspired by elements in the real Universe. 
          20 figures are linked to 20 concepts in pairs, resulting in 10 pairs. Both the speed of rotation and the single forms that compose 
          it, are defined from a test of ten questions of double answer option each. This determines the percentage 
          of emotionality and rationality, and the final form is it's representation.</p>

        </div>

        <div className="column3">
        <h2>THE PURPOSE</h2>
        <p className="explanation">E-motion was created with the intention of representing a small part of 
          what we know as the universe of emotions. One of the keys of the project was the intention of
          keeping the results of the test private. Although we have the chance to share the final visual representation, 
          only each person knows the real answers that are linked to those forms. Also, in no way this has the intention
          of being any scientific proven project, but only a visually attractive online game, that turns into a nice to the eye experience.
          The possibilities of you having the same figure in the final result as another person is 1 in 10.000.</p>

        </div>

      </article>

      <h2 className="the-forms">THE FORMS</h2>

      <article className="project-forms">

            <img src="/project-forms/formas-cuadrado-01.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-02.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-03.svg"  alt=""/>
            <img src="/project-forms/formas-cuadrado-04.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-05.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-06.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-07.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-08.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-09.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-10.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-11.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-12.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-13.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-14.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-15.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-16.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-17.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-18.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-19.svg" alt=""/>
            <img src="/project-forms/formas-cuadrado-20.svg" alt=""/>
      </article>

    <h2 className="further-info">FURTHER EXPLANATION</h2>
      <article className="project-info">

<div className="speeds">
        <div className="speed1">
        <img src="/public/speed-01.svg" srcset="speed-01.svg" className="speed"/>
          <p className="emorat">E <span>0      100</span></p>
          <p className="emorat">R <span>100    0</span></p>
          <p className="vel">V <span>1</span></p>
        </div>

        <div className="speed1">
        <img src="/public/speed-02.svg" srcset="speed-02.svg" className="speed"/>
          <p className="emorat">E <span>10    90</span></p>
          <p className="emorat">R <span>90    10</span></p>
          <p className="vel">V <span>2</span></p>
        </div>

        <div className="speed1">
        <img src="/public/speed-03.svg" srcset="speed-03.svg" className="speed"/>
          <p className="emorat">E <span>20    80</span></p>
          <p className="emorat">R <span>80    20</span></p>
          <p className="vel">V <span>3</span></p>
        </div>

        <div className="speed1">
        <img src="/public/speed-04.svg" srcset="speed-04.svg" className="speed"/>
          <p className="emorat">E <span>30    70</span></p>
          <p className="emorat">R <span>70    30</span></p>
          <p className="vel">V <span>4</span></p>
        </div>

        <div className="speed1">
        <img src="/public/speed-05.svg" srcset="speed-05.svg" className="speed"/>
          <p className="emorat">E <span>40    60</span></p>
          <p className="emorat">R <span>60    40</span></p>
          <p className="vel">V <span>5</span></p>
        </div>

        <div className="speed1">
        <img src="/public/speed-06.svg" srcset="speed-06.svg" className="speed"/>
          <p className="emorat">E <span>50    50</span></p>
          <p className="emorat">R <span>50    50</span></p>
          <p className="vel">V <span>6</span></p>
        </div>


</div>
        <p className="copyright"> e-motion 2019 </p>
        
      </article>

      
    </section>
  )
}
