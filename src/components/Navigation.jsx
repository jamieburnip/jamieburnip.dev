import React, { Component } from "react";
import { Link } from "gatsby";
// import floppy from '../images/floppy.png'
// import sun from '../images/sun.svg'
// import moon from '../images/moon.svg'
// import kofi from '../../content/thumbnails/kofi.png'

export default class Navigation extends Component {
  state = {
    scrolled: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.navOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navOnScroll);
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    const { menuLinks } = this.props;

    return (
      <nav className={scrolled ? "nav scroll" : "nav"}>
        <div className="nav-container container">
          <div class="row">
            <div class="one-half column brand">
              <Link to="/">
                <span className="text">made by jamie.dev</span>
              </Link>
            </div>
            <div class="one-half column links">
              {menuLinks.map(link => (
                <Link key={link.name} to={link.link} activeClassName="active">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
