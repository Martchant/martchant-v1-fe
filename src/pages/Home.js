import React from "react";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

import Collapsible from "../components/Collapsible";

import Hero from "../assets/hero-img.jpg";
import WhyLeft from "../assets/why-left.jpg";
import HappyWoman from "../assets/happy-market-woman.jpg";

import "./Home.scss";

function Home() {
  // const [auth, setAuth] = useState({});

  return (
    <div>
      <section className="hero">
        <div className="left-col">
          <div className="hero-content">
            <p className="subhead">SEAMLESS WAY TO</p>
            <h1>Start selling online now</h1>

            <p>
              Sell your products online with your own ecommerce website. we
              allow you to build beautiful and functional store in minutes and
              sell without barrier. It is very easy and faster
            </p>

            <div className="hero-cta">
              <form action="#">
                <input type="email" placeholder="example@email.com" />
                <input type="submit" value="Get started" />
              </form>
            </div>
          </div>
        </div>
        <img src={Hero} className="hero-img" alt="Illustration" />
      </section>
      <section className="how-it-works">
        <div className="container">
          <h2>Your Online store is just a clicks away</h2>

          <div className="d-flex">
            <div className="how-item">
              <p className="how-title">Create an account</p>
              <p className="how-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                ratione distinctio quia maxime quibusdam! ipsum dolor sit amet.
              </p>
            </div>
            <div className="how-item">
              <p className="how-title">Opt-In for a store</p>
              <p className="how-body">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy.
              </p>
            </div>
            <div className="how-item">
              <p className="how-title">You are all setup</p>
              <p className="how-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                ratione distinctio quia maxime quibusdam! Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="why-us">
        <div className="d-flex">
          <img src={WhyLeft} alt="left img" className="left-img-1" />
          <div className="right-col">
            <div className="content">
              <h2>Selling online has never been easier</h2>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy.
              </p>
              <p>
                We have reached a wide number of small buisness owners and our
                goal is to impact small businessess globally.
              </p>
              <ul className="why-list">
                <li>Easily sync and sell across different platform</li>
                <li>Grow faster with built in easy to use marketing tools</li>
                <li>Manage simply from a single dashboard</li>
                <li>Track your product visits and purchases.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="d-flex">
          <div className="left-col">
            <div className="content">
              <h2>Selling online has never been easier</h2>
              <p>
                You no longer have to worry about cumbersome delivery set up, or
                payments with Flutterwave Store, we have sorted it for you
              </p>

              <div className="d-flex">
                <div className="feat-item">
                  <p className="title">Mobile responsive</p>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews.
                  </p>
                </div>
                <div className="feat-item">
                  <p className="title">No coding required</p>
                  <p>
                    Leverage agile frameworks to provide a robust synopsis for
                    high level overviews.
                  </p>
                </div>
              </div>
              <div className="feat-item">
                <p className="title">Safe and fast delivery option</p>
                <p>
                  Self deliver or No longer have to worry about difficulties in
                  logistics setup or safe secure delivery to your customers. We
                  have partnered with the very best in the industry to ensure
                  you focus on your business while our partners ease your
                  business processes.
                </p>
              </div>
              <div className="feat-item">
                <p className="title">
                  Reach more people with Multiple payment method
                </p>
                <p>
                  At the end of the day, going forward, a new normal that has
                  evolved from generation X is on the runway heading towards a
                  streamlined cloud solution.
                </p>

                <div className="d-flex payment-options">
                  <ul>
                    <li>USSD</li>
                    <li>Credit / Debit Card</li>
                  </ul>
                  <ul>
                    <li>POS</li>
                    <li>Bank Transfer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <img src={HappyWoman} alt="right img" className="right-img-1" />
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>

        {/* <OwlCarousel className="owl-theme" loop margin={10} items={1} nav> */}
        <div class="item">
          <div class="client-desc client-mt-50 testimonial__text">
            <p class="text-center">
              I have been using this app for three months now and i must
              confess, it has really changed the way and see and manage my
              businesses, assistants and customers. The analytics feature gets
              me the most. I never knew running multiple business could be this
              easy
            </p>

            <h4>Angel Collins</h4>
          </div>
        </div>
        <div class="item">
          <div class="client-desc client-mt-50 testimonial__text">
            <p class="text-center">
              I have been using this app for three months now and i must
              confess, it has really changed the way and see and manage my
              businesses, assistants and customers. The analytics feature gets
              me the most. I never knew running multiple business could be this
              easy
            </p>

            <h4>Angel Collins</h4>
          </div>
        </div>
        <div class="item">
          <div class="client-desc client-mt-50 testimonial__text">
            <p class="text-center">
              I have been using this app for three months now and i must
              confess, it has really changed the way and see and manage my
              businesses, assistants and customers. The analytics feature gets
              me the most. I never knew running multiple business could be this
              easy
            </p>

            <h4>Angel Collins</h4>
          </div>
        </div>
        {/* </OwlCarousel> */}
      </section>
      <section className="faqs">
        <h2>FAQs</h2>

        <ul className="faqs-list">
          <li>
            <Collapsible summary="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.">
              <p>
                Override the digital divide with additional clickthroughs from
                DevOps. Nanotechnology immersion along the information highway
                will close the loop on focusing solely on the bottom line.
              </p>
            </Collapsible>
          </li>
          <li>
            <Collapsible summary="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.">
              <p>
                Override the digital divide with additional clickthroughs from
                DevOps. Nanotechnology immersion along the information highway
                will close the loop on focusing solely on the bottom line.
              </p>
            </Collapsible>
          </li>
          <li>
            <Collapsible summary="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.">
              <p>
                Override the digital divide with additional clickthroughs from
                DevOps. Nanotechnology immersion along the information highway
                will close the loop on focusing solely on the bottom line.
              </p>
              <ul>
                <li>
                  Immersion along the information highway will close the loop on
                  focusing solely on the bottom line.
                </li>
                <li>
                  Immersion along the information highway will close the loop on
                  focusing solely on the bottom line.
                </li>
                <li>
                  Immersion along the information highway will close the loop on
                  focusing solely on the bottom line.
                </li>
              </ul>
            </Collapsible>
          </li>
          <li>
            <Collapsible summary="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.">
              <p>Super cool!</p>
            </Collapsible>
          </li>
        </ul>
      </section>
      <section className="banner">
        <h2>Sell more online</h2>

        <p>
          Create a free account with us and start selling online with Martchant
        </p>

        <button>Get started</button>
      </section>
    </div>
  );
}

export default Home;
