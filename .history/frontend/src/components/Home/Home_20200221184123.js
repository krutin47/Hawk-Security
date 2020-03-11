import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../main.css';


// const styles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(7),
//       width: theme.spacing(70),
//       height: theme.spacing(77),
//     },
//     paddingTop: theme.spacing(8),
//   },

//   paper: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#dddddd',
//     boxShadow: "2px 2px 6px 0 rgba(0,0,0,0.2)",
//     transition: "0.4s",
//     "&:hover":{
//       boxShadow: "22px 30px 60px 0 rgba(0,0,0,0.2)",
//     }
//   },   
// }));


function Home() {
  // const classes = styles();

  return (
    <React.Fragment>
      {/* <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h5" color="inherit">
              <pre>  Hack Security</pre>
            </Typography>
          </Toolbar>
      </AppBar> */}
    {/* <div className={classes.root} align="center"> */}
      
      
    
    <header>
    <div class="headerMain">
      <div class="wrapper clearfix">
        <div class="siteLogo fl">
          <a href="home.html"><img src="./../../assets/images/Sitelogo1.png" alt=""/></a>
        {/* </div> */}
        <a class="expandMenu"><i></i><i></i><i></i></a>
        <div class="siteNavigation fr">
          <ul class="parent">
            <li><a href="javascript:void(0)" routerLink="/profile">PROFILE</a></li>
            <li><a href="javascript:void(0)" routerLink="/availiblity">AVAILABLITY</a></li>
            <li><a href="javascript:void(0)" routerLink="/paystub">PAYSTUB</a></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
</header>

{/* <!--Banner Section--> */}
<section class="BannerSection overlay ">
  <div class="wrapper">
    <div class="table">
      <div class="table-cell text-center fontWhite">
        <h1 class="pb10 fontWhite">HAWK SECURITY</h1>
        <p class="pb20"> OUR SECURITY SERVICES
          MAKE THE WORLD A
          SAFER & FRIENDLIER PLACE
        </p>
        {/* <!-- <div class="button pt30 whiteButton wow fadeInDown"  data-wow-delay="0.6s">
          <a href="#">View Equipment</a>
          <a href="#">Request Parts</a>
        </div> --> */}
      </div>
    </div>
  </div>
</section>

{/* <!--2 column Right Content Left Image Section--> */}
<section class="twoColumnSection p70-0 forUp">
  <div class="wrapper">
    <div class="ib w50 pr15 wow fadeInLeft mw100 mr0">
      <h4>Security Guard</h4>
      <h5>Healthcare</h5>
      <div class="p20-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="button">
        <a href="javascript:void(0)">view more</a>
      </div>
    </div>
    <div class="ib w50 text-right pl15 wow fadeInRight mw100 mtop30 mobile-center mr0">
      <img src="https://images.squarespace-cdn.com/content/v1/56ae28f9cf80a1c462b624be/1481565679322-2MVB9GOCBZN3FM98WMNU/ke17ZwdGBToddI8pDm48kMS6Ag27B5PiNmuGKFL_Ya9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI4Jb8t-oE2cQnOjGBbWABngHbdRE5IN2-lFfoAl4DPcMKMshLAGzx4R3EDFOm1kBS/security-guard.jpg?format=1500w"/>
    </div>
  </div>
  
</section>

{/* <!--2 column Right Content Left Image Section--> */}
<section class="twoColumnSection p70-0 forUp greyBg">
  <div class="wrapper">
    <div class="ib w50 pr15 mw100 mtop30 mobile-center mr0">
      <img src="https://images.squarespace-cdn.com/content/v1/56ae28f9cf80a1c462b624be/1481565679322-2MVB9GOCBZN3FM98WMNU/ke17ZwdGBToddI8pDm48kMS6Ag27B5PiNmuGKFL_Ya9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI4Jb8t-oE2cQnOjGBbWABngHbdRE5IN2-lFfoAl4DPcMKMshLAGzx4R3EDFOm1kBS/security-guard.jpg?format=1500w"/>
    </div>
    <div class="ib w50 pl15 wow fadeInLeft mw100 mr0">
      <h4>Security Guard</h4>
      <h5>Commercial</h5>
      <div class="p20-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="button">
        <a href="javascript:void(0)">view more</a>
      </div>
    </div>

  </div>
</section>
{/* <!--2 column Right Content Left Image Section-->
<!-- <section class="twoColumnSection p70-0 forUp">
  <div class="wrapper">
    <div class="ib w50 pr15 wow fadeInLeft mw100 mr0">
      <h4>Featured Current Project</h4>
      <h5>ABC Laundry - New jerecy</h5>
      <div class="p20-0">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s</p>
      </div>
      <div class="button">
        <a href="javascript:void(0)">view more</a>
      </div>
    </div>
    <div class="ib w50 text-right pl15 wow fadeInRight mw100 mtop30 mobile-center mr0">
      <img src="Training-Crew-2.jpg">
    </div>
  </div>
</section> --> */}

{/* <!--3 column Section--> */}
<section class="threeColumnSection altBg p100-0 forUp">
  <div class="wrapper">
    <div class="capitalize fontWhite pb70 text-center ">
      <h3 class="fontWhite">Industry</h3>
    </div>
    <div class="threeColumnParent text-center fontWhite clearfix">
      <div class="Column fl w33 rowHeight tabw100">
        <div class="ServiceImage">
          <img src="./../../assets/images/hospital.png"/>
        </div>
        <h6 class="equalHeight fontWhite"> Healthcare </h6>
        <div class="serviceContent pt20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          
        </div>
      </div>
      <div class="Column fl w33 rowHeight tabw100">
        <div class="ServiceImage">
          <img src="./../../assets/images/office-block.png"/>
        </div>
        <h6 class="equalHeight fontWhite"> Commercial </h6>
        <div class="serviceContent pt20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div class="Column fl w33 rowHeight tabw100">
        <div class="ServiceImage">
          <img src="./../../assets/images/crane.png"/>
        </div>
        <h6 class="equalHeight fontWhite"> Infrastructure </h6>
        <div class="serviceContent pt20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  </div>
</section>


{/* <!-- 4 column Section--> */}
{/* <!-- <section class="fourColumnSection p100-0 greyBg forUp">
  <div class="wrapper">
    <div class=" text-center pb50 light wow fadeInDown">
      <h3 >What makes working with PLS the best choice?</h3>
      <div class="forAltWidth pt10">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s</p>
      </div>
    </div>

    <div class="fourColumnParent clearfix">
      <div class="imgColumn fl w25 tabw50">
        <div class="imagColumnInner equalHeight">
          <div class="topImage" style="background-image: url(./../../assets/./../../assets/images/Contact-Banner.png)">
          </div>
          <div class="imgColumnContent">
            <div class="ServiceTitle">
              <a href="#">
                <h6>Laundry rooms for Mullti-family/apartment</h6>
              </a>
            </div>
            <p>Many desktop publishing packages and web page editors now use Lorem as their</p>
          </div>
        </div>
      </div>
      <div class="imgColumn fl w25 tabw50">
        <div class="imagColumnInner equalHeight">
          <div class="topImage" style="background-image: url(./../../assets/./../../assets/images/Contact-Banner.png)">
          </div>
          <div class="imgColumnContent">
            <div class="ServiceTitle">
              <a href="#">
                <h6>Laundry rooms for Mullti-family/apartment</h6>
              </a>
            </div>
            <p>Many desktop publishing packages and web page editors now use Lorem as their</p>
          </div>
        </div>
      </div>
      <div class="imgColumn fl w25 tabw50">
        <div class="imagColumnInner equalHeight">
          <div class="topImage" style="background-image: url(./../../assets/./../../assets/images/Contact-Banner.png)">
          </div>
          <div class="imgColumnContent">
            <div class="ServiceTitle">
              <a href="#">
                <h6>Laundry rooms for Mullti-family/apartment</h6>
              </a>
            </div>
            <p>Many desktop publishing packages and web page editors now use Lorem as their</p>
          </div>
        </div>
      </div>
      <div class="imgColumn fl w25 tabw50">
        <div class="imagColumnInner equalHeight">
          <div class="topImage" style="background-image: url(./../../assets/./../../assets/images/Contact-Banner.png)">
          </div>
          <div class="imgColumnContent">
            <div class="ServiceTitle">
              <a href="#">
                <h6>Laundry rooms for Mullti-family/apartment</h6>
              </a>
            </div>
            <p>Many desktop publishing packages and web page editors now use Lorem as their</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section> --> */}
<br></br>

{/* <!-- 1  coloumn  Section--> */}
<section class="oneColumnSection p100-0 altBg forUp">
  <div class="wrapper">
    <div class="text-center fontWhite wow fadeInDown">
      <h3 class="fontWhite">Let's Chat</h3>
      <div class="p40-0 forSmallWidth light">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div class="button">
        <a href="javascript:void(0)">Request a Call</a>
      </div>
    </div>
  </div>
</section>

<footer class="footerSection">
  <div class="footerTop p70-0 ">
    <div class="wrapper">
      <div class="clearfix noListStyle fortopInner">
        
        <div class="footerNav ib w25 vt pr15 tabw50 xmw100 xmr0">
          <h6 class="titleHeight">Extra</h6>
          <ul>
            <li><a href="javascript:void(0)">Schedule a Call</a></li>
            <li><a href="javascript:void(0)">Terms of Service</a></li>
            <li><a href="javascript:void(0)">Security</a></li>
            <li><a href="javascript:void(0)">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footerNav ib w25 vt pr15 withSocial tabw50 xmw100 xmr0">
          <h6 class="titleHeight">Connect with us</h6>
          <ul>
            <li><a href="javascript:void(0)"><i class="fa fa-google-plus"></i>Google</a></li>
            <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i>Twitter</a></li>
            <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i>Facebook</a></li>
            <li><a href="javascript:void(0)"><i class="fa fa-linkedin"></i>Linkdin</a></li>
            <li><a href="javascript:void(0)"><i class="fa fa-pinterest"></i>Pintrest</a></li>
            <li><a href="javascript:void(0)"><i class="fa fa-instagram"></i>instagram</a></li>
          </ul>
        </div>
        <div class="newlaterForm ib w25 vt tabw50 xmw100 xmr0">
          <h6 class="titleHeight">Newsletter Sign up</h6>
          <form>
            <fieldset>
              <input type="email" placeholder="you@example.com"/>
            </fieldset>
            <fieldset>
              <input type="button" value="Sign up"/>
            </fieldset>
          </form>
        </div>
      </div>
    </div>

  </div>
  <div class="footerBottom p20-0 text-center">
    <div class="wrapper">
      <p> &copy; 2020 Hawk Security. All rights has been reserved.</p>
    </div>
  </div>
</footer>
{/* </div> */}
</React.Fragment>
  );
}


export default Home;