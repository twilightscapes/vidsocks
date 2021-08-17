import React from 'react'
// import { navigate } from 'gatsby-link'
import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import ScrollAnimation from 'react-animate-on-scroll'
import CookieConsent from "react-cookie-consent"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

const CustomBox = styled.div`
#installer {
  animation: cssAnimation 0s 1s forwards;
  visibility: hidden;
}

@keyframes cssAnimation {
  to   { visibility: visible; }
}




// @media (display-mode: standalone) {
//   /* All installed PWAs */
//   #installer{display: none !important;}
// }
	
// @media (hover: hover) {
// #installer{display: none !important;}
// }
	


`

const Install = () => (
<CustomBox style={{}} className="">








<div style={{display:'flex', justifyContent:'center', width:'100%'}}>

<CookieConsent
	debug={false}
	location="none"
	style={{ display:'block', color:'inherit',  textAlign:'center', justifyContent:'center', margin:'0 auto', top:'0', maxWidth:'62vw', margin:'0 auto', position:'', border:'1px solid red !important', width:'60%',
  overflow:'hidden',
  background:'transparent',
  borderRadius:'12px',
  padding:'0',
  margin:'0',
  height:'auto',
  filter:' drop-shadow(0px 0px 10px rgba(0,0,0,.9))',
}}
    buttonText="HIDE THIS"
	buttonStyle={{ background: "transparent", textDecoration:'underline', textAlign:'center', fontSize: "12px", position:'relative', bottom:'20px',  right:'0', display:'flex', flexDirection:'column', justifyContent:'center', color:'inherit', border:'0px solid yellow', margin:'0 auto', color:'#fff', fontWeight:'normal', background:'#111', borderRadius:'12px', padding:'4px 50px', border:'1px solid #666'}}
    expires={1}
    cookieName="adfreeyt.com-install-cookie"
>




{/* <div className="backdrop" style={{left:'0', top:'-60px'}}></div> */}
<div className="container" style={{padding:'0 0', border:'0px solid #555', borderRadius:'8px', color:'#fff', textAlign:'center', position:'relative', textShadow:'2px 4px 0 #000', overflow:'hidden', borderRadius:'12px'}}>



	
	{/* <p style={{textAlign:'center', fontSize:'clamp(1.6rem, -0.875rem + 7.333vw, 2.5rem)', padding:'0', margin:'0 0 0 0', overflowWrap:'break-word'}}>Install Web App <br /> <strong></strong></p> */}
	
	{/* <p style={{fontSize:'100%', textAlign:'left',}}>
  AdFree has app functionality. Add it to your home screen to get added features, exclusive content, and fullscreen capability. </p> */}
    
    {/* <p style={{fontSize:'200%', }}>
    <strong>Get 30% off</strong>
    </p> */}

 
  <div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'1px solid #333', borderRadius:'12px', backdropFilter:'blur(14px)', background:'rgba(0,0,0,0.50)',}}>
One-Click Install - NO APP STORE NEEDED




  <div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'1px solid #333', borderRadius:'12px', backdropFilter:'blur(14px)', background:'rgba(0,0,0,0.80)',}}>
      

Simply click the "install" icon on the right-side of your browser address bar</div>




  <span style={{fontSize:'80%'}}>For Apple iOS users:</span>
  <div style={{fontSize:'90%', textAlign:'center', display:'flex', flexDirection:'column', verticalAlign:'middle', lineHeight:'200%', width:'90%', margin:'0 auto', padding:' .5rem 1rem', border:'1px solid #333', borderRadius:'12px', backdropFilter:'blur(14px)', background:'rgba(0,0,0,0.80)',}}>
    
    <div style={{textAlign:'left', display:'flex', alignContent:'center', marginBottom:'1rem',}}>
   <IoShareOutline style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} />
    1) Press the 'Share' button  FUCK
  </div>
  
   <div style={{textAlign:'left', display:'flex', alignContent:'center',}}>
   <FaRegPlusSquare style={{fontSize:'200%', marginLeft:'0', marginRight:'2%', float:'',}} /> 
   
  2) Press 'Add to Home Screen'
   </div>
   
   </div>








 
 </div>


    <br />
    </div>
    
</CookieConsent>
</div>




</CustomBox>
)

export default Install