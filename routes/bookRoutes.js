const express = require('express');

const {
    getBookDatabyIdRoutes,
    getBooksRoutes,
    deleteBookRoutes,
    postBookRoutes,
    putBookRoutes
} = require('../service/bookService');

const router = express.Router();
router.use(express.json());

router.get('/', getBooksRoutes);
router.get('/:bookId', getBookDatabyIdRoutes);
router.post('/', postBookRoutes);
router.put('/:bookId', putBookRoutes);
router.delete('/:bookid', deleteBookRoutes);

module.exports = router;
