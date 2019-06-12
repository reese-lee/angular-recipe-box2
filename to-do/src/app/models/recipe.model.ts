export class Recipe {
  public currentlyEditing: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string, public rating: number) { }
}
