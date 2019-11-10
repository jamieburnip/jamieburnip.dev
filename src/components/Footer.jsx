import React, { Component } from 'react'
import { Link } from 'gatsby'
import netlify from '../../content/images/netlify.png'
import gatsby from '../../content/images/gatsby.png'
import github from '../../content/images/github.png'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div class="row">
          <div class="one-half column brand">
            <a href="https://www.madebyjamie.dev/rss.xml" target="_blank" rel="noopener noreferrer">
              RSS
            </a>
          </div>
          <div class="one-half column links">    
            {/* <a href="https://www.shopify.com/?ref=jamieburnip" title="Shopify">
              <img
                src={github}
                target="_blank"
                className="footer-img"
                alt="Shopify Partner"
              />
            </a> */}
            <a href="https://github.com/jamieburnip" title="Open-source on GitHub">
              <img
                src={github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-img"
                alt="GitHub"
              />
            </a>
            <a href="https://www.netlify.com/" title="Hosted by Netlify">
              <img
                src={netlify}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-img"
                alt="GitHub"
              />
            </a>
            <a href="https://www.gatsbyjs.org/" title="Built with Gatsby">
              <img
                src={gatsby}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-img"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}