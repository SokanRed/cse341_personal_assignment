const swaggerAutogen = require('swagger-autogen)')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'localhost:8080',
    schemes: ['http'],
};

const outputFile = './swagger';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);