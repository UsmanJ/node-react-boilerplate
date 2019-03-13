const ROUTES =
  process.env.NODE_ENV === 'development'
    ? {
      BaseURL: 'http://localhost:3001/api',
    }
    : {
      BaseURL: ' https://productionurl.com',
    };

export { ROUTES }; // eslint-disable-line import/prefer-default-export
