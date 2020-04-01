const {
    getBookDataById,
    getBooks,
    postBook,
    deleteBook,
    putBook
} = require('../constoller/bookController');

const mongoose = require('mongoose')



// eslint-disable-next-line consistent-return
function getBookDatabyIdRoutes(req, res, next) {
    const bookId = req.params.bookId;
    if (!mongoose.Types.ObjectId.isValid(bookId))
        next({

            message: { result: 'id not found ' },
            status: 404
        });

    getBookDataById(bookId)
        .then(book => {
            if (book === null) {
                next({

                    message: { result: 'book is not available ' },
                    status: 404
                });
            } else {
                res.send(book);
            }
        })
        .catch(err => res.send(err.message, err.status));
}

function getBooksRoutes(req, res, next) {

    getBooks(req.query)
        .then(book => {
            if (book.length === 0) {
                next({
                    message: { success: false, result: 'no data' },
                    status: 404
                });
            } else {
                res.send(book);
            }
        })
        .catch(err => res.send(err.message, err.status));
}

// eslint-disable-next-line consistent-return
function deleteBookRoutes(req, res, next) {
    const bookId = req.params.bookId;

    deleteBook(bookId).then((book) => {
        if (book.deletedCount !== 0) {
            res.send({ success: true });
        }
        else {
            res.status(404).send({ success: false })
        }
    })
}

// eslint-disable-next-line consistent-return
function postBookRoutes(req, res, next) {

    postBook(req.body).then(book => {
        res.send(book);
    });

}

// eslint-disable-next-line consistent-return
function putBookRoutes(req, res, next) {

    const bookId = req.params.bookId;


    putBook(bookId, req.body).then(resultObj => {
        if (resultObj.ok === 1) {
            res.send({ result: 'success' });
        } else {
            next({
                status: 404,
                message: 'update fail bookDd does not exist'
            });
        }
    });

}

module.exports = {
    getBookDatabyIdRoutes,
    getBooksRoutes,
    deleteBookRoutes,
    postBookRoutes,
    putBookRoutes
};
