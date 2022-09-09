import React from 'react'
import Card from './Card'
import "./Home.css"
import Navbar from './Navbar'
import img1 from "./assests/1.png"
import img2 from "./assests/2.png"
import profile1 from "./assests/freelancers/albert.png"
import profile2 from "./assests/freelancers/kristin.png"
import simg from "./assests/img.PNG"



function Home() {
  return (
    <div>
      <Navbar/>
      <div className='categorys'>
        <span className='categorys-name'>Programing & Tech</span>
        <span className='categorys-name'>Design & Art</span>
        <span className='categorys-name'>Writing & Translation</span>
        <span className='categorys-name'>SEO & Marketing</span>
        <span className='categorys-name'>Music & Audio</span>
        <span className='categorys-name'>Video & Animation</span>
      </div>
      <div className='display' >
       <div className='grid'>
        <div className='row'>
            <div style={{display:"flex",flexDirection:"column"}}>
              <span style={{color:"white"}}>Velit officia consequat</span>
              <span style={{fontSize:48,color:"white"}}>Lorem ipsum dolor amet, consectetur adipiscing.</span>
            </div>
            <Card  name={"Albert"} rating={4.8} img={img1} profile={profile1} price={2000}/>
            <Card  name={"Albert"} rating={5} img={img2} profile={profile2} price={2000}/>
            <Card  name={"Albert"} rating={4.8} img={img1} profile={profile1} price={2000}/>
          </div>
          <div className='row2'>
            <Card name={"Albert"} rating={4.8} img={img1} profile={profile1} price={2000}/>
            <Card name={"Albert"} rating={4.7} img={img2} profile={profile2} price={2000}/>
            <Card name={"Albert"} rating={3} img={img1} profile={profile2} price={2000}/>
            <Card name={"Albert"} rating={5} img={img2} profile={profile1} price={2000}/>
            <Card name={"Albert"} rating={4.8} img={img1} profile={profile2} price={2000}/>
          </div>
       </div>
        <div className='display-btn'>
          <span style={{padding:5}}>See more</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className='p-5' style={{background:'#e7fefb'}}>
                <div className='col'>
                    <div>
                        <p style={{color:'#07a189', fontSize:24}}>Velit officia consequent</p>
                        <span style={{color:'black', fontSize:24}}>
                        Lorem ipsum dolor sit amet                        </span>
                    </div>
                    <div className='d-flex text-justify justify-content-end ' >
                        <button style={{color:'black',background:'#e7fefb' ,border:'none'}}>See More<i className='fa fa-arrow-right' style={{color:'black'}}/></button>
                    </div>
                    </div>
                    <div className='col d-flex justify-content-between'>
                        <Card className="col" img={img2} profile={profile2} name="Albert" rating={4.8} price="2999" color='yellow' bg='#e7fefb' border='#07a189'/>
                        <Card className="col" img={img1} profile={profile2} name="Albert" rating={4.5} price="2999" color='yellow' bg='#e7fefb' border='#07a189'/>
                        <Card className="col" img={img2} profile={profile2} name="Albert" rating={4.7} price="2999" color='yellow' bg='#e7fefb' border='#07a189'/>
                        <Card className="col" img={img1} profile={profile2} name="Albert" rating={4.5} price="2999" color='yellow' bg='#e7fefb' border='#07a189'/>
                        <Card className="col" img={img2} profile={profile2} name="Albert" rating={4.7} price="2999" color='yellow' bg='#e7fefb' border='#07a189'/>
                    </div>
          </div>
          <div className='d-flex justify-content-around m-3'>
            <div className='h-300'>
              <img style={{maxHeight:"100%"}} src={simg}></img>
            </div>
            <div className='p-5'>
              <div style={{display:"flex",flexDirection:"column"}}>
                <p style={{color:"#07a189", fontWeight:"bold"}}>Velit officia consequat</p>
                <span style={{fontSize:48,color:"black"}}>Lorem ipsum dolor amet, consectetur adipiscing.</span>
              </div>
              <div className='d-flex justify-content-around'>
                <span style={{color:"#07a189",fontWeight:"bold"}}>Start Your Jouney as</span>
                <div className='d-flex p-2 ' style={{border:"2px solid black",alignItems:"center", borderRadius:8}}>
                  <span className='p-2'>Freelancer</span>
                  <i className='fa fa-arrow-right' style={{color:'black'}}/>
                </div>
              </div>
            </div>
          </div>
          <div className='p-5' style={{background:'#07a189'}}>
                <div className='col'>
                    <div className='text-center'>
                        <p style={{ fontSize:24}}>Velit officia consequent</p>
                        <span style={{color:"white", fontSize:40}}>
                        Lorem ipsum dolor sit amet                        </span>
                    </div>
                    <div className='d-flex text-justify justify-content-end ' >
                        <button style={{color:'white',background:'#07a189' ,border:'none'}}>See More<i className='fa fa-arrow-right' style={{color:'white'}}/></button>
                    </div>
                    </div>
                    <div className='col d-flex justify-content-between'>
                        <Card className="col" img={img2} profile={profile2} name="Albert" rating={4.8} price="2999" color='yellow'/>
                        <Card className="col" img={img1} profile={profile1} name="Albert" rating={4.5} price="2999" color='yellow'/>
                        <Card className="col" img={img2} profile={profile2} name="Albert" rating={4.7} price="2999" color='yellow'/>
                        <Card className="col" img={img1} profile={profile1} name="Albert" rating={4.5} price="2999" color='yellow'/>
                        <Card className="col" img={img2} profile={profile2} name="Albert" rating={4.7} price="2999" color='yellow'/>
                    </div>
          </div>
          <div className="page8">
          <div className="container-fliud mt-3 p-5">
            <div className="row">
              <div className="col">
                <div className="btn text-light px-3 " id="LogoBTN1">
                  <b>Logo</b>
                </div>
                <br />
                <address>
                  1901 Thornridge Cir,
                  <br />
                  Shiloh, Hawaii
                  <br />
                  81063
                </address>
              </div>
              <div className="col">
                <h5>
                  <b>Company</b>
                </h5>
                <span className="text-muted">About Us</span>
                <br />
                <span className="text-muted">Career</span>
                <br />
                <span className="text-muted">Team</span>
                <br />
                <span className="text-muted">Contact</span>
                <br />
              </div>
              <div className="col">
                <h5>
                  <b>Product</b>
                </h5>
                <span className="text-muted">Service</span>
                <br />
                <span className="text-muted">Freelancer</span>
                <br />
                <span className="text-muted">Features</span>
                <br />
                <span className="text-muted">Development</span>
                <br />
              </div>
              <div className="col">
                <h5>
                  <b>Links</b>
                </h5>
                <span className="text-muted">Privacy Policy</span>
                <br />
                <span className="text-muted">Term & Conditions</span>
                <br />
                <span className="text-muted">FAQ</span>
                <br />
              </div>
              <div className="col">
                <h5>
                  <b>Follow Us</b>
                </h5>
                <span className="h2 m-2">
                  <i className="fa-brands fa-square-twitter"></i>
                </span>
                <span className="h2 m-2">
                  <i className="fa-brands fa-square-facebook"></i>
                </span>
                <span className="h2 m-2">
                  <i className="fa-brands fa-square-instagram"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
