class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    };

    fix(){
        this.state *= 1.5;
    };

    set state(value){
        if(value < 0){
            this._state = 0;
        } else if(value > 100){
            this._state = 100;
        } else {
            this._state = value;
        };
    };

    get state(){
        return this._state;
    };
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    };
};

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount, author);
        this.type = "novel";
    };
};

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount, author);
        this.type = "detective";
    };
};

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    };

    addBook(book){
        if(book.state > 30) {
            this.books.push(book);
        };
    };

    findBookBy(type, value){
        const results = this.books.filter(book => book.hasOwnProperty(type) && book[type] === value);
        if(results.length === 0) return null;
        return results.length === 1 ? results[0] : results;
    };

    giveBookByName(bookName){
        const index = this.books.findIndex(book => book.name === bookName);
        if(index === -1){
            return null
        };
        return this.books.splice(index, 1)[0];
    };
};

class Student {
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark(mark, subject){
        if (mark < 2 || mark > 5){
            return;
        };
        if (!this.marks.hasOwnProperty([subject])){
            this.marks[subject] = [];
        };
        this.marks[subject].push(mark);
    };

    getAverageBySubject(subject){
        if (!this.marks.hasOwnProperty([subject])){
            return 0;
        };
        let marksSum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        return marksSum / this.marks[subject].length;
    };

    getAverage(){
        let keys = Object.keys(this.marks);
        if (keys.length === 0) {
            return 0;
        }
        let sum = keys.reduce((acc, key) => {
            return acc + this.getAverageBySubject(key);
        }, 0);
        return sum / keys.length;
    };
};

