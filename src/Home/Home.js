import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Image/meditationlogo.jpeg';
import ima1 from '../Imagehome/womanstock.jpg';
import ima2 from '../Imagehome/womanmeditating.jpg';
import ima3 from '../Imagehome/womanmeditatinghome.jpg';
import meditationAudio from '../audio/relaxing-meditation-231762.mp3'; 
import meditationAudio2 from '../audio/deep-relaxation-meditation-nervous-system-healing-200224.mp3';
import meditationAudio3 from '../audio/relaxing-birds-and-piano-music-137153.mp3';
import meditationAudio4 from '../audio/endless-by-prabajithk-118998.mp3';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [myIndex, setMyIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[myIndex].style.display = "block";
  }, [myIndex]);

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" width="85" height="62" />
          <h1 className="ti">MEDIVISION</h1>
        </div>
        <nav>
          <ul>
            <li><button onClick={() => handleClick("/shopping")}>Shopping</button></li>
            <li><button onClick={() => alert("You are on the Home page. Thank you!")}>Home</button></li>
            <li><button onClick={() => handleClick("/types")}>Meditation</button></li>
            <li><button onClick={() => handleClick("/center")}>Guide</button></li>
            <li><button onClick={() => handleClick("/contact")}>Contact</button></li>
            <li><button onClick={() => handleClick("/Timer")}>Timer</button></li>
            <li><button onClick={() => handleClick("/demosignup")}>Sign up</button></li>
            <li><button onClick={() => handleClick("/signin")}>Sign in</button></li>
          </ul>
        </nav>
      </header>

      <div className="content-slideshow-container">
        <div className="content">
          <h2 className="section-heading">Meditation</h2>
          <p className="description">
            Meditation is a process whereby the mind is withdrawn from external thoughts and concentrated on a single
            object. This object may be a word, idea, point, process, image, or some combination of the above.
          </p>
        </div>

        <div className="image-slideshow">
          <img className="mySlides" src={ima1} alt="Meditation" />
          <img className="mySlides" src={ima2} alt="Meditation" />
          <img className="mySlides" src={ima3} alt="Meditation" />
        </div>
      </div>

      <div className="news-grid">
        <div className="news-box">
          <h3>Our Vision</h3>
          <p>Medivision will provide a peaceful experience with calming visuals, guided meditations, mindfulness tips, and easy navigation.</p>
        </div>
        <div className="news-box">
          <h3>"Meditation Success Stories"</h3>
          <p>"Discover how Sarah, a busy professional, transformed her life with daily meditation. From managing stress to achieving work-life balance, her journey highlights the profound benefits of incorporating mindfulness into a hectic schedule."</p>
        </div>
        <div className="news-box">
          <h3>"Meditation Techniques for Better Sleep"</h3>
          <p>Explore effective meditation techniques designed to improve sleep quality. Learn simple practices that can help calm your mind, reduce stress, and promote restful nights. Perfect for those seeking peaceful sleep.</p>
        </div>
      </div>

      <div className="meditation-audio">
        <h1>Meditation Audio</h1>
        <p>Meditation offers numerous benefits, including reduced stress, improved focus, and enhanced emotional well-being. It helps lower anxiety and fosters a positive outlook, while also improving sleep quality and boosting physical health. Our website supports these benefits by providing guided meditation sessions, mindfulness exercises, and relaxation techniques designed to fit seamlessly into daily life. With easy access to resources for stress management, self-awareness, and relationship enhancement, our platform makes it convenient for users to experience the profound advantages of regular meditation and personal growth.</p>
        
        <div className="audio-control">
          <div className='audionames1'>
            <h3>Endless By Prabajithk</h3>
            <p>"Endless by Prabajithk is a soothing audio track designed to enhance relaxation, mindfulness, and meditation with calming, peaceful sounds."</p>
            <audio controls>
              <source src={meditationAudio} type="audio/mp3" />
            </audio>
          </div>
          
          <div className="audionames2">
            <h3>Deep Relaxation Meditation</h3>
            <p>"Deep Relaxation Meditation features calming and soothing audio designed to guide listeners into a state of profound tranquility, helping to reduce stress, enhance focus, and achieve inner peace."</p>
            <audio controls>
              <source src={meditationAudio2} type="audio/mp3" />
            </audio>
          </div>
          <div className="audionames3">
            <h3>Relaxing birds and piano music</h3>
            <p>"Relaxing Birds and Piano Music" is a soothing audio track that combines the gentle sounds of birds with calming piano melodies, perfect for relaxation, meditation, or background ambiance".</p>
            <audio controls>
              <source src={meditationAudio3} type="audio/mp3"/>
            </audio>
          </div>
          <div className="audionames4">
            <h3>Relaxing-meditation</h3>
            <p>"Relaxing Meditation" is a calming audio track designed to help you unwind and reduce stress. With soothing tones, it guides you into a peaceful state, perfect for meditation or relaxation.</p>
            <audio controls>
              <source src={meditationAudio4} type="audio/mp3"/>
            </audio>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="social">
          <a href="https://github.com/vasu387"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/vimal-vasu-089850258/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><i className='bx bxl-gmail'></i></a>
          <a href="https://www.instagram.com/"><i className='bx bxl-instagram'></i></a>
        </div>
        <ul className="list">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
        <p className="copyright">&copy; 2024 MEDIVISION. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
