// Dependencies
const express = require('express');
const app = express();
const models = require('express-cassandra');

// ORM Model Directory
models.setDirectory(__dirname + '/models').bind({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: {port: 9042},
    keyspace: 'dr_map',
    queryOptions: {consistency: models.consistencies.one}
  },
  ormOptions: {
    defaultReplicationStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1
    },
    migration: 'safe'
  }
}, err => {
  if (err) throw err
});

// Server port
const port = 8080
app.listen(port, () => console.log(`Listening on port ${port}...`))
