export default {
  env: {
    dev: (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') || false,
    test: (!process.env.NODE_ENV || process.env.NODE_ENV === 'test') || false,
    stag: (!process.env.NODE_ENV || process.env.NODE_ENV === 'staging') || false,
    prod: (process.env.NODE_ENV && process.env.NODE_ENV === 'production') || false
  }
}
