class Rabbit extends Animal {
    stop() {
      setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
    }
  }