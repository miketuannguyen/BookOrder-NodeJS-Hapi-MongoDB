// const {
//   collectionNameCreateController,
//   collectionNameListController,
//   collectionNameDeleteController
// } = require('./../controller/collectionname.controller');
// const basicResponse = require('./../response');
// const {
//   validations,
//   deleteValidation
// } = require('./../validation/collectionname.validation');

// const collectionNameRoute = [
//   {
//     method: 'GET',
//     path: '/collection-name',
//     config: {
//       tags: ['api'],
//       description: 'Get records in CollectionName',
//       plugins: {
//         'hapi-swagger': {
//           responses: basicResponse
//         }
//       }
//     },
//     handler: collectionNameListController
//   },
//   {
//     method: 'POST',
//     path: '/collection-name',
//     config: {
//       tags: ['api'],
//       description: 'Create new record in CollectionName',
//       validate: validations.name,
//       plugins: {
//         'hapi-swagger': {
//           payloadType: 'form',
//           responses: basicResponse
//         }
//       }
//     },
//     handler: collectionNameCreateController
//   },
//   {
//     method: 'DELETE',
//     path: '/collection-name/{id}',
//     config: {
//       tags: ['api'],
//       description: 'Delete record by id in CollectionName',
//       validate: deleteValidation.id,
//       plugins: {
//         'hapi-swagger': {
//           responses: basicResponse
//         }
//       }
//     },
//     handler: collectionNameDeleteController
//   }
// ];

// module.exports = collectionNameRoute;
