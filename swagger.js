const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const sampleRoutes = require('./src/sample'); // 라우트 가져오기

const app = express();

// Swagger 설정
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API Docs',
      version: '1.0.0',
      description: 'API 문서 예제',
    },
    servers: [{ url: 'http://20.249.216.72:3010', description: 'Azure VM server' }],
  },
  apis: ['./routes/*.js'], // API 문서를 작성할 파일 경로
};

// Swagger 문서 생성
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 라우터 등록
app.use('/', sampleRoutes);

// 서버 실행
const PORT = 3010;
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on http://20.249.216.72:${PORT}`);
    console.log(`Swagger UI: http://20.249.216.72:${PORT}/api-docs`);
});