import React, { Component } from 'react';
import { Link } from 'react-router'
import { logout } from '../../AuthService';
class Sidebar extends Component {
cikisYap = () => {
logout();
}
  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className=" nav-title">
              Yönet
            </li>
<<<<<<< HEAD
               <li className="nav-item">
              <Link to={'/dashboard'} className="nav-link" activeClassName="active">
              <i className="icon-speedometer"></i> Dashboard</Link>
                </li>
=======
>>>>>>> origin/master
             <li className={this.activeRoute("/chanels")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Kanallar</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
              <Link to={'/dashboard/chanels/list'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Kanal Listesi</Link>
                </li>
                <li className="nav-item">
              <Link to={'/dashboard/chanels/add'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Kanal Ekle</Link>
                </li>
              </ul>
            </li>
             <li className={this.activeRoute("/cats")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Kategoriler</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
              <Link to={'/dashboard/cats/list'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Kategori Listesi</Link>
                </li>
                <li className="nav-item">
              <Link to={'/dashboard/cats/add'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Kategori Ekle</Link>
                </li>
              </ul>
            </li>
             <li className={this.activeRoute("/options/site")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-star"></i> Ayarlar</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
              <Link to={'/dashboard/options/site'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Site Ayarları</Link>
                </li>
              </ul>
            </li>
               <li className="nav-item">
         <a className="nav-link" href="#" onClick={this.cikisYap.bind(this)}><i className="icon-star"></i> Çıkış</a>

                </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
