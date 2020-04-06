// import * as healthCheckRoute from './healthcheck.route'
// import * as collectionNameRoute from './collectionname.route'
// import * as financeRoute from './finance.route'
import userRoute from './user.route'
import bookRoute from './book.route'
import orderRoute from './order.route'

const routes = [
  // ...healthCheckRoute,
  // ...collectionNameRoute,
  // ...financeRoute,
  ...userRoute,
  ...bookRoute,
  ...orderRoute
];

export default routes;
