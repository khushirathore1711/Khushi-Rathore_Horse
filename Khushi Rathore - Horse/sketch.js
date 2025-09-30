function setup() {
  createCanvas(400, 400);
  background(220);

  let myHorse = new Horse("Thunder");
  myHorse.talk();
  myHorse.expressYourself();
}
