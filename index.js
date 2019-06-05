const express = require('express')

const cohortRouter = require('./cohorts/cohorts_router')

const server = express();

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);

server.use('/api/cohorts', cohortRouter);