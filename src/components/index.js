import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-card';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    hoverable: PropTypes.bool,
    clickable: PropTypes.bool,
    shadowable: PropTypes.bool
  };

  static defaultProps = {
    hoverable: false,
    clickable: false,
    shadowable: true
  };

  render() {
    const { className, hoverable, clickable, shadowable, ...props } = this.props;
    return (
      <div
        className={cx({
          'is-hoverable': hoverable,
          'is-clickable': clickable,
          'is-shadowable': shadowable,
        }, CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
