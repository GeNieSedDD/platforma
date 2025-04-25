// api/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err); // Логируем ошибку для отладки
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
  };
  
  module.exports = errorHandler;