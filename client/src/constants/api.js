const ROUTES =
  process.env.NODE_ENV === 'development'
    ? {
      BaseURL: 'http://localhost:3001',
    }
    : {
      BaseURL: ' https://venuehunt.herokuapp.com',
    };

export { ROUTES }; // eslint-disable-line import/prefer-default-export
