import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { withRouter } from 'react-router-dom';
import styles from './style.css';

class Results extends Component {
  renderVenues = groups =>
    groups.map(group =>
      group.items.map((item) => {
        const venue = item.venue;
        const address = venue.location.formattedAddress.join(', ');
        return (
          <div className={styles.result}>
            <div className={styles.detail}>
              <h3 className={styles.resultName}>{venue.name}</h3>
              <p>{venue.contact.formattedPhone}</p>
              <p>{address}</p>
            </div>
          </div>
        );
      }),
    );

  render() {
    const { venue: { groups } } = this.props;
    if (isEmpty(groups)) {
      return null;
    }
    return <div className={styles.results}>{this.renderVenues(groups)}</div>;
  }
}

Results.propTypes = {
  venue: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ venue }) => ({ venue });

export default withRouter(connect(mapStateToProps, {})(Results));
