// дан объект numbers. Необходимо вывести в консоль все значения больше или равные 3

const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

// первый способ через цикл for
const arrValues = Object.values(numbers);

function findValues(array) {
  const result1 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 3) {
      result1.push(array[i]);
    }
  }
  return result1;
}

console.log(findValues(arrValues));

//  второй способ через цикл forEach
const result2 = [];
Object.keys(numbers).forEach((element) => {
  if (numbers[element] > 3) {
    result2.push(numbers[element]);
  }
});

console.log(result2);

// Задание 2. Неоходимо из объекта, который лежит в константе post вывести значения, к которым
// приписан комментарий, в консоль.

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

let result = [];

result.push(post.author);
result.push(post.comments[0].rating.dislikes);
result.push(post.comments[1].userId);
result.push(post.comments[1].text);

console.log(result);

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach((element) => {
  for (const key in element) {
    if (key == "price") {
      element[key] = element[key] - element[key] * 0.15;
    }
  }
  console.log(element);
});

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products2 = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

let productsWithPhotos = products2.filter(function (arr) {
  for (const key in arr.photos) {
    if (arr.photos[key].length != 0) {
      return arr.photos;
    }
  }
});
console.log(productsWithPhotos);

// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.
let sortProducts = products2.sort((x,y) => x.price - y.price);
console.log(sortProducts);



// **Задание 5**
// Дано 2 массива
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const dayTranslation = {};
for (let i = 0; i < en.length; i++) {
  dayTranslation[en[i]] = ru[i];
}
console.log(dayTranslation);
