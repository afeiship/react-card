import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
const CLASS_NAME = 'react-card';

export default class ReactCard extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * If the card is active.
     */
    active: PropTypes.bool,
    /**
     * If the card is not enable.
     */
    disabled: PropTypes.bool,
    /**
     * If the card can hover and with :hover effect.
     */
    hoverable: PropTypes.bool,
    /**
     * If the card can click with :active effect.
     */
    clickable: PropTypes.bool,
    /**
     * If the card show with shadow.
     */
    shadowable: PropTypes.bool
  };

  static defaultProps = {
    shadowable: true
  };

  render() {
    const {
      className,
      active,
      disabled,
      hoverable,
      clickable,
      shadowable,
      ...props
    } = this.props;

    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(
          {
            'is-active': active,
            'is-disabled': disabled,
            'is-hoverable': hoverable,
            'is-clickable': clickable,
            'is-shadowable': shadowable
          },
          CLASS_NAME,
          className
        )}
        {...props}
      />
    );
  }
}
