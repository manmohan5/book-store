const book = require('../models/Book');

async function getBooks(options = {}) {
    try {
        return await book.find(options);

    } catch (error) {
        return error;
    }
}

async function getBookDataById(id) {


    try {
        const result = await book.findById(id);
        return result;
    } catch (error) {
        return error;
    }
}

async function deleteBook(id) {
    try {
        return await book.remove(id)
    } catch (error) {
        return error;
    }
}

async function putBook(id, bookObj) {
    try {
        return await book.updateOne({ _id: id }, { $set: bookObj })

    } catch (error) {
        return error;
    }
}

async function postBook(bookData) {
    try {
        const bk = new book(bookData)
        return await bk.save();
    } catch (error) {
        return error;
    }
}

module.exports = {
    getBookDataById,
    getBooks,
    postBook,
    deleteBook,
    putBook
};
