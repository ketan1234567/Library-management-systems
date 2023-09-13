interface Book {
    id: any;
    book_name: string | null;
    author: string | null;
    price: string | null;
    category: string | null;
    isbn_number: string | null;
    data?: any; // Add 'data' as an optional property
  }