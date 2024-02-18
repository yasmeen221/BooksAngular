import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  // baseUrl: string = 'http://localhost:3005/books';
  baseUrl: string = 'https://api-mh97.onrender.com/books';

  constructor(public http: HttpClient) {}
  getAllBooks() {
    return this.http.get(this.baseUrl);
  }
  getBookById(id: any) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  addNewBook(book: any) {
    return this.http.post(this.baseUrl, book);
  }
  updateBook(id: any, book: any) {
    return this.http.put(`${this.baseUrl}/${id}`, book);
  }
  deleteBook(id: any) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
