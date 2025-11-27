'use strict';

const { createServer } = require('http');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer((req, res) => {
      handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) {
        console.error('Failed to start server:', err);
        process.exit(1);
      }

      console.log(`> Server ready on http://localhost:${port} (env: ${process.env.NODE_ENV || 'development'})`);
    });
  })
  .catch((err) => {
    console.error('Error during Next.js app preparation:', err);
    process.exit(1);
  });