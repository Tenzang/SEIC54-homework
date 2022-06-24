//pt 1 Square

const rectangleA = {
  length: 4,
  width: 4,
};
const rectangleB = {
  length: 5,
  width: 10,
};
const rectangleC = {
  length: 10,
  width: 50,
};

const isSquare = function (object) {
  //
  let length = object.length;
  let width = object.length;
  if (length === width) {
    console.log("This is a square");
    return "This is a square";
  } else {
    console.log("This is a rectangle");
    return "This is a rectangle";
  }
};

isSquare(rectangleA);

const area = function (object) {
  const length = object.length;
  const width = object.width;
  let lengthSquared = length * length;
  let widthSquared = width * width;
  let result = widthSquared * lengthSquared;
  console.log(result);
};
area(rectangleB);

const perimeter = function (object) {
  const length = object.length;
  const width = object.length;
  const perimeter = width + width + length + length;
  console.log(perimeter);
  return perimeter;
};
perimeter(rectangleB);

//
// pt 2 Triangle
//

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
};

const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB && trianglesideA === trianglesideC) {
    console.log(`This is an equilateral triangle`);
    return `This is an equilateral triangle`;
  } else {
    console.log(`This is not an equilateral triangle`);
    return `This is not an equilateral triangle`;
  }
};
isEquilateral(triangleA);

const isIsosceles = function (triangle) {
  if (
    triangle.sideA === triangle.sideB ||
    triangle.sideB === triangle.sideC ||
    triangle.sideA === triangle.sideC
  ) {
    console.log(`This is an Isoceles triangle`);
    return `This is an Isoceles triangle`;
  } else {
    console.log(`This is not an Isoceles triangle`);
    return `This is not an Isoceles triangle`;
  }
};
isIsosceles(triangleA);

// const triangleArea = function (triangle) {
//   //couldn't name another function area
//   const perimeter = sideA + sideB + sideC;
//   const semiperimeter = perimeter * 0.5;
//   // const A = semiperimeter(semiperimeter - sideA)(semiperimeter - sideB)(semiperimeter - sideC)
//   const sA = semiperimeter - sideA;
//   const sB = semiperimeter - sideB;
//   const sC = semiperimeter - sideC;
//   const cB = sC * sB;
//   const cAB = cB * sA;
//   const h = cAB * semiperimeter;
//   const sqr = h / 2;
// };

const triangleArea = function (triangle) {
  /// figure out how to do this with less lines later
  const a = triangle.sideA;
  const b = triangle.sideB;
  const c = triangle.sideC;
  const sidesMultiplied = triangle.sideA + triangle.sideB + triangle.sideC;
  const s = sidesMultiplied / 2;
  //   const sMinusA = s - triangle.sideA;
  //   const sMinusB = s - triangle.sideB;
  //   const sMinusC = s - triangle.sideC;
  const sABC = s * (s - a) * (s - b) * (s - c);
  const sqrSABC = Math.sqrt(sABC); //squared object

  return sqrSABC;
};

console.log(triangleArea(triangleA));

// isObtuse - Returns whether the triangle is obtuse or not
//Obtuse formula = a2 + b2 < c2

const isObtuse = function (triangle) {
  let ab = triangle.sideA * triangle.sideA + triangle.sideB * triangle.sideB;
  console.log(ab);
  let c = trianglesideC * trianglesideC;
  if (ab < c) {
    return (
      "Obtuse. Side a squared plus side b squared is " +
      ab +
      " which is is lesser than " +
      c
    );
  } else {
    return (
      "Not obtuse. Side a squared plus b squared is " + //showing the work to check it
      ab +
      " which is greater than " +
      c
    );
  }
  //return ab;
};
console.log(isObtuse(triangleA));
