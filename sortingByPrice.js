let details=[
   {id:1 , device:"mobile", price:10000},
   {id:3 , device:"charger", price:1000},
   {id:2 , device:"temper", price:100},
   {id:5 , device:"laptop", price:100000},
];
//ascending by price;
let sortingByPrice=details.sort((a,b)=>
{
  return a.price -   b.price;
});

// descending by price.
let sortingByPriceDescending=details.sort((a,b)=> 
{
  return b.price -   a.price;
});

console.log("sortingByPrice"); //printing the details by ascending price 
console.log(sortingByPriceDescending); // descending price order.
