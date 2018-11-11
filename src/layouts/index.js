import React from 'react';
import '../assets/scss/main.scss';
import 'prismjs/themes/prism-solarizedlight.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import 'typeface-space-mono';
import 'typeface-spectral';

import Footer from '../components/Footer';

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading',
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className={`body ${this.state.loading}`}>
        <div id="wrapper">
          {children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Template;
