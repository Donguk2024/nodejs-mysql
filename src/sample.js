const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: "Hello World 반환"
 *     description: "간단한 Hello World API"
 *     responses:
 *       200:
 *         description: 성공적으로 응답됨
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, World!"
 */
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = router;
