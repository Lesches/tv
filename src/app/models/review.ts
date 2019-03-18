export class Review {
  // region Attributes
  author: number;
  rating: number;
  title: string;
  body: string;
  date: Date;
  // region Default Methods
  constructor(args?) {
    this.author = args.author;
    this.rating = args.rating;
    this.title = args.title;
    this.body = args.body;
    this.date = args.date;
  }
  // endregion
}
