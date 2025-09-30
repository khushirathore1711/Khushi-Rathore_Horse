class Animal {
  constructor(breed = "Human", name = "Nobody", language = "silence") {
    this.breed = breed;
    this.name = name;
    this.language = language;
  }

  talk() {
    print(this.language);
  }

  expressYourself() {
    print("Hello, I'm " + this.breed + " , I say " + this.language);
  }
}
