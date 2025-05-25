import React from 'react';
import bannerImg from '../assets/image/banner-right-img.png';
import cupImg from '../assets/image/cup-img.png';
import adminIcon from '../assets/image/admin-icon.png';

function Banner() {
  return (
    <section className="banner-main-con" id="home">
      <div className="container pl-0 pr-0">
        <div className="footer-social-icon banner-social-icon mb-0">
          <ul className="mb-0 list-unstyled">
            <li>
              <a href="https://www.behance.net/"><i className="fab fa-behance d-flex align-items-center justify-content-center"></i></a>
            </li>
            <li className="mt-3 mb-3">
              <a href="https://dribbble.com/"><i className="fab fa-dribbble d-flex align-items-center justify-content-center ml-0 mr-0"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i></a>
            </li>
          </ul>
        </div>

        <div className="banner-con text-lg-left text-center">
          <div className="row">
            <div className="col-lg-7 col-sm-12 d-flex justify-content-center flex-column">
              <div className="banner-left-con wow slideInLeft">
                <div className="banner-heading">
                  <h2>Hello, I Am</h2>
                  <ul className="dynamic-txts">
                    <li><h1>Alina Parker</h1></li>
                    <li><h1>Alina Parker</h1></li>
                    <li><h1>Alina Parker</h1></li>
                    <li><h1>Alina Parker</h1></li>
                  </ul>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptareu<br />
                    dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="banner-btn generic-btn d-inline-block">
                  <a href="#Contact">Hire Me</a>
                </div>
                <a href="#Portfolio" className="See-btn">See My Work</a>
              </div>
            </div>

            <div className="col-lg-5 col-sm-12">
              <div className="banner-right-con position-relative wow slideInRight" id="banner-right-con">
                <figure className="mb-0">
                  <img src={bannerImg} alt="banner-right-img" id="banner-right-img" />
                </figure>

                <div className="best-award-con d-inline-block wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="best-award-inner-con">
                    <figure className="mb-0">
                      <img src={cupImg} alt="cup-img" className="img-fluid" />
                    </figure>
                    <div className="best-award-title">
                      <p className="mb-0">Best Design<br />Award.</p>
                    </div>
                  </div>
                </div>

                <div className="best-award-con d-inline-block happy-con wow bounceInUp" data-wow-duration="1s" data-wow-delay="1s">
                  <div className="best-award-inner-con text-center">
                    <figure>
                      <img src={adminIcon} alt="admin-icon" className="img-fluid" />
                    </figure>
                    <div className="best-award-title d-inline-block ml-0">
                      <p className="mb-0 d-inline-block count">4</p>
                      <p className="mb-0 d-inline-block">k+</p>
                      <span className="d-block">Happy<br />Customers</span>
                    </div>
                  </div>
                </div>

                <div className="cursor"></div>
                <div className="cursor2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
