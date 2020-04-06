## Hapi project template
Node.js Hapi project template with MongoDB integration

# Prepare for Database
1. Run docker service
2. Run: mongodb-start.sh to start local MongoDB server
3. In a separate terminal window, run `mongo`, the MongoDB client.
4. If this is the first time you set up a replica set, execute the command `rs.initiate()`.
5. Create the database `databaseName` (`use databaseName`) and the collection `collectionName` (`db.createCollection('collectionName')`).

# Installation
npm install

# Start project
Run: npm start
Or: npm run dev

# Documentation
http://localhost:3000/documentation
