import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTariffs } from '../../state/actions/tariffActions';

class App extends Component {
  componentWillMount() {
    this.props.getTariffs();
  }

  hasDate = (tariff) => {
    if (tariff && tariff.end_date) {
      return tariff.end_date;
    }
    return null;
  };

  render() {
    const {
      tariff: { tariffs },
    } = this.props;

    return (
      <div className="container">
        <h1>Here are the tariffs:</h1>

        {tariffs.map(tariff => (
          <div key={tariff.id}>
            <t>{tariff.id}</t>
            <h1>{tariff.supplier_name} </h1>
            <t>{tariff.tariff_name}</t>
            <t>{tariff.type}</t>
            <t>{this.hasDate(tariff)}</t>
          </div>
        ))}
      </div>
    );
  }
}

App.propTypes = {
  getTariffs: PropTypes.func.isRequired,
  tariff: PropTypes.object.isRequired, // eslint-disable-line
};

// const mapStateToProps = ({ tariffs }) => ({ tariffs });
function mapStateToProps(state) {
  const { tariff } = state;
  return { tariff };
}

const mapDispatchToProps = {
  getTariffs,
};

App.defaultProps = {
  tariffs: [],
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
