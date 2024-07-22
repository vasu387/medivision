import React, { useEffect, useState } from 'react';
import logo from '../Image/meditationlogo.jpeg';
import ima1 from '../Imagehome/womanstock.jpg'
import ima2 from '../Imagehome/womanmeditating.jpg'
import ima3 from '../Imagehome/womanmeditatinghome.jpg'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/shopping");
    };
    const handlemedi =()=>{
      navigate("/types");
    };
    const handleguide =()=>{
      navigate("/center")
    };
    const handlecontext =()=>
    {
      navigate("/contact")
    };
    const handlehome =()=>
    {
      alert("you are in Home page Thank you")
    }
    const handlesignup =()=>
    {
      navigate("/demosignup")
    };
    const handlesignin =()=>
    {
      navigate("/signin")
    }
    const handletimer =()=>{
      navigate("/Timer")
    }

  
  

  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);
   
    

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const showSlide = (index) => {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index].style.display = "block";
  };

  useEffect(() => {
    showSlide(myIndex);
  }, [myIndex]);


  return (
    <div>
     
     <header className="header" >
        <div className="logo">
          <img src={logo} alt="logo" width="85" height="62" />
          <h1 className='ti'>MEDIVISION</h1>
        </div>
         <nav>
          <ul>
            
            <li><button onClick={handleClick}>Shopping</button></li>
            <li><button onClick={handlehome}>Home</button></li>
            <li><button onClick={handlemedi}>Meditation</button></li>
            <li><button onClick={handleguide}>Guide</button></li>
            <li><button onClick={handlecontext}>Contact</button></li>
            <li><button onClick={handletimer}>Timer</button></li>
            <li><button onClick={handlesignup}>Sign up</button></li>
            <li><button onClick={handlesignin}>Sign in</button></li>
          </ul>
        </nav>
      
      </header>
      
      

      <div className="content">
        <h2 className="section-heading" style={{position:'relative'}}>Meditation</h2>
        <p className="description" style={{position:'relative',color:'black',marginLeft:'-130px',fontWeight:'bolder',boxShadow:'20px'}}>
          Meditation is a process whereby the mind is withdrawn from external thoughts and concentrated on a single
          object. This object may be a word, idea, point, process, image, or some combination of the above. 
        </p>
      </div>


      <div style={{marginTop:'-400px',}} >
        <img className="mySlides" src={ima1} style={{ width: '1550px', height: '680px' }} alt="" />
        <img className="mySlides" src={ima2} style={{ width: '1550px',  height: '680px'}} alt="" />
        <img className="mySlides" src={ima3} style={{ width: '1550px', height: '680px'}} alt="" />
      </div>

    </div>
  );
};

export default Home;
