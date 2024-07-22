import React from 'react'
import './Typesofmeditation.css'
import img from '../Image/Movement meditation.png'
import img2 from '../Image/mindfulness meditation.png'
import img3 from '../Image/spritialmedi.jpeg'
import img4 from '../Image/FocusedMeditation.png'
import img5 from '../Image/movemeditation.jpeg'
import img6 from '../Image/maratamedi.png'
import img7 from '../Image/Transcendental Meditation.jpg'
import img8 from '../Image/Loving-kindness meditation.jpeg'
import img10 from '../Image/meditationlogo.jpeg'
import img9 from '../Image/visualization meditation.png'
import { useNavigate } from 'react-router-dom'

const Typesofmeditation = () => {
  const navigate2=useNavigate()
  const handiclickin1 =()=>
        {
            navigate2("/")
        }
  return (
    <div className='cool'>
       <center><h1>Types of meditation</h1></center>
       <center><h3>Healthy life,Healthy mind</h3></center>
       <h2>Nine types of Meditation:</h2>
       <center><img src={img} width={170} height={170}></img></center>
      
      
       <p>
         <h3>
           Experienced meditators agree a daily meditation practice can have significant benefits for mental and physical health. But one thing they probably won’t agree on? The most effective types of meditation. That’s simply because it’s different for everyone. After all, there are literally hundreds of meditation techniques encompassing practices from different traditions, cultures, spiritual disciplines, and religions. There’s not a universally accepted “best” or “most effective” type; rather, it is our individual preference that helps us choose the one (or ones) that works best for us.
         </h3>
         
       </p>
       <br></br>
       <br></br>
       <h2>Mindfulness meditation</h2>
       <br></br>
       <center><img src={img2} width={170} height={170}></img></center>
       <p>
         <h3>
           Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us. While mindfulness is something we all naturally possess, it’s more readily available to us when we practice on a daily basis. Whenever you bring awareness to what you’re directly experiencing via your senses, or to your state of mind via your thoughts and emotions, you’re being mindful. And there’s growing research showing that when you train your brain to be mindful, you’re actually remodeling the physical structure of your brain.
         </h3>
       </p>
       <br></br>
       <br></br>
       <h2>Spiritual meditation</h2>
       <center><img sec={img3} width={170} height={170}></img></center>
       <p><h3> Spiritual meditation is an experience that takes you to the depths of who you are. You, as your real self, stripped of all the perceptions you had about yourself until that point in your life. In the process, you experience joy and peace. A feeling of love and light warms up your being.Spiritual meditation makes you realize the eternal truth and let go of all that had happened and will happen. The present is where you want to be and find solace in. The need to practice spiritual meditation comes from an innate longing to see and think beyond the chaotic world surrounding you. Now, let's learn how to do it</h3>
       </p>
       <br></br>
       <br></br>
       <h2>Focused meditation</h2>
       <center><img src={img4} width={200} height={170}></img></center>
       <p><h3> Focus meditation, also known as focused attention meditation (FAM), is a type of mindfulness meditation that can help increase your awareness of the present moment. Rather than attempt to empty the mind, this meditation style involves focusing your attention on an object or physical sensation, such as your breathing. It’s a great meditation technique for beginners as it does not require a meditation practitioner or any previous training. However, non-meditators might find it easier to get started with guided meditations via meditation apps. All you need to begin experiencing the positive effects of meditation is a few minutes, a quiet space, and an object of focus.</h3></p>
       <br></br>
       <br></br>
       <h2>Movement meditation(yoga)</h2>
       <center><img src={img5} width={170} height={170}></img></center>
      <p><h3>Moving meditation is a way of bringing together movement and the focused mind. It’s a type of meditation that’s different from the traditional form, where you might sit quietly and remain still. In moving meditation, your body is active, but your mind is calm and centered.When you practice moving meditation, you move with purpose, paying attention to each step and each breath. Being aware of how you are moving helps your mind to stay in the present moment. For example, you might notice the sensation of your feet touching the ground, the rhythm of your breath, or the sounds around you as you walk</h3></p>
      <br></br>
       <br></br>
       <h2>Mantra meditation</h2>
       <center><img src={img6} width={240} height={220}></img></center>
       <p><h3>Mantra is a Sanskrit term, with “man” meaning “mind” and “tra” meaning “release.”

Think of a mantra — a word or phrase you repeat during meditation — as a tool to help release your mind. It can make a lot of difference, especially if you have trouble concentrating or getting in the right frame of mind.

Many people find that using a mantra can boost awareness and improve concentration. Since it helps you stay focused, it could lead to improved results from meditation.
</h3></p>
        <h2>Transcendental Meditation</h2>
        <center><img src={img7} width={170} height={170}></img></center>
        <p><h3>Transcendental Meditation (TM) is a technique for avoiding distracting thoughts and promoting a state of relaxed awareness.According to supporters of TM, when you meditate, the ordinary thinking process is “transcended.” It’s replaced by a state of pure consciousness. In this state, you achieve perfect stillness, rest, stability, order, and a complete absence of mental boundaries. The end goal is to achieve a state of relaxed awareness.

The method became popular due to its association with the Beatles, but TM continues to be studied and practiced today for its health benefits.
</h3></p>
        <h2>Progressive relaxation</h2>
        <center><img src={img8} width={170} height={170}></img></center>
        <p><h3>In progressive muscle relaxation, you focus on slowly tensing and then relaxing each muscle group.

This can help you focus on the difference between muscle tension and relaxation. You can become more aware of physical sensations.

In one type of progressive muscle relaxation, you start to tense and relax the muscles in your toes. You gradually work your way up to your neck and head. This is best done in a quiet area without interruptions. You also can start with your head and neck and work down to your toes. Tense your muscles for about five seconds and then relax for 30 seconds, and repeat.

</h3></p>
        <h2>Loving-kindness meditation</h2>

        <center><img src={img10} width={200} height={170}></img></center>
        <p><h3>We'll now shift into this practice of joy, by bringing to mind someone who we really believe has our best interests in their heart. Someone who has extended kindness and support to us. This could be someone we know now or someone from the past. A friend, family member, teacher, colleague. 

Choose just one person and bring them to mind as though they were seated right in front of you. Smiling at you. 

Imagine them truly wishing for you to be happy, fulfilled. For you to have a life that is flourishing. Imagine them beaming this towards you in their smile, in their eyes. And with your next breaths, inhale and draw in that intention of goodness. 
</h3></p>
        <h2>visualization meditation</h2>
        <center><img src={img9} width={200} height={170}></img></center>
        <p><h3>Visualization is a component of many meditation practices, including loving-kindness meditation (or metta) and the other three Brahma Viharas of compassion, appreciative joy, and equanimity (Fronsdal, n.d.), often collectively known as the Four Immeasurables.

Some types of meditation focus primarily on visualization and guided imagery to cultivate certain psychological states</h3></p>
<center><button onClick={handiclickin1}>back</button></center>
    
    </div>
  )
}

export default Typesofmeditation
