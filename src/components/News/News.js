import React, {Component} from 'react';
import Slider from 'react-slick';

// styles
import './News.css';

// images
import DefaultImage from '../Hero/images/headerBG1440.jpg';

// components

class News extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.openLink = this.openLink.bind(this);
  }

  next() {
    this.slider.slickNext()
  }

  previous() {
    this.slider.slickPrev()
  }

  openLink(url) {
    window.open(url, "_blank");
  }

  render() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: false,
        lazyLoad: true,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1680,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      }
    ;
    return (
      <section id="News">
        <div className="container is-fluid slider-controls">
          <div className="slider-arrow left is-flex">
            <button onClick={this.previous}>
              <span className="chevron left"></span>
            </button>
            <span className="slider-arrow-label">Prev</span>
          </div>
          <div className="slider-arrow right is-flex">
            <span className="slider-arrow-label">Next</span>
            <button onClick={this.next}>
              <span className="chevron right"></span>
            </button>
          </div>
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <header className="section-header has-text-centered">
                <h2 className="section-title">
                  In The News
                </h2>
              </header>
            </div>
          </div>
        </div>
        <Slider className="articles" {...settings} ref={c => this.slider = c}>
          <div className="article-slide" onClick={() => {this.openLink('https://www.cnbcafrica.com/videos/2018/02/22/bitcoin-is-a-victim-of-its-own-success-wala-ceo/')}}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://cdn.cnbcafrica.com/wp-content/uploads/2018/02/22170245/1571595826001_5738532684001_5738516037001-vs-356x220.jpeg'}}></div>
            <div className="article-details">
              <div className="article-source">CNBC Africa</div>
              <h3 className="article-headline">Bitcoin is a victim of its own success – Wala CEO</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://www.cnbcafrica.com/videos/2018/02/22/bitcoin-is-a-victim-of-its-own-success-wala-ceo/">Read
                Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('https://www.cnbcafrica.com/apo/2017/12/07/can-cryptocurrencies-reduce-global-poverty/')}}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://cdn.cnbcafrica.com/wp-content/uploads/2017/10/09155553/apo_logo-768x461.png'}}></div>
            <div className="article-details">
              <div className="article-source">CNBC Africa</div>
              <h3 className="article-headline">Can cryptocurrencies reduce global poverty?</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://www.cnbcafrica.com/apo/2017/12/07/can-cryptocurrencies-reduce-global-poverty/">Read
                Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('https://www.huffingtonpost.com/entry/can-blockchain-solve-the-prosperity-paradox_us_59edfa93e4b092f9f24193d2')}}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://img.huffingtonpost.com/asset/59edfb2714000028008c92c1.jpg?ops=scalefit_820_noupscale)'}}></div>
            <div className="article-details">
              <div className="article-source">Huffington Post</div>
              <h3 className="article-headline">Can Blockchain Solve The Prosperity Paradox?</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://www.huffingtonpost.com/entry/can-blockchain-solve-the-prosperity-paradox_us_59edfa93e4b092f9f24193d2">Read
                Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('https://www.coinspeaker.com/2017/10/04/newtown-partners-invests-blockchain-start-wala-solve-financial-exclusion-affecting-3-5bn-people/')}}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://www.coinspeaker.com/wp-content/themes/cs/images/default/bitcoin-symbol-05.jpg)'}}></div>
            <div className="article-details">
              <div className="article-source">Coinspeaker</div>
              <h3 className="article-headline">Newtown Partners Invests in Blockchain Start-Up Wala, To Solve Financial
                Exclusion Affecting 3.5bn People</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://www.coinspeaker.com/2017/10/04/newtown-partners-invests-blockchain-start-wala-solve-financial-exclusion-affecting-3-5bn-people/">Read
                Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('https://coinreviews.io/tricia-martinez-wala/')}}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://coinreviews.io/wp-content/uploads/2017/10/tricia-martinez-wala.png'}}></div>
            <div className="article-details">
              <div className="article-source">Coin Reviews</div>
              <h3 className="article-headline">Tricia Martinez – Wala, Founder & Chief Executive Officer</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank" href="https://coinreviews.io/tricia-martinez-wala/">Read Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('https://ventureburn.com/2017/10/wala-investment-newtown-partners/')}}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://ventureburn.com/wp-content/uploads/2017/10/Walateam1.jpg'}}></div>
            <div className="article-details">
              <div className="article-source">Ventureburn</div>
              <h3 className="article-headline">Fintech startup Wala secures equity investment from Newtown Partners</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank" href="https://ventureburn.com/2017/10/wala-investment-newtown-partners/">Read Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('http://disrupt-africa.com/2017/11/sas-wala-partners-veridium-to-pilot-biometric-banking-authentication/')}}>
            <div className="article-image"
                 style={{backgroundImage: 'url(http://disrupt-africa.com/wp-content/uploads/2017/10/Wala-1-702x336.jpg'}}></div>
            <div className="article-details">
              <div className="article-source">Disrupt Africa</div>
              <h3 className="article-headline">SA’s Wala partners Veridium to pilot biometric banking authentication</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank" href="http://disrupt-africa.com/2017/11/sas-wala-partners-veridium-to-pilot-biometric-banking-authentication/">Read Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('https://www.finextra.com/pressarticle/71234/m-vendr-to-accept-wala-digital-currency-at-mpos')}}>
            <div className="article-image" style={{backgroundImage: 'url(http://mvendr.com/img/home.png)'}}></div>
            <div className="article-details">
              <div className="article-source">Finextra</div>
              <h3 className="article-headline">M-vendr to accept Wala digital currency at mPOS</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank" href="https://www.finextra.com/pressarticle/71234/m-vendr-to-accept-wala-digital-currency-at-mpos">Read Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('https://www.fincaimpact.com/news-insights/finca-and-wala-offer-innovative-mobile-financial-services/')}}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://www.fincaimpact.com/wp-content/uploads/2017/10/mobile-Africa.jpg'}}></div>
            <div className="article-details">
              <div className="article-source">Finca Impact Finance</div>
              <h3 className="article-headline">Universal and Affordable Financial Services are Possible – Only Through Collaboration</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank" href="https://www.fincaimpact.com/news-insights/finca-and-wala-offer-innovative-mobile-financial-services/">Read Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('https://ventureburn.com/2017/10/wala-financial-exclusion-emerging-markets/')}}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://ventureburn.com/wp-content/uploads/2017/10/wala-ceo-tricia-martinez.jpg'}}></div>
            <div className="article-details">
              <div className="article-source">Ventureburn</div>
              <h3 className="article-headline">Q&A: Wala CEO on tackling financial exclusion in emerging markets</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank" href="https://ventureburn.com/2017/10/wala-financial-exclusion-emerging-markets/">Read Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {this.openLink('https://www.investitin.com/wala/')}}>
            <div className="article-image"
                 style={{backgroundImage: `url(${DefaultImage})`}}></div>
            <div className="article-details">
              <div className="article-source">InvestItIn</div>
              <h3 className="article-headline">Dala: A social model to bank the unbanked</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank" href="https://www.investitin.com/wala/">Read Article</a>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}

export default News;