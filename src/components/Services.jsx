import React from 'react';
import service1 from '../assets/image/service-icon1.png';
import service2 from '../assets/image/service-icon2.png';
import service3 from '../assets/image/service-icon3.png';
import service4 from '../assets/image/service-icon4.png';

function Services() {
  return (
    <>
      {/* service section */}
      <section className="w-100 float-left service-con padding-top padding-bottom position-relative" id="service-con">
        <div className="container">
          <div className="service-inner-con position-relative">
            <div className="generic-title text-center">
              <h6>My Expertise</h6>
              <h2 className="mb-0">
                Provide Wide Range of<br />Digital Services
              </h2>
            </div>
            <div className="service-box wow fadeInUp">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="service-box-item">
                    <figure className="mb-0">
                      <img src={service1} alt="service-icon" className="img-fluid" />
                    </figure>
                    <div className="service-box-item-content">
                      <h4>Ui/Ux Design</h4>
                      <p>
                        Dolor repellendus temporibus autem
                        quibusdam officiis debitis rerum neces
                        aibus minima veniam.
                      </p>
                      <a href="#" data-toggle="modal" data-target="#Ui-Design">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service-box-item">
                    <figure className="mb-0">
                      <img src={service2} alt="service-icon" className="img-fluid" />
                    </figure>
                    <div className="service-box-item-content">
                      <h4>Web Design</h4>
                      <p>
                        Dolor repellendus temporibus autem
                        quibusdam officiis debitis rerum neces
                        aibus minima veniam.
                      </p>
                      <a href="#" data-toggle="modal" data-target="#web-design">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-0">
                <div className="col-lg-6 col-md-6">
                  <div className="service-box-item">
                    <figure className="mb-0">
                      <img src={service3} alt="service-icon" className="img-fluid" />
                    </figure>
                    <div className="service-box-item-content">
                      <h4>Web Development</h4>
                      <p>
                        Dolor repellendus temporibus autem
                        quibusdam officiis debitis rerum neces
                        aibus minima veniam.
                      </p>
                      <a href="#" data-toggle="modal" data-target="#web-development">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service-box-item mb-0">
                    <figure className="mb-0">
                      <img src={service4} alt="service-icon" className="img-fluid" />
                    </figure>
                    <div className="service-box-item-content">
                      <h4>App Development</h4>
                      <p>
                        Dolor repellendus temporibus autem
                        quibusdam officiis debitis rerum neces
                        aibus minima veniam.
                      </p>
                      <a href="#" data-toggle="modal" data-target="#app-development">Read More</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* end service section */}
    </>
  );
}

export default Services;
