//Формулу расстояния между точками  получаем из теоремы Пифагора:
function countDistance(n, m) {
  const { x1, y1, z1 } = n;
  const { x, y, z } = m;
  let a = x - x1;
  let b = y - y1;
  let c = z - z1;
  let dist = Math.sqrt(a * a + b * b + c * c);
  return dist;
}
// Функция генерирует рандомную точку.
function createRandomPoint() {
  x = Math.ceil(Math.random() * 100);
  y = Math.ceil(Math.random() * 100);
  z = Math.ceil(Math.random() * 100);
  return { x, y, z };
}

// Функция searchPoint получает на вход 2 функци callback  и вызывает их. Первая создает рандомную точку, а второй расчитывает
// расстояние от нашей точки с координатами (100, 5100, 510100) до рандомной один раз .
// Полученное расстояние возводится в квадрат (исходя из того что мы вычисляем корень квадратный при нахождении расстояния между точками)
//  и округляется - мы ищем сумму квадратов разниц координат, она должна быть целой.
// Затем для всех точек куба вычисляются квадраты расстояний.Если очередной квадрат совпадает со значением полученным
// на предыдущем шаге - точка найдена.
const searchPoint = (callback_1, callback_2) => {
  const randomPoint = callback_1();
  // задаем координаты радарной точки.
  const x1 = 100;
  const y1 = 5100;
  const z1 = 510100;
  const myPoint = { x1, y1, z1 };
  const d = callback_2(myPoint, randomPoint);
  const d2 = Math.round(d ** 2);

  console.log('Random point ', JSON.stringify(randomPoint));

  for (let x = 0; x <= 100; ++x) {
    for (let y = 0; y <= 100; ++y) {
      for (let z = 0; z <= 100; ++z) {
        if ((x1 - x) ** 2 + (y1 - y) ** 2 + (z1 - z) ** 2 === d2)
          return JSON.stringify({ x, y, z });
      }
    }
  }
};

console.log('Function result', searchPoint(createRandomPoint, countDistance));
