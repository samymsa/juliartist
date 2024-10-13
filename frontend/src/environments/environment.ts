export const environment = {
  production: false,
  api: {
    products: '/assets/mocks/products.json',
  },
  backendAuth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    updateAccount: '/api/auth/update',
  },
  backendProducts: '/api/products',
  backendCollections: '/api/products/collections',
  backendCreditCards: '/api/credit-cards',
  backendCheckout: '/api/checkout',
};
