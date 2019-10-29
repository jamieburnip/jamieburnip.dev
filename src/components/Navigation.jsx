import React, { Component } from 'react';
import { Link } from 'gatsby';
// import floppy from '../images/floppy.png'
// import sun from '../images/sun.svg'
// import moon from '../images/moon.svg'
// import kofi from '../../content/thumbnails/kofi.png'

export default class Navigation extends Component {
  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props

    return (
      <nav className={scrolled ? 'nav scroll' : 'nav'}>
        <div className="nav-container">
          <div className="brand">
            <Link to="/">
              <img src="https://www.fillmurray.com/30/20" className="favicon" alt="Floppy Diskette" />
              <span className="text">made by jamie</span>
            </Link>
          </div>
          <div className="links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}