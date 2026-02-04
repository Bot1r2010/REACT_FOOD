import logo from '../src/img/logo.png';
import img from './img/creaet.png'
import img1 from './img/shop.png';
import img2 from './img/check.png';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="food">
      
      <div className="navbar">
          <img src={logo} alt="" />

          <div className="ul">
              <li className="li">
                <a href="#" className="a">Home</a>
              </li>

              <li className="li">
                <a href="#" className="a">Product</a>
              </li>

              <li className="li">
                <a href="#" className="a">Faq</a>
              </li>

              <li className="li">
                <a href="#" className="a">Contact</a>
              </li>
          </div>
      </div>

      <div className="intro">

           <div className="box">
            <h2 className="h2">
              Food app
            </h2>

            <h1 className='h1'>
                Why stay hungry when 
                you can order form Bella Onojie
            </h1>

            <p className='p'>Download the bella onoje’s food app now on</p>

            <div className="button">
                  <a href="https://play.google.com/" target='_blank'>
                    <button className='btn1'>Playstore</button>
                  </a>

                  <a href="https://www.apple.com/app-store/" target='_blank' w>
                    <button className='btn2'>App store</button>
                  </a>
            </div>
        </div>
      </div>

      <div className='how'>

      <h1 className="subh1">
        How the app works
      </h1>

      <div className="box1">
        <img src={img} alt="" className="img" />

        <div className="text">
          <h3 className="h3">Create an account</h3>

          <h1 className="h__h1">Create/login to an existing
              account to get started
          </h1>

          <p className="h__p">An account is created with your email
              and a desired password</p>
        </div>

      </div>
      
    </div>

     <div className='shop'>

              <div className="box2">
        
                <div className="sh__text">
                  <h3 className="sh__h3">Explore varieties</h3>
        
                  <h1 className="sh__h1">
                    Shop for your favorites
                    meal as e dey hot.
                  </h1>
        
                  <p className="sh__p">
                    Shop for your favorite meals or drinks
                    and enjoy while doing it.
                  </p>
                </div>

                 <img src={img1} alt="" className="sh__img" />
        
              </div>
    </div>

    <div className='you'>

      <div className="box3">

            <img src={img2} alt="" className="y__img" />
              
                  <div className="y__text">
                        <h3 className="y__h3">Explore varieties</h3>
                  
                        <h1 className="y__h1">
                          Shop for your favorites
                          meal as e dey hot.
                      </h1>
                  
                      <p className="y__p">
                          Shop for your favorite meals or drinks
                          and enjoy while doing it.
                      </p>
                </div>
      
        </div>
      
    </div>

    <div className='now'>
        <div className="n__box">
            <h1 className="n__h1">
                Download the app now.
            </h1> 

            <p className="n__p">
              Available on your favorite store. Start your premium experience now
            </p>       

            <div className="n__button">
                  <a href="https://play.google.com/" target='_block'>
                    <button className='n__btn1'>Playstore</button>
                  </a>

                  <a href="https://www.apple.com/app-store/" target='_block'>
                    <button className='n__btn2'>App store</button>
                  </a>
            </div>
        </div>
    </div>

    <div className="fut">
        <img src={logo} alt="" className="img" />

        <div className="icon">
            <a href="https://x.com/?lang=ru" target='_blonk'><FaTwitter className='f' /></a>
            <a href="https://www.facebook.com/?locale=ru_RU" target='_blonk'><FaFacebook className='f'/></a>
            <a href="https://www.instagram.com/" target='_blonk'><FaInstagram className='f'/></a>
        </div>

        <h5 className="h5">Copywright 2020 Bella Onojie.com</h5>
    </div>
      
    </div>
  );
}

export default App;
