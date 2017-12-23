import React, { Component } from 'react';
import {MainLayout, Helmet} from '../../components/';

export default class HomePage extends Component {
  render() {
    return (
      <MainLayout>
        <Helmet>
          <title>My site: Home page</title>
        </Helmet>

        <h2>Home Page</h2>
        
      </MainLayout>
    );
  }
}