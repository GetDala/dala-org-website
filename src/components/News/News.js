import React, { Component } from 'react';
import Slider from 'react-slick';

// styles
import './News.css';

// images

// components

class News extends Component {

  render() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
        <div className="container">
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
        <Slider className="articles" {...settings}>
          <div className="article-slide">
            <div className="article-image"></div>
            <div className="article-details">
              <div className="article-source">Source</div>
              <h3 className="article-headline">Headline</h3>
              <p className="article-description">News Article Description</p>
              <a href="#!">Read Article</a>
            </div>
          </div>
          <div className="article-slide">
            <div className="article-image"></div>
            <div className="article-details">
              <div className="article-source">Source</div>
              <h3 className="article-headline">Headline</h3>
              <p className="article-description">News Article Description</p>
              <a href="#!">Read Article</a>
            </div>
          </div>
          <div className="article-slide">
            <div className="article-image"></div>
            <div className="article-details">
              <div className="article-source">Source</div>
              <h3 className="article-headline">Headline</h3>
              <p className="article-description">News Article Description</p>
              <a href="#!">Read Article</a>
            </div>
          </div>
          <div className="article-slide">
            <div className="article-image"></div>
            <div className="article-details">
              <div className="article-source">Source</div>
              <h3 className="article-headline">Headline</h3>
              <p className="article-description">News Article Description</p>
              <a href="#!">Read Article</a>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
}

export default News;