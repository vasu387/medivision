import React from 'react'
import './Mindfulness.css'
import img111 from '../Image/maratamedi.png'
import { useNavigate } from 'react-router-dom'


const Mindfulness = () => {
  const navi=useNavigate();
  const click11 = () =>{
    navi("/depresstion")
  }
  return (
    <div className='hey'>
    <div className='mindimage' >
        
      <center><h1>Mindfulness Meditation</h1></center>
      <center><img src={img111} width={170} height={170}></img></center>
      <p><b>Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us. While mindfulness is something we all naturally possess, it’s more readily available to us when we practice on a daily basis. Whenever you bring awareness to what you’re directly experiencing via your senses, or to your state of mind via your thoughts and emotions, you’re being mindful. And there’s growing research showing that when you train your brain to be mindful, you’re actually remodeling the physical structure of your brain.</b></p>
      <h2>Advantage</h2>
      <p><b>The cultivation of mindfulness has roots in Buddhism, but most religions include some type of prayer or meditation technique that helps shift your thoughts away from your usual preoccupations toward an appreciation of the moment and a larger perspective on life.

Professor emeritus Jon Kabat-Zinn, founder and former director of the Stress Reduction Clinic at the University of Massachusetts Medical Center, helped to bring the practice of mindfulness meditation into mainstream medicine and demonstrated that practicing mindfulness can bring improvements in both physical and psychological symptoms as well as positive changes in health, attitudes, and behaviors.

Mindfulness improves well-being. Increasing your capacity for mindfulness supports many attitudes that contribute to a satisfied life. Being mindful makes it easier to savor the pleasures in life as they occur, helps you become fully engaged in activities, and creates a greater capacity to deal with adverse events. By focusing on the here and now, many people who practice mindfulness find that they are less likely to get caught up in worries about the future or regrets over the past, are less preoccupied with concerns about success and self-esteem, and are better able to form deep connections with others</b></p>
      <h2>Disadvantages</h2>
      <p><b>Meditation can have adverse effects, causing some people to re-experience trauma or have trouble sleeping.2 In a new study examining some of these experiences, 6% of participants who practiced mindfulness reported negative side effects and 14% reported disruptive side effects that lasted for more than a month. The study was published in mid-May in Clinical Psychological Science</b></p>
      <button onClick={click11}>back</button>

    </div>
    </div>
  )
}

export default Mindfulness