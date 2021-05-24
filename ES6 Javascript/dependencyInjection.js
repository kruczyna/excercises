class Chickencoop {
  makeQuack() {
    this.chicken.quack();
  }
  makeFly() {
    this.chicken.fly();
  }
}

class Chicken {
  quack() {
    console.log('Quack!');
  }
  fly() {
    console.log('Flying!');
  }
}

const chickencoop = new Chickencoop();
const chicken = new Chicken();

chicken.quack(); /* ReferenceError: chicken is not defined if
the dependency injection in line 24 is not applied */
chickencoop.chicken = chicken;
chickencoop.makeFly();
chickencoop.makeQuack();
chicken.fly();
