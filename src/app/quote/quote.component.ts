import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quoteDelete(deleteQuote: any, index: number) {
    if (deleteQuote) {
      let toDelete = confirm(`Are you sure you want to delete this quote by ${this.quotes[index].author}?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toggleDetails(index: number) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  most: number = 0
  current: number = 0
  count: number = 0

  highestScore() {
    this.most = 0
    this.current = 0

    for (this.count = 0; this.count < this.quotes.length; this.count++) {
      this.current = this.quotes[this.count].upvotes;
      if (this.current > this.most) { this.most = this.current }
    }
    return this.most
  }


  public quotes: Quote[] = [
    new Quote('You only live once, but if you do it right, once is enough.', 'Mae West', 'Samuel', new Date(2021, 5, 7)),
    new Quote('Dont be pushed around by the fears in your mind. Be led by the dreams in your heart.', 'Roy Text. Bennett', 'Frank', new Date(2021, 5, 12)),
    new Quote('Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.', 'Steve Maraboli', 'Stew', new Date(2021, 5, 23)),
    new Quote('Folks are usually about as happy as they make their minds up to be.', 'Abraham Lincoln', 'Robert', new Date(2021, 6, 15))
  ];

  addNewQuote(newQuote: Quote) {
    newQuote.date = new Date(newQuote.date);
    this.quotes.push(newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
