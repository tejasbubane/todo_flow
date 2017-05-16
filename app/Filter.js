// @flow

import React from 'react';
import type { FilterType } from './typedefs';

export default class Filter extends React.Component {
  props: {
    changeFilter: (FilterType) => void
  }

  render() {
    return(
      <div>
        <a href="#" onClick={() => this.props.changeFilter("SHOW_ALL")}>Show All</a>&middot;
        <a href="#" onClick={() => this.props.changeFilter("COMPLETED")}>Completed</a>&middot;
        <a href="#" onClick={() => this.props.changeFilter("PENDING")}>Pending</a>
      </div>
    )
  }
}
