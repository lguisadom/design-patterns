interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  public operation(): string {
    return 'Result of the ConcreteProduct1';
  }
}

class ConcreteProduct2 implements Product {
  public operation(): string {
    return 'Result of the ConcreteProduct2';
  }
}


abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }

}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}


function main() {
  let creator1: Creator = new ConcreteCreator1();
  let creator2: Creator = new ConcreteCreator2();
  
  console.log(creator1.someOperation());
  console.log(creator2.someOperation());
}

main();