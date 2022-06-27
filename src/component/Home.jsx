import React from "react";
import '../main.css';
import img1 from '../image/1.jpg'
import img2 from '../image/2.jpg'
import img3 from '../image/3.jpg'

let truffles = 'http://localhost:3000/Truffles'
let crepes = 'http://localhost:3000/Crepes'
let cookies = 'http://localhost:3000/Cookies'


function Home() {
  return (
    <div>
      <div className="main">

        <div className="box">
          <div>
            <img src={img1} className='img'></img>
          </div>
          <h1>Truffles</h1>
          <div className="span">
            <p>These truffles are made without any flour or dairy.</p>
          </div>
          <a href={truffles}>read more</a>
        </div>

        <div className="box">
          <div>
            <img src={img2} className='img'></img>
          </div>
          <h1>Crepes</h1>
          <div className="span">
            <p>These peanut butter oatmeal chocolate.</p>
          </div>
          <a href={crepes}>read more</a>
        </div>

        <div className="box">
          <div>
            <img src={img3} className='img'></img>
          </div>
          <h1>Cookies</h1>
          <div className="span">
            <p>These peanut butter oatmeal chocolate chip cookies are made without any flour or dairy.</p>
          </div>
          <a href={cookies}>read more</a>
        </div>

      </div>
    </div>

  );

}

export default Home;