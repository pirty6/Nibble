'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CMSSidebar from '../components/Admin/CMSSidebar.jsx';

function mapStateToProps(state) {
  return {
    links:
    [
        {
          title: 'Dashboard',
          link: '/',
          icon: '/images/002-dashboard.svg',
        },
        {
          title: 'Reportes',
          link: '/',
          icon: '/images/001-graph.svg',
        },
        {
          title: 'Bitacora',
          link: '/',
          icon: '/images/003-newspaper.svg',
        },
        {
          title: 'Usuarios',
          link: '/',
          icon: '/images/004-user.svg',
        },
        {
          title: 'Libros',
          link: '/libreria',
          icon: '/images/006-open-book.svg',
        },
        {
          title: 'Mapa',
          link: '/',
          icon: '/images/005-map.svg',
        },
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CMSSidebar);
