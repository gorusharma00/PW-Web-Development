const shoppingCart = ['Milk', 'Cofee', 'Tea', 'Honey'];

if(shoppingCart[0] !== 'Meat'){
    shoppingCart.unshift('Meat')
}

if(shoppingCart[shoppingCart.length -1] !== 'Sugar'){
    shoppingCart.push('Sugar')
}

for(let i=0; i<shoppingCart.length; i++){
    if(shoppingCart[i] == 'Honey'){
        shoppingCart.splice(i, 1);
    }
    if(shoppingCart[i] == 'Tea'){
        shoppingCart[i] = 'Green Tea'
    }
}

console.log(shoppingCart);