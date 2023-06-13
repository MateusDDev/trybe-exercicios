const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
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
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Luiz Silva',
        price: 5,
      },
    },
    payment: {
      total: 50,
    },
  };
  
  const customerInfo = (fullOrder) => {
    let message = `Olá, ${order['order'].delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Número: ${order.address.number}, AP: ${order.address.apartment}.`;

    return message;
  }
  
  //console.log(customerInfo(order));
  
  const orderModifier = (fullOrder) => {
    let message = `Olá, ${order.order.delivery.deliveryPerson}, o valor total de seu pedido de ${Object.keys(order['order'].pizza)} e ${Object.keys(order['order'].drinks)} é de R$ ${order.payment.total},00.`;

    return message;
  }
  
  console.log(orderModifier(order));