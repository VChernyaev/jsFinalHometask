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

console.log(JSON.stringify(post, 2));

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

// **Задание 5**
// Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]

const dayTranslation = {};
for (let i = 0; i < en.length; i++) {
    dayTranslation[en[i]]=ru[i]
    
}
console.log(dayTranslation);
