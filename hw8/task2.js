const users = [
    {
      name: 'Vika',
      basket: [],
    },
    {
      name: 'Andry',
      basket: [],
    },
    {
      name: 'Ann',
      basket: [],
    }
]

const products = [
    {
      name: 'Samsung',
      price: 15000,
    },
    {
      name: 'Apple',
      price: 20000,
    },
    {
      name: 'Motorolla',
      price: 5000,
    },
    {
      name: 'Xiaomi',
      price: 18000,
    },
  ]

  // Інформацію про вибраного користувача
  async function getUser(userName) {
    const userData = users.filter((user) => user.name === userName)[0];
    if (!userData) {
      console.log(('Пользователь не существует!'));
    }
    return userData;
  }

  //Додати в кошик товар
  async function addProduct(userName, product) {
    const userBasket = users.filter((user) => user.name === userName)[0].basket;
    userBasket.push(product);
    return userBasket;
  }
  
  //Вивести кошик товарів + ціна
  async function getBasketInfo(userName) {
    const userBasket = users.filter((user) => user.name === userName)[0].basket;
    return userBasket;
  }

  console.log(getUser("Vika"))
  console.log(addProduct("Vika","Samsung"))
  console.log(getBasketInfo("Vika"))
  console.log(getUser("Vika"))