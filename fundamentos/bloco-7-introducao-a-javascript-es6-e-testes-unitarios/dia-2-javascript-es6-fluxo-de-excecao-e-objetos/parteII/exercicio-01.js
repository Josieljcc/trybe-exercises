const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};
//   "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
  return `Olá ${order["order"].delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order["address"].street}, Nº: ${order["address"].number}, AP: ${order["address"].apartment} `;
};

customerInfo(order);

// "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
console.log(Object.keys(order.order));
const orderModifier = (order) => {
  return `Olá ${(order.name = "Luiz Silva")}, o total do seu pedido de ${
    Object.keys(order.order.pizza)[0]
  }, ${Object.keys(order.order.pizza)[1]} e ${
    order.order.drinks.coke.type
  } é R$ ${order.payment.total - 10},00.`;
};

console.log(orderModifier(order));
