

class book {
    constructor(
        // Define Parameters:
        title,
        author,
        year,
        price,
        bookState
    ) {
        // Define Properties:
        this.title = title;
        this.author = author;
        this.year = year;
        this.price = price;
        this.bookState = bookState;
    }
    //Add function like normal functions:
    bookOpenState(state) {
        this.bookState = state;
    }
}

export default book;