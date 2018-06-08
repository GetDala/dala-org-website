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

    const articles = [
      {
        url: 'https://www.youtube.com/watch?v=XUxBP0Nl3gw',
        thumbnail: 'https://i.ytimg.com/vi_webp/XUxBP0Nl3gw/maxresdefault.webp',
        title: 'TraderCobb Interviews Tricia Martinez @ Consensus Blockchain Week – New York',
        source: 'TraderCobb',
        date: 'May 2018',
        type: 'video'
      },
      {
        url: 'https://www.ethnews.com/wala-aims-to-start-a-financial-revolution-in-africa',
        thumbnail: 'https://cdn.ethnews.com/images/2048x1024/Starting-a-Financial-Revolution-in-Africa-05-12-2018-2048x1024.jpg',
        title: 'Wala Aims To Start A Financial Revolution In Africa',
        source: 'ETHNews',
        date: 'May 2018',
        type: 'article'
      },
      {
        url: 'https://www.coindesk.com/ethereum-summit-human-face-high-tech-future/',
        thumbnail: 'https://media.coindesk.com/uploads/2018/05/20180511_145308-860x430.jpg',
        title: 'At Ethereal Summit, A Human Face On A Blockchain Future',
        source: 'Coindesk',
        date: 'May 2018',
        type: 'article'
      },
      {
        url: 'https://www.iol.co.za/business-report/technology/watch-blockchain-fintech-wala-takes-on-africa-14880610',
        thumbnail: 'https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/2018/01/15/iol/686/620x349.jpg&operation=CROP&offset=0x0&resize=620x348',
        title: 'WATCH: Blockchain fintech Wala takes on Africa',
        source: 'BusinessReport',
        date: 'May 2018',
        type: 'article'
      },
      {
        url: 'https://www.techzim.co.zw/2018/05/wala-launches-in-zim-qa/',
        thumbnail: 'https://t3n9sm.c2.acecdn.net/wp-content/uploads/2018/05/Wala-team-e1525851369993.jpg',
        title: 'Q&A: Zero Transaction Fees. We Talk To The People Who Want To Make It Happen',
        source: 'Techzim',
        date: 'May 2018',
        type: 'article'
      },
      {
        url: 'http://blocktribune.com/african-farmers-benefit-from-cryptocurrency-solution-to-fertilizer-distribution-issues/',
        thumbnail: 'http://blocktribune.com/wp-content/uploads/2018/04/FullSizeRender-79-e1523035657351.jpg?x72637',
        title: 'African Farmers Benefit From Cryptocurrency Solution To Fertilizer Distribution Issues',
        source: 'BlockTribune',
        date: 'Apr 2018',
        type: 'article'
      },
      {
        url: 'https://www.financemagnates.com/cryptocurrency/news/terra-incognita-africas-crypto-boom-just-getting-started/',
        thumbnail: 'https://www.financemagnates.com/wp-content/uploads/2017/11/Africa.jpg',
        title: 'Terra Incognita: Africa’s Crypto Boom Is Just Getting Started',
        source: 'Finance Magnates',
        date: 'Mar 2018',
        type: 'article'
      },
      {
        url: 'http://bitcoinafrica.io/2018/03/20/cryptocurrencies-can-boost-financial-inclusion/',
        thumbnail: 'https://i2.wp.com/bitcoinafrica.io/wp-content/uploads/2018/03/batwa-895293_1280.jpg?w=1280',
        title: 'Cryptocurrencies Can Boost Financial Inclusion Experts Agree',
        source: 'BitcoinAfrica',
        date: 'Mar 2018',
        type: 'article'
      }
    ];

    const slides = articles.map((slide, idx) => {
      return(
        <div key={idx} className="article-slide" onClick={() => {
          this.openLink(slide.url)
        }}>
          <div className="article-image" style={{backgroundImage: `url(${slide.thumbnail})`}} />
          <div className="article-details">
            <div className="article-source">{slide.source} - {slide.date}</div>
            <h3 className="article-headline">{slide.title}</h3>
            <a rel="noopener noreferrer" className="article-link" target="_blank" href={slide.url}>{slide.type === 'article' ? 'Read Article' : 'Watch Video'}</a>
          </div>
        </div>
      );
    });

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
          {slides}
          <div className="article-slide" onClick={() => {
            this.openLink('https://www.facebook.com/FastCompany/videos/10155475899464077/')
          }}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://images.fastcompany.net/image/upload/v1480632834/fast-company-share-graphic.png'}}></div>
            <div className="article-details">
              <div className="article-source">Fast Company</div>
              <h3 className="article-headline">Interview with Wala CEO Tricia Martinez</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://www.facebook.com/FastCompany/videos/10155475899464077/">Watch Video</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {
            this.openLink('https://www.cnbcafrica.com/videos/2018/02/22/bitcoin-is-a-victim-of-its-own-success-wala-ceo/')
          }}>
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
          <div className="article-slide" onClick={() => {
            this.openLink('https://www.cnbcafrica.com/apo/2017/12/07/can-cryptocurrencies-reduce-global-poverty/')
          }}>
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
          <div className="article-slide" onClick={() => {
            this.openLink('https://www.huffingtonpost.com/entry/can-blockchain-solve-the-prosperity-paradox_us_59edfa93e4b092f9f24193d2')
          }}>
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
          <div className="article-slide" onClick={() => {
            this.openLink('https://www.coinspeaker.com/2017/10/04/newtown-partners-invests-blockchain-start-wala-solve-financial-exclusion-affecting-3-5bn-people/')
          }}>
            <div className="article-image"
                 style={{backgroundImage: `url(${DefaultImage})`}}></div>
            <div className="article-details">
              <div className="article-source">Coinspeaker</div>
              <h3 className="article-headline">Newtown Partners Invests in Blockchain Start-Up Wala, To Solve Financial
                Exclusion Affecting 3.5bn People</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://www.coinspeaker.com/2017/10/04/newtown-partners-invests-blockchain-start-wala-solve-financial-exclusion-affecting-3-5bn-people/">Read
                Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {
            this.openLink('https://coinreviews.io/tricia-martinez-wala/')
          }}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://coinreviews.io/wp-content/uploads/2017/10/tricia-martinez-wala.png'}}></div>
            <div className="article-details">
              <div className="article-source">Coin Reviews</div>
              <h3 className="article-headline">Tricia Martinez – Wala, Founder & Chief Executive Officer</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://coinreviews.io/tricia-martinez-wala/">Read Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {
            this.openLink('https://ventureburn.com/2017/10/wala-investment-newtown-partners/')
          }}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://ventureburn.com/wp-content/uploads/2017/10/Walateam1.jpg'}}></div>
            <div className="article-details">
              <div className="article-source">Ventureburn</div>
              <h3 className="article-headline">Fintech startup Wala secures equity investment from Newtown Partners</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://ventureburn.com/2017/10/wala-investment-newtown-partners/">Read Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {
            this.openLink('http://disrupt-africa.com/2017/11/sas-wala-partners-veridium-to-pilot-biometric-banking-authentication/')
          }}>
            <div className="article-image"
                 style={{backgroundImage: 'url(http://disrupt-africa.com/wp-content/uploads/2017/10/Wala-1-702x336.jpg'}}></div>
            <div className="article-details">
              <div className="article-source">Disrupt Africa</div>
              <h3 className="article-headline">SA’s Wala partners Veridium to pilot biometric banking
                authentication</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="http://disrupt-africa.com/2017/11/sas-wala-partners-veridium-to-pilot-biometric-banking-authentication/">Read
                Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {
            this.openLink('https://www.finextra.com/pressarticle/71234/m-vendr-to-accept-wala-digital-currency-at-mpos')
          }}>
            <div className="article-image" style={{backgroundImage: 'url(http://mvendr.com/img/home.png)'}}></div>
            <div className="article-details">
              <div className="article-source">Finextra</div>
              <h3 className="article-headline">M-vendr to accept Wala digital currency at mPOS</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://www.finextra.com/pressarticle/71234/m-vendr-to-accept-wala-digital-currency-at-mpos">Read
                Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {
            this.openLink('https://www.fincaimpact.com/news-insights/finca-and-wala-offer-innovative-mobile-financial-services/')
          }}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://www.fincaimpact.com/wp-content/uploads/2017/10/mobile-Africa.jpg'}}></div>
            <div className="article-details">
              <div className="article-source">Finca Impact Finance</div>
              <h3 className="article-headline">Universal and Affordable Financial Services are Possible – Only Through
                Collaboration</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://www.fincaimpact.com/news-insights/finca-and-wala-offer-innovative-mobile-financial-services/">Read
                Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {
            this.openLink('https://ventureburn.com/2017/10/wala-financial-exclusion-emerging-markets/')
          }}>
            <div className="article-image"
                 style={{backgroundImage: 'url(https://ventureburn.com/wp-content/uploads/2017/10/wala-ceo-tricia-martinez.jpg'}}></div>
            <div className="article-details">
              <div className="article-source">Ventureburn</div>
              <h3 className="article-headline">Q&A: Wala CEO on tackling financial exclusion in emerging markets</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://ventureburn.com/2017/10/wala-financial-exclusion-emerging-markets/">Read Article</a>
            </div>
          </div>
          <div className="article-slide" onClick={() => {
            this.openLink('https://www.investitin.com/wala/')
          }}>
            <div className="article-image"
                 style={{backgroundImage: `url(${DefaultImage})`}}></div>
            <div className="article-details">
              <div className="article-source">InvestItIn</div>
              <h3 className="article-headline">Dala: A social model to bank the unbanked</h3>
              <a rel="noopener noreferrer" className="article-link" target="_blank"
                 href="https://www.investitin.com/wala/">Read Article</a>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}

export default News;