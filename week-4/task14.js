function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  // Creating new book objects
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
  
  console.log(book1);
  console.log(book2);