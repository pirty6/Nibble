
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CMSSidebar from '../components/Admin/CMSSidebar.jsx';

function mapStateToProps(state) {
  return {
    page: state.page.locationBeforeTransitions,
    location: state.page.locationBeforeTransitions,
    links:
    [
      {
        title: 'Dashboard',
        link: '/dashboard',
        icon: '/images/002-dashboard.svg',
        iconActive: '/images/002-dashboardWhite.svg',
      },
      {
        title: 'Usuarios',
        link: '/usuarios',
        icon: '/images/004-user.svg',
        iconActive: '/images/004-userWhite.svg',
      },
      {
        title: 'Roles',
        link: '/roles',
        icon: '/images/hierarchical-structure.svg',
        iconActive: '/images/hierarchical-structureWhite.svg',
      },
      {
        title: 'Llaves',
        link: '/llaves',
        icon: '/images/002-key.svg',
        iconActive: '/images/002-keyWhite.svg',
      },
      {
        title: 'Libros',
        link: '/libreria',
        icon: '/images/006-open-book.svg',
        iconActive: '/images/006-open-bookWhite.svg',
      },
      {
        title: 'Secciones',
        link: '/sectores',
        icon: '/images/005-map.svg',
        iconActive: '/images/005-mapWhite.svg',
      },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CMSSidebar);
