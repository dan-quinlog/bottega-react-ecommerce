import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import AccountInformation from './account-info';
import PurchaseHistory from './purchase-history';

class Account extends Component {

  componentDidMount() {

    const headerLinks = [
      {
        _id: 0,
        title: 'shop',
        path: '/shop'
      },
      {
        _id: 1,
        title: 'logout',
        path: '/'
      },
    ]

    const navbarLinks = [
      {
        _id: 0,
        title: 'Purchase History',
        active: true,
        component: <PurchaseHistory />
      },
      {
        _id: 1,
        title: 'Account Information',
        active: false,
        component: <AccountInformation />
      }
    ]

    this.props.setHeaderLinks(headerLinks);
    this.props.setNavbarLinks(navbarLinks);
  }

  renderContent() {
    let jsx;
    if( this.props.navbarLinks ) {
      this.props.navbarLinks.forEach(link => {
        if(link.active) {
          jsx = link.component
        }
      })
    }

    return jsx;
  }
  
  render() {
    return (
      <div className='account'>
        {
          this.renderContent()
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { headerLinks, navbarLinks } = state.headerNavbar;
  return { headerLinks, navbarLinks }
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;