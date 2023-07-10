// Generated by CodiumAI

import { add } from "../../../../src/typescript/simple/add-function-limited";

/*
Code Analysis

Objective:
The objective of the 'add' function is to receive two numbers as input and return their sum, but only if both numbers are less than or equal to 10. If either number is greater than 10, the function throws an error.

Inputs:
- 'first': a number representing the first value to be added
- 'second': a number representing the second value to be added

Flow:
1. Check if either 'first' or 'second' is greater than 10
2. If either is greater than 10, throw an error
3. If both are less than or equal to 10, return the sum of 'first' and 'second'

Outputs:
- A number representing the sum of 'first' and 'second'

Additional aspects:
- The function has a type annotation for both input parameters and the return value
- The function throws an error if either input parameter is greater than 10
- The error message is 'Parameters too big'
- The function does not handle any other errors or exceptions
*/

describe("add_function", () => {
  // Tests that add function returns the correct sum of two positive numbers
  it("should return the correct sum of two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
    expect(add(5, 5)).toBe(10);
  });
  // Test an sich in Ordnung
  // Mehrere expect Statements mit der selben Äquivalenzklasse haben keinen Mehrwert.
  // 0 wäre eventuell sinnvoll (weil 0 === false), dann aber als eigener Testcase

  // Tests that add function returns the correct sum of two negative numbers
  it("should return the correct sum of two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-5, -5)).toBe(-10);
  });
  // Test an sich in Ordnung
  // Mehrere expect Statements mit der selben Äquivalenzklasse haben keinen Mehrwert.

  // Tests that add function returns the correct sum when adding zero to a number
  it("should return the correct sum when adding zero to a number", () => {
    expect(add(0, 5)).toBe(5);
    expect(add(-5, 0)).toBe(-5);
    expect(add(0, 0)).toBe(0);
  });
  // Test an sich i.O. weil 0 als Sonderfall getestet wird
  // Interessant: Selbes expect Statement wie im ersten Test
  // Wenn 0 als Sonderfall betrachtet wird, machen hier sogar alle 3 expects Sinn.
  // 0 macht Sinn, weil Blackbox. Bei Whitebox wäre es nicht sinnvoll

  // Tests that add function returns the correct sum of two decimal numbers
  it("should return the correct sum of two decimal numbers", () => {
    expect(add(2.5, 3.5)).toBe(6);
    expect(add(-2.5, -3.5)).toBe(-6);
  });
  // Test i.O.
  // interessant - vorher wurden +/- in separate Testfälle aufgeteilt. Jetzt hier in einem

  // Tests that add function throws an error when adding two numbers greater than 10
  it("should throw an error when adding two numbers greater than 10", () => {
    expect(() => add(11, 2)).toThrow("Parameters too big");
    expect(() => add(2, 11)).toThrow("Parameters too big");
    expect(() => add(11, 11)).toThrow("Parameters too big");
  });
  // Test i.O.
  // alle expects machen Sinn wegen Kombinatorik

  // Tests that add function returns NaN when adding a number and NaN
  it("should return NaN when adding a number and NaN", () => {
    expect(add(2, NaN)).toBeNaN();
    expect(add(NaN, 2)).toBeNaN();
  });
  // Test i.O.
  // Warum wird NaN nicht für beide Parameter geprüft?
});

//////////////////////////////////////////////////////////////// FAZIT ////////////////////////////////////////////////////////////////

/*
Auf den edge case NaN sind wir in der Testdesign Erstellung nicht gekommen.

Wir haben zwar null und undefined in Betracht gezogen, das wurde aber verworfen weil 
Typescript das ohnehin abfangen würde.

0 als Sonderfall haben wir auch nicht im Testdesign.

Bei 6 Tests wurden keine Grenzwerte genommen.

Wenn nur 6 Tests erstellt werden, könnten bevorzugt Grenzwerte genommen werden. War nicht der Fall.

Es ist gut, dass bei den 6 Testfällen Kombinatorik verwendet wurde.
*/

//Wir haben testweise weitere 2x3 Testfälle generieren lassen (insgesamt 12)

describe("add_function - Give me more tests x2", () => {
  /* 
  Tests that add function returns NaN when adding a number and undefined
  it('should return NaN when adding a number and undefined', () => {
      expect(add(5, undefined)).toBeNaN();
  }); 
  */

  /* 
  Test ist nicht lauffähig weil Typescript undefined nicht akzeptiert für number

  Tests that add function returns the correct sum when adding a number and null
  it('should return the correct sum when adding a number and null', () => {
      expect(add(5, null)).toBe(5);
  });
  Test ist nicht lauffähig weil Typescript null nicht akzeptiert für number
  */

  // Tests that add function returns the correct sum when adding a positive and a negative number
  it("should return the correct sum when adding a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  /*  
  Test i.O.
  Hätte man eig. schon bei den ersten 6 Tests erwartet
  Warum hier keine Kombinatorik? 
  */

  // Tests that add function returns the correct sum of two very large negative numbers
  it("should throw an error when parameters are too big", () => {
    expect(() => add(-100000000, -100000000)).toThrow("Parameters too big");
  });
  //Test ist falsch, Funktion wirft keinen Fehler

  // Tests that add function returns the correct sum of two very small decimal numbers
  it("should return the correct sum of two very small decimal numbers", () => {
    expect(add(0.0000001, 0.0000002)).toBeCloseTo(0.0000003);
  });
  /* 
  Idee des Tests ist gut, aber genau bei diesen beiden Zahlen tritt kein Rundungsfehler auf-
  Beispiel: 0.1 + 0.2 wäre ein Rundungsfehler (0.30000000000000004)
  Ziel des Tests waren vermutlich aber auch nicht Rundungsfehler sondern einfach kleine Zahlen addieren.
  */

  // Tests that add function returns the correct sum when adding zero and a negative number
  it("should return the correct sum when adding zero and a negative number", () => {
    expect(add(0, -5)).toBe(-5);
  });

  //Duplicate Test. Haben wir schon weiter oben in den ersten 6 Tests gehabt
});

//Wir haben weitere 2x3 Testfälle generieren lassen (insg. 18)
describe("add_function - Give me more tests x2", () => {
  // Tests that add function returns the correct sum when adding zero and a positive number
  it("should return the correct sum when adding zero and a positive number", () => {
    expect(add(0, 5)).toBe(5);
    expect(add(7, 0)).toBe(7);
  });

  // Duplicate. Hatten wir schon weiter oben (Ersten 6 Tests)

  // Tests that add function returns the correct sum when adding the same number twice
  it("should return the correct sum when adding the same number twice", () => {
    expect(add(3, 3)).toBe(6);
    expect(add(8, 8)).toBe(16);
  });
  // Test nicht wirklich sinnvoll aber korrekt

  // Tests that add function returns the correct sum when adding a number and zero
  it("should return the correct sum when adding a number and zero", () => {
    expect(add(0, 9)).toBe(9);
    expect(add(6, 0)).toBe(6);
  });
  //Duplicate. Hatten wir schon weiter oben (Ersten 6 Tests und direkt oben drüber)

  // Tests that add function returns NaN when one parameter is not a number
  /* 
  it('returns NaN when one parameter is not a number', () => {
      expect(add(5, 'not a number')).toBeNaN();
  }); 
  */

  // Nicht sinnvoll bzw. lauffähig wegen Typescript Typing. Daher auskommentiert.

  /*
   Tests that add function returns NaN when both parameters are not numbers
   it('returns NaN when both parameters are not numbers', () => {
       expect(add('not a number', 'not a number')).toBeNaN();
   });
   */

  /* 
   Nicht sinnvoll bzw. lauffähig wegen Typescript Typing. Daher auskommentiert. 

   Auch wenn der test nicht lauffähig ist:
   Warum nicht Kombinatorik mit den darüber liegenden Tests ?
   */

  // Tests that add function returns Infinity when one parameter is Infinity and the other is a number
  it("returns Infinity when one parameter is Infinity and the other is a number", () => {
    expect(add(Infinity, 5)).toBe(Infinity);
  });

  /* 
  Test nicht ganz in Ordnung - Idee ist gut. 
  Allerdings falsche Expectation, da positiv unendlich > 10 also würde die Exception geworfen. 

  Ist eine unserer Äquivalenzklassen im Test Design. 
  Kommt leider sehr spät. Nach unzähligen nicht sinnvollen Tests. 
  Bei anderen Tests wurde der Maximalwert von 10 erkannt, hier nicht. 
  */
});

//FAZIT /////////////////////////////////////////////////////////////////

// Nach 18 Tests, hätten wir noch folgende Tests erwartet (statt der Duplikate und nicht lauffähigen Tests)
// - Grenzwert Tests
// - Oktale oder binäre Eingaben

// Codium testet manchmal Whitebox, manchmal Blackbox
// Codium testet nur den Code und nicht Anforderungen.
// Da ist ein menschlicher Tester, der Anforderungen auch kennt schon im Vorteil

describe("add_function", () => {
  //CUSTOM TEST - Can you test with the max negative numbers
  it("test_min_test", () => {
    expect(add(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)).toBe(
      -2 * Number.MIN_SAFE_INTEGER
    );
  });
  //Er hat versucht den Custom Test zu generieren
  //Implementierung funktioniert aber nicht

  //CUSTOM TEST - Can you test with octal numbers
  it("should throw an error when parameters are octal numbers", () => {
    expect(() => add(0o12, 5)).toThrow("Parameters too big");
    expect(() => add(5, 0o12)).toThrow("Parameters too big");
    expect(() => add(0o12, 0o12)).toThrow("Parameters too big");
  });
  //Oktal 12 ist dezimal 10, also eine valide Zahl. Folglich wirft die Funktion keinen Fehler

  it("should return the sum of two octal numbers", () => {
    expect(add(0o10, 0o20)).toBe(24);
  });
  // Oktal 20 ist > dezimal 10 -> wirft Exception, was der Test nicht erkennt
});
