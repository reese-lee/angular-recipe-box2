import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'Recipes';
  currentTime = new Date
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task('Noodle Thing', 'INGREDIENTS Soba 6 ounces soba noodles or spaghetti noodles of choice 2 cups frozen organic edamame 10 ounces (about 3 cups) sugar snap peas or snow peas 6 medium-sized carrots, peeled ½ cup chopped fresh cilantro (about 2 handfuls) ¼ cup sesame seeds Ginger-sesame sauce ¼ cup reduced-sodium tamari or soy sauce 2 tablespoons quality peanut oil or extra-virgin olive oil 1 small lime, juiced 1 tablespoon toasted sesame oil 1 tablespoon honey or agave nectar 1 tablespoon white miso* 2 teaspoons freshly grated ginger 1 teaspoon chili garlic sauce or sriracha', 'Throw it all in a bowl and hope for the best'),
    new Task("Mac & Cheese", "INGREDIENTS 8 ounces whole-grain macaroni elbows 1 head of broccoli, florets cut into small bites (about 1 ½ to 2 cups), optional* 1 ½ tablespoons avocado oil or extra-virgin olive oil 1 small yellow onion, chopped (about 1 ½ cups) 1 cup peeled and grated russet potato (4 ounces, about 1 small or ½ medium potato), preferably organic 3 cloves garlic, pressed or minced ½ teaspoon garlic powder ½ teaspoon onion powder ½ teaspoon dry mustard powder ½ teaspoon fine sea salt, more to taste Small pinch of Frontier Co-op red pepper flakes ⅔ cup raw cashews** 1 cup water, more as necessary ¼ cup Frontier Co-op nutritional yeast  2 to 3 teaspoons apple cider vinegar or distilled white vinegar, to taste", "Cook noodle. Eat noodles"),
    new Task("Noodle Thing", "INGREDIENTS Soba 6 ounces soba noodles or spaghetti noodles of choice 2 cups frozen organic edamame 10 ounces (about 3 cups) sugar snap peas or snow peas 6 medium-sized carrots, peeled ½ cup chopped fresh cilantro (about 2 handfuls) ¼ cup sesame seeds Ginger-sesame sauce ¼ cup reduced-sodium tamari or soy sauce 2 tablespoons quality peanut oil or extra-virgin olive oil 1 small lime, juiced 1 tablespoon toasted sesame oil 1 tablespoon honey or agave nectar 1 tablespoon white miso* 2 teaspoons freshly grated ginger 1 teaspoon chili garlic sauce or sriracha", "Throw it all in a bowl and hope for the best"),
    new Task("Mac & Cheese", "INGREDIENTS 8 ounces whole-grain macaroni elbows 1 head of broccoli, florets cut into small bites (about 1 ½ to 2 cups), optional* 1 ½ tablespoons avocado oil or extra-virgin olive oil 1 small yellow onion, chopped (about 1 ½ cups) 1 cup peeled and grated russet potato (4 ounces, about 1 small or ½ medium potato), preferably organic 3 cloves garlic, pressed or minced ½ teaspoon garlic powder ½ teaspoon onion powder ½ teaspoon dry mustard powder ½ teaspoon fine sea salt, more to taste Small pinch of Frontier Co-op red pepper flakes ⅔ cup raw cashews** 1 cup water, more as necessary ¼ cup Frontier Co-op nutritional yeast  2 to 3 teaspoons apple cider vinegar or distilled white vinegar, to taste", "Cook noodle. Eat noodles")
  ];

}
