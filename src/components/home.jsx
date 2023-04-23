import React,{useState} from 'react';
import Skills from './skills';
import Services from './services';
import video from './Assets/Home_Bg_Video.mp4';

function Home()
{
    const [skill, setSkill] = useState([
        {
          id: 1,
          img:'https://rb.gy/vdh4c',
          title: 'REACT',
          level: 90,
        },
        {
          id: 2,
          img:'https://rb.gy/w9fuh',
          title: 'CPP',
          level: 80,
        },
        {
          id: 3,
          img:'https://rb.gy/eh3ov',
          title: 'JAVA',
          level: 70,
        },
        {
          id: 4,
          img:'https://rb.gy/ta79u',
          title: 'HTML & CSS',
          level: 90,
        }
      ]);

      const [service, setService] = useState([
        {
          id: 1,
          img:'https://rb.gy/anc4z',
          title: 'App Developement',
          description: 'App development is the process of creating software applications that run on mobile devices such as smartphones and tablets.',
        },
        {
          id: 2,
          img:'https://rb.gy/nk5ah',
          title: 'Database Management',
          description: 'Database management involves organizing, storing, retrieving, and securing data in a structured way. It was used in various departments.',
        },
        {
          id: 3,
          img:'https://rb.gy/sfath',
          title: 'Web Design',
          description: 'Web design involves creating visually appealing and functional websites using various design principles and technologies.',
        },
      ]);

    return(
        <div> 
            <div id='home'>
            <video src={video} autoPlay loop muted />                
            <h1>I'm Madheswaran<br />A Front-end Developer</h1>
            </div>
            <div id='skills' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <h1 style={{textAlign:'center',paddingBottom:'20px',color:'white'}} >Skills</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', justifyContent:'center'}}>
                {skill.map((skill) => (
                <div key={skill.id} style={{ margin: 10 }}>
                <Skills skill={skill} />
                </div>
                ))}
                </div>
            </div>
            <div id='services' style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
            <h1 style={{textAlign:'center',paddingBottom:'20px',color:'white'}} >Services</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', justifyContent:'center'}}>
                {service.map((service) => (
                <div key={service.id} style={{ margin: 10 }}>
                <Services service={service} />
                </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Home;