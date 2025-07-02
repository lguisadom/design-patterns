/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

import { COLORS } from "../../../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de Pollo");
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de Res");
  }
}

class Water implements Drink {
  pour(): void {
    console.log("Sirviendo un vaso de agua");
  }
}

class Soda implements Drink {
  pour(): void {
    console.log("Sirviendo un vaso de gaseosa");
  }
}

interface ResturantFactory {
  createHamburger(): Hamburger;
  createDrink(): Drink;
}

class FastFoodResturantFactory implements ResturantFactory {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }
  createDrink(): Drink {
    return new Soda();
  }  
}

class HealthyRestaurantFactory implements ResturantFactory {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
  createDrink(): Drink {
    return new Water();
  }
}

function main(factory: ResturantFactory) {
  const hamburger: Hamburger = factory.createHamburger();
  const drink: Drink = factory.createDrink();

  hamburger.prepare();
  drink.pour();
}

console.log("\n%cPedido del menú regular: ", COLORS.green);
main(new FastFoodResturantFactory());

console.log("\n%cPedido del menú saludable: ", COLORS.green);
main(new HealthyRestaurantFactory());