import React from 'react';
import '../assets/styles/Work.css'; // Ensure you import the CSS file

const Work = () => {
  return (
    <section id='works'>
      <h2 className='workTitle'>My Projects</h2>
      <span className='worksDesc'>
        I take pride in paying attention to the smallest details and ensuring that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
      </span>
      <div className='worksImages'>
        <img src="./images/pic1.png" alt="Work 1" className='worksImage' />
        <img src="./images/pic2.png" alt="Work 2" className='worksImage' />
        <img src="./images/pic3.png" alt="Work 3" className='worksImage' />
        <img src="./images/pic4.png" alt="Work 4" className='worksImage' />
        <img src="./images/pic5.png" alt="Work 5" className='worksImage' />
        <img src="./images/pic6.png" alt="Work 6" className='worksImage' />
      </div>
      {/* <button className='workBtn'>See More</button> */}
    </section>
  );
};

export default Work;
