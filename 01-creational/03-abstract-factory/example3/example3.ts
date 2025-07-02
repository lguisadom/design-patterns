// https://medium.com/@phdmeyildiz/abstract-factory-pattern-in-typescript-8c3c5b71206d

// Step 1: Define Abstract Product and Factory Interfaces
// Abstract Products
interface Button {
  click(): void;
}

interface Panel {
  display(): void;
}

// Abstract Factory
interface UIAbstractFactory {
  createButton(): Button;
  createPanel(): Panel;
}

// Step 2: Implements Concrete Products
// Concrete Product: Dark Mode
class DarkButton implements Button {
  click(): void {
    console.log("Clicked a dark button!");
  }
}

class DarkPanel implements Panel {
  display(): void {
    console.log("Displaying a dark panel.");
  }
}

// Concrete Product: Ligh Mode
class LigthButton implements Button {
  click(): void {
    console.log("Click a light button!");
  }
}

class LightPanel implements Panel {
  display(): void {
    console.log("Displaying a light panel");
  }
}

// Step 3: Implement Concrete Factories
class DarkModeFactory implements UIAbstractFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createPanel(): Panel {
    return new DarkPanel();
  }
}

class LightModeFactory implements UIAbstractFactory {
  createButton(): Button {
    return new LigthButton();
  }
  createPanel(): Panel {
    return new LightPanel();
  }
}

// Step 4: Use the Abstract Factory Pattern
function main() {
  const factory: UIAbstractFactory = new DarkModeFactory();
  const button: Button = factory.createButton();
  button.click();

  const panel: Panel = factory.createPanel();
  panel.display();
}

main();