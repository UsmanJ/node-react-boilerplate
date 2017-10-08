import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Results from '../Results';
import { getVenues, updateProperty } from '../../state/actions/venueActions';
import styles from './style.css';

class App extends Component {
  handleChange = (field, value) => {
    this.props.updateProperty(field, value);
  };

  render() {
    const { venue: { searchTerm } } = this.props;
    return (
      <div className="container">
        <h1 className={styles.title}>Venue Hunt</h1>
        <div className={styles.contentWrapper}>
          <p className={styles.description}>Where would you like to search for a venue?</p>
          <input
            className={styles.locationInput}
            type="text"
            placeholder="Enter a location"
            value={searchTerm}
            onChange={({ target: { value } }) => this.handleChange('searchTerm', value)}
          />
          <button className={styles.searchButton} onClick={() => this.props.getVenues(searchTerm)}>
            Get Venues
          </button>
        </div>
        <Results />
      </div>
    );
  }
}

App.propTypes = {
  getVenues: PropTypes.func.isRequired,
  updateProperty: PropTypes.func.isRequired,
  venue: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ venue }) => ({ venue });
const mapDispatchToProps = {
  getVenues,
  updateProperty,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
