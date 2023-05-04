function parseCount(number) {
  if (Number.isNaN(Number.parseFloat(number))) {
    throw new Error("Невалидное значение");
  }
    return Number.parseFloat(number);
 }

function validateCount(number) {
try {
return parseCount(number);
} catch (error) {
return error;
}
}
// конец первой задачи

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;    
    this.c = c;  
    if (a + b < c || a + c < b || c + b < a) {
    throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    return this.a + this.b + this.c; 
  }
  get area() {
    const p = 0.5 * this.perimeter;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +area.toFixed(3); 
  }
}
  
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует"
        },
      get perimeter() {
      return "Ошибка! Треугольник не существует"
      }
    }
  }
}

