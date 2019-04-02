const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);

repository.save({
    id: 10,
    name: "test"
})

console.log(repository.getTotalCount());

console.log(repository.getTotalPrice());