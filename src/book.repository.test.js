const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn(),
            push : jest.fn(),
            write : jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.push.mockReturnValue(dbMock);

        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Book repository Total Count', function () {

    test('Count All book', () => {

        let dbMock = {
            get : jest.fn(),
            size : jest.fn(),
            value : jest.fn()
        };

        dbMock.get.mockReturnValue(dbMock);
        dbMock.size.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue(9000);

        const repository = new BookRepository(dbMock);
        expect(repository.getTotalCount()).toBe(9000);
        expect(dbMock.get.mock.calls.length).toBe(1);
        expect(dbMock.value.mock.calls.length).toBe(1);
        expect(dbMock.size.mock.calls.length).toBe(1);

    });
});
