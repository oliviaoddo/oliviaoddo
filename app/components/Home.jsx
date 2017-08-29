import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (<div><div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
<!--         <h1 class="header center teal-text text-lighten-2">Parallax Template</h1>
 -->        <div class="row center">
<!--           <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
 -->        </div>
        <div class="row center">
        <!--   <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get Started</a> -->
        </div>
        <br><br>

      </div>
    </div>
    <div ref={(img)=>{$(img).parallax()}} class="parallax"><img class="img1" src="background3.jpg" alt="Olivia Oddo in San Francisco"></div>
  </div>


  <div class="grey lighten-4">
    <div class="section">

      <!--   Icon Section   -->
      <div class="container">
      <div class="row bio">
        <div class="col s12 m6">
          <div class="icon-block">
            <img class="oliviaProfile" src="oliviaoddo-small.jpg" alt="Olivia Oddo in San Francisco">
          </div>
        </div>

        <div class="col s12 m6">
          <div>
            <h4 class="center intro">Olivia Oddo</h4>
            <h6 class="center intro">Fullstack Software Engineer</h6>
            <p class="intro">I majored in Film and Electronic arts at CSULB and completed two minors, one in Computer Science and the other in Web Technologies and Applications. In 2014, I opened an ecommerce sea glass jewelry business. I developed the ecommerce website, designed the jewelry, and marketed it. This is when I discovered the practical application of computer science. I attended Fullstack Academy in NYC to further my education, and I am currently seeking development opportunities in San Francisco, CA.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
<!--         <h1 class="header center teal-text text-lighten-2">Parallax Template</h1>
 -->        <div class="row center">
<!--           <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
 -->        </div>
        <div class="row center">
        <!--   <a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Get Started</a> -->
        </div>
        <br><br>

      </div>
    </div>
    <div ref={(img)=>{$(img).parallax()}} class="parallax"><img class="img1" src="background1.jpg" alt="Olivia Oddo in San Francisco"></div>
  </div>


  <div class="grey lighten-4">
    <div class="section">

      <!--   Icon Section   -->
      <div class="container">
      <h3 class="center intro">Technical Skills</h3>
      <div class="row bio">
        <div class="col s12 m3">
          <div class="icon-block">
            <ul>
              <li><img src="firebase120.png"/></li>
              <li><img src="react120.png"/></li>
              <li><img src="sequelize120.png"/></li>
            </ul>
          </div>
        </div>
         <div class="col s12 m3">
          <div class="icon-block">
            <ul>
            <li><img src="node120.png"/></li>
            <li><img src="postgresql120.png"/></li>
            <li><img src="django120.png"/></li>
            </ul>
          </div>
        </div>
         <div class="col s12 m3">
          <div class="icon-block">
            <ul>

              <li><img src="html120.png"/></li>
              <li><img src="git120.png"/></li>
              <li><img src="css120.png"/></li>
            </ul>
          </div>
        </div>
        <div class="col s12 m3">
          <div class="icon-block">
            <ul>

              <li><img src="redux120.png"/></li>
              <li><img src="mysql120.png"/></li>
              <li><img src="javascript120.png"/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>


  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
<!--           <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
 -->        </div>
      </div>
    </div>
    <div ref={(img)=>{$(img).parallax()}} class="parallax"><img src="background4.jpg" alt="Unsplashed background img 2"></div>
  </div>

  <div class="grey lighten-4">
    <div class="section">

            <!--   Icon Section   -->
     <div class="container">
      <div class="row">
      <h3 class="center intro">Projects</h3>
        <div class="col s12 m6">
          <div class="icon-block">
              <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="colors.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="icon-block">
             <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="web-axs.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
          </div>
        </div>

  </div>
        <div class="row">
        <div class="col s12 m6">
          <div class="icon-block">
  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="web-axs.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>

          </div>
        </div>
        <div class="col s12 m6">
          <div class="icon-block">
             <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="web-axs.png">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>


  <div class="parallax-container valign-wrapper">
    <div class="section no-pad-bot">
      <div class="container">
        <div class="row center">
<!--           <h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
 -->        </div>
      </div>
    </div>
    <div ref={(img)=>{$(img).parallax()}} class="parallax"><img src="background2.jpg" alt="Unsplashed background img 3"></div>
  </div>
  </div>
)
    }
}
