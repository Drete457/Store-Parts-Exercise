/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/extensions */
const app = require('./app');

const server = app.listen(8081, () => {
    console.log(`Store API running on ${server.address().port}`);
});
