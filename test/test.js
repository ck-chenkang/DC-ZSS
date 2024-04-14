var counter = 5;
var timer;

var decrement = function () {
  try {
    if (counter < 0) {
      clearInterval(timer);
      throw new Error('Invalid count');
    }
    console.log(counter);
    counter -= 1;
  } catch (error) {
    console.error(error);
  }
};

timer = setInterval(decrement, 1000);
