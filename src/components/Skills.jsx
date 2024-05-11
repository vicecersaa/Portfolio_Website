import React from 'react'
import SkillsProps from '../props/SkillsProps'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactJS from '../assets/REACTJS.png'
import NodeJs from '../assets/NODEJS.PNG'
import MongoDb from '../assets/MONGODB.PNG'
import MySql from '../assets/MYSQL.PNG'
import ThreeJs from '../assets/THREEJS.PNG'

const Skills = (props) => {
  return (
    <div className='timeline' style={props.style}>
    <div className='timeline-title'>
      <h1>Skills</h1>
    </div>
    <div className='skills'>
      <SkillsProps 
        logo={HTML}
        title="HTML"
        tag="Intermediate"
        text="I'm Intermediate at this level because i'm comfortable with writing
              code with HTML you can check out my html projects on my portfolio
              section."
      />

      <SkillsProps 
        logo={CSS}
        title="CSS"
        tag="Intermediate"
        text="I would consider myself as a intermediate level of CSS because
              im getting used to flexbox, animation and other cool stuff around
              it."
      />

      <SkillsProps 
        logo={Javascript}
        title="Javascript"
        tag="Intermediate"
        text="I'd like to say that i'm still a Intermediate level in Javascript, 
              because Javascript is a large language full of oppurtunities to learn
              thats why i'm very excited to learn more about it."
      />

      <SkillsProps 
        logo={ReactJS}
        title="React"
        tag="Beginner"
        text="I'm still a beginner in React, still learning a lot of stuff to make
              my code more efficient with it, i've learned React props, useState, 
              useEffect and many other stuff in react."
      />

      <SkillsProps 
        logo={NodeJs}
        title="NodeJs"
        tag="Beginner"
        text="I'm still a beginner in NodeJs, still learning a lot of stuff related to NodeJs but i can
              allready write code with it and willingly to learn more deeply into it."
      />

      <SkillsProps 
        logo={MongoDb}
        title="MongoDB"
        tag="Intermediate"
        text="Been working with MongoDb Database quite a lot and been already quite familiar with it and
              easy to use overall."
      />

      <SkillsProps 
        logo={MySql}
        title="MySql"
        tag="Intermediate"
        text="Creating database in MySql was quite a bit hard for the first time but no probs i allready getting
              used to it."
      />

      <SkillsProps 
        logo={ThreeJs}
        title="ThreeJs"
        tag="Intermediate"
        text="Learning to put some 3d Models to my portfolio website was a struggle at the beginning but i continue learning it 
              and eventually i got it nicely done."
      />

    </div>
    </div>
  )
}

export default Skills
