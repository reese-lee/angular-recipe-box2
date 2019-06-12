export class Recipe {
  public haveTried: boolean = false;
  public currentlyEditing: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string, public rating: number) { }
}
