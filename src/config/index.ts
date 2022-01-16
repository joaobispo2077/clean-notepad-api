const { NODE_ENV } = process.env;

const config = {
  global: {
    environment: NODE_ENV || 'development',
    isProduction: NODE_ENV === 'production',
    isDevelopment: NODE_ENV === 'development',
  },
};

export { config };
