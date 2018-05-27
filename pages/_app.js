import App, { Container } from 'next/app';
import React from 'react';
import { withRouter } from 'next/router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Root } from '@containers/root';
import Store from '@stores';

import 'isomorphic-unfetch';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    const data = ctx.query;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps,
      data,
    };
  }

  render() {
    const { Component, pageProps, data } = this.props;
    console.log('data', data);
    const store = Store(data);

    return (
      <Container>
        <Provider store={store}>
          <Root>
            <Component {...pageProps} data={data} />
          </Root>
        </Provider>
      </Container>
    );
  }
}

export default withRouter(MyApp);
