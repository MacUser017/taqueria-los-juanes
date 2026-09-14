export interface AddOn {
name: string;
price: number;
}

export interface MenuItem {
day?: string;
name: string;
price?: number | null;
marketPrice?: boolean;
priceNote?: string;
unitPrice?: number;
description?: string;
options?: string;
addOns?: AddOn[];
flavors?: string[];
/** Path/URL to a real photo. */
photo?: string;
}

export interface DishSection {
key: string;
title: string;
note?: string;
hours?: string;
items: MenuItem[];
}

export interface PlainListSection {
key: string;
title: string;
option?: string;
groups: { label?: string; items: string[] }[];
}

export const foodSections: DishSection[] = [
{
key: "specials",
title: "Specials",
items: [
{
day: "Monday",
name: "Huevo con Nopales y Cesina",
price: 15.0,
description:
"Scrambled eggs with cactus paddle & cesina steak. Served with rice, beans & molcajete sauce.",
 photo: "/media/webp-images/specials/huevosConNopalesYCesina.webp",
},
{
day: "Tuesday",
name: "Carne en su Jugo",
price: 15.0,
description:
"Stewed beef in its own juices, pinto beans, bacon, onion & corn or flour tortilla.",
 photo: "/media/webp-images/specials/carneEnSuJugo.webp",
},
{
day: "Wednesday",
name: "Costillas de Puerco",
price: 15.0,
description: "Pork ribs in green or red sauce. Served with rice & beans.",
 photo: "/media/webp-images/specials/costillasDePuerco.webp",
},
{
day: "Thursday",
name: "Chiles Rellenos",
price: 15.0,
description:
"Poblano peppers stuffed with cheese, covered in tomato sauce. Served with rice, beans & corn or flour tortilla.",
 photo: "/media/webp-images/specials/chilesRellenos.webp",
},
{
day: "Friday",
name: "Bisteck a la Mexicana",
price: 15.0,
description:
"Thin slices of beef steak cooked in a flavorful mixture of tomatoes, onions & green chili peppers.",
 photo: "/media/webp-images/specials/bisteckALaMexicana.webp",
},
],
},
{
key: "lunch-menu",
title: "Lunch Menu",
hours: "10 am to 2 pm",
items: [
{
name: "Lunch Fajitas",
price: 12.99,
description:
"Steak or chicken, served with rice, beans, guacamole salad & corn or flour tortilla.",
 photo: "/media/webp-images/lunchMenu/lunchFajitas.webp",
},
{
name: "Lunch Fajitas Texanas",
price: 14.99,
description:
"Steak, shrimp & chicken, served rice, beans, guacamole salad & corn or flour tortilla.",
 photo: "/media/webp-images/lunchMenu/lunchFajitasTexanas.webp",
},
{
name: "Lunch A.C.P.",
price: 11.99,
description: "Rice with chicken topped with melted cheese & vegetables.",
 photo: "/media/webp-images/lunchMenu/LunchA.C.P.webp",
},
{
name: "Lunch Chilaquiles",
price: 12.99,
description:
"Fried corn tortilla smothered in tomatillo or red sauce, topped with steak or chicken & 2 fried eggs, served with rice & beans.",
addOns: [{ name: "Queso Fresco", price: 2.0 }],
 photo: "/media/webp-images/lunchMenu/lunchChilaquiles.webp",
},
{
name: "Lunch Huevos al Gusto",
price: 12.99,
description: "Chorizo, ham or a la mexicana, served with rice & beans.",
addOns: [
{ name: "Queso Fresco", price: 2.0 },
{ name: "Chile Toreado", price: 0.99 },
],
 photo: "/media/webp-images/lunchMenu/lunchHuevosAlGusto.webp",
},
{
name: "Lunch Burrito",
price: 12.99,
description:
"Stuffed with rice, beans, lettuce, mozzarella cheese, pico de gallo & home fries. Served with option steak, chicken or eggs.",
 photo: "/media/webp-images/lunchMenu/lunchBurrito.webp",
},
{
name: "Lunch Carnitas",
price: 12.99,
description: "Mexican style fried pork, served with rice, beans & guacamole salad.",
 photo: "/media/webp-images/lunchMenu/lunchCarnitas.webp",
},
{
name: "Lunch Chimichanga",
price: 10.99,
description:
"Pieces of beef or chicken wrapped in a fried flour tortilla & topped with cheese dip, served with Mexican rice & choice of refried beans & guacamole salad.",
 photo: "/media/webp-images/lunchMenu/lunchChimichanga.webp",
},
],
},
{
key: "appetizers",
title: "Appetizers",
note: "All appetizers are served with home made chips.",
items: [
{
name: "Choriqueso",
price: 6.0,
 photo: "/media/webp-images/appetizers/choriqueso.webp",
},
{
name: "Cheese Dip",
price: 6.0,
 photo: "/media/webp-images/appetizers/cheeseDip.webp",
},
{
name: "Beans & Cheese",
price: 6.0,
 photo: "/media/webp-images/appetizers/beanAndCheese.webp",
},
{
name: "Guacamole",
price: null,
marketPrice: true,
 photo: "/media/webp-images/appetizers/guacamole.webp",
},
{
name: "Spinach Dip",
price: 6.0,
 photo: "/media/webp-images/appetizers/spinachDip.webp",
},
{
name: "Papas Locas",
price: 15.0,
 photo: "/media/webp-images/appetizers/papasLocas.webp",
},
{
name: "Chicken Wings (10)",
price: 15.0,
description: "Served with celery & carrots.",
flavors: ["Hot Buffalo", "Mango Habanero", "Sweet BBQ", "Lemon Pepper Sauce", "Plain"],
 photo: "/media/webp-images/appetizers/chickenWings.webp",
},
],
},
{
key: "nachos",
title: "Nachos",
note:
"All nachos are served with mozzarella, pico de gallo, guacamole, jalapeno, beans & sour cream. (Grilled peppers & onions on fajita style.)",
items: [
{
name: "O.M.G. Nachos",
price: 14.99,
description: "Steak, chicken, chorizo & pineapple.",
 photo: "/media/webp-images/Nachos/o.m.g.Nachos.webp",
},
{
name: "Chicken Nachos",
price: 13.99,
 photo: "/media/webp-images/Nachos/chickenNachos.webp",
},
{
name: "Steak Nachos",
price: 13.99,
 photo: "/media/webp-images/Nachos/steakNachos.webp",
},
{
name: "Carnitas Nachos",
price: 14.99,
 photo: "/media/webp-images/Nachos/carnitasNachos.webp",
},
{
name: "Fajita Style Nachos",
price: 14.99,
description: "Chicken or steak.",
 photo: "/media/webp-images/Nachos/fajitasStyleNachos.webp",
},
{
name: "Shrimp or Texanos",
price: 16.5,
description: "Fajita style nachos.",
 photo: "/media/webp-images/Nachos/shrimpOrTexanos.webp",
},
],
},
{
key: "entrees",
title: "Entrees",
note:
"All entrees are served with rice, beans & guacamole salad (lettuce, tomatoes, guacamole & sour cream).",
items: [
{
name: "Carnitas",
price: 15.99,
description: "Mexican style fried pork.",
 photo: "/media/webp-images/Entrees/carnitas.webp",
},
{
name: "Carnitas En Salsa Verde O Roja",
price: 16.99,
description: "Mexican style fried pork with green or red sauce.",
 photo: "/media/webp-images/Entrees/carnitasEnSalsaVerde.webp",
},
{
name: "Chuletas",
price: 15.99,
description: "Grilled pork chops.",
 photo: "/media/webp-images/Entrees/chuletas.webp",
},
{
name: "Carne Asada",
price: 15.99,
description: "Grilled flank steak, grilled onions & peppers.",
 photo: "/media/webp-images/Entrees/carneAsada.webp",
},
{
name: "Chori Steak",
price: 16.99,
description: "Grilled steak topped with chorizo, onions & cheese sauce.",
 photo: "/media/webp-images/Entrees/choriSteak.webp",
},
{
name: "Cazuelon",
price: 16.99,
description: "Grilled steak, chicken, two fried eggs & chorizo.",
 photo: "/media/webp-images/Entrees/cazuelon.webp",
},
{
name: "Platillo Barbacoa",
price: 15.99,
description: "Mexican style BBQ.",
 photo: "/media/webp-images/Entrees/platilloBarbacoa.webp",
},
{
name: "Platillo Centroamericano",
price: 15.99,
description:
"Grilled steak, 2 fried eggs, fried plantains, sour cream & centroamerican cheese.",
 photo: "/media/webp-images/Entrees/platilloCentroamericano.webp",
},
{
name: "Cielo, Mar Y Tierra",
price: 17.99,
description: "Grilled steak, chicken, fish & shrimp.",
 photo: "/media/webp-images/Entrees/cieloMarYTierra.webp",
},
{
name: "Chilaquiles",
price: 15.99,
description:
"Fried corn tortilla smothered in tomatillo or red sauce topped with steak or chicken & 2 fried eggs.",
 photo: "/media/webp-images/Entrees/chilaquiles.webp",
},
{
name: "Platillo De Milanesa",
price: 15.99,
description: "Breaded steak.",
 photo: "/media/webp-images/Entrees/platilloDeMilanesa.webp",
},
],
},
{
key: "chicken",
title: "Chicken",
note:
"All entrees are served with rice, beans & guacamole salad (lettuce, tomatoes, guacamole & sour cream).",
items: [
{
name: "Pechuga Asada",
price: 15.99,
description: "Grilled chicken breast.",
 photo: "/media/webp-images/Chicken/pechugaAsada.webp",
},
{
name: "Choripollo",
price: 16.99,
description: "Grilled chicken breast topped with chorizo, onions & cheese sauce.",
 photo: "/media/webp-images/Chicken/choripollo.webp",
},
{
name: "Pollo Chipotle",
price: 16.99,
description:
"Grilled chicken strips, mushrooms, onions covered with chipotle cream sauce.",
 photo: "/media/webp-images/Chicken/polloChipotle.webp",
},
{
name: "A.C.P.",
price: 14.99,
description:
"Rice with chicken, vegetables topped with melted cheese sauce & pico de gallo.",
 photo: "/media/webp-images/Chicken/A.C.P.webp",
},
{
name: "Mole Poblano",
price: 14.99,
description: "Chicken covered with mole sauce.",
 photo: "/media/webp-images/Chicken/molePoblano.webp",
},
{
name: "Milanesa De Pollo",
price: 14.99,
description: "Breaded chicken.",
 photo: "/media/webp-images/Chicken/milanesaDePollo.webp",
},
{
name: "Pollo Popeye",
price: 16.49,
description:
"Grilled chicken breast topped with spinach, mushrooms, covered with melted cheese.",
 photo: "/media/webp-images/Chicken/polloPopeye.webp",
},
{
name: "Pollo Feliz",
price: 16.49,
description:
"Grilled chicken breast topped with zucchini, squash, mushrooms, onions & bell peppers.",
 photo: "/media/webp-images/Chicken/polloFeliz.webp",
},
],
},
{
key: "veggie",
title: "Veggie",
items: [
{
name: "Veggie Tacos",
price: 12.99,
 photo: "/media/webp-images/Veggie/veggieTacos.webp",
},
{
name: "Veggie Quesadilla",
price: 13.99,
 photo: "/media/webp-images/Veggie/veggieQuesadilla.webp",
},
{
name: "Spinach Quesadilla",
price: 13.99,
 photo: "/media/webp-images/Veggie/spinachQuesadilla.webp",
},
{
name: "Veggie Burrito",
price: 12.99,
 photo: "/media/webp-images/Veggie/veggieBurito.webp",
},
{
name: "Veggie Fajitas",
price: 14.99,
 photo: "/media/webp-images/Veggie/veggieFajitas.webp",
},
{
name: "A.C.V.",
price: 14.99,
description: "Rice with vegetables.",
 photo: "/media/webp-images/Veggie/a.c.v.webp",
},
],
},
{
key: "salad",
title: "Salad",
items: [
{
name: "Chicken Salad",
price: 12.99,
 photo: "/media/webp-images/Salad/chickenSalad.webp",
},
{
name: "Steak Salad",
price: 12.99,
 photo: "/media/webp-images/Salad/steakSalad.webp",
},
{
name: "Shrimp Salad",
price: 14.99,
 photo: "/media/webp-images/Salad/shrimpSalad.webp",
},
{
name: "Fish Salad",
price: 14.99,
 photo: "/media/webp-images/Salad/fishSalad.webp",
},
{
name: "Taco Salad",
price: 12.99,
 photo: "/media/webp-images/Salad/tacoSalad.webp",
},
],
},
{
key: "burritos",
title: "Burritos",
items: [
{
name: "Burrito Classic",
price: 11.99,
description:
"Stuffed with beans, rice, mozzarella cheese, lettuce, pico de gallo, sour cream & meat choice.",
 photo: "/media/webp-images/Burrito/burritoClassic.webp",
},
{
name: "Burrito California",
price: 13.99,
description:
"Stuffed with beans, rice, grilled onion, bell peppers, lettuce, topped with cheese dip, pico de gallo & fresh avocado.",
 photo: "/media/webp-images/Burrito/burritoCalifornia.webp",
},
{
name: "Burrito Fish Or Shrimp",
price: 14.99,
description:
"Stuffed with beans, rice, grilled onion, bell peppers, topped with cheese dip, pico de gallo & fresh avocado.",
 photo: "/media/webp-images/Burrito/burritoFishOrShrimp.webp",
},
{
name: "Los Juanes Burrito",
price: 14.99,
description:
"Stuffed with grilled chicken, steak, onions, bell peppers, lettuce & topped with cheese dip, home made chorizo & fresh avocado.",
 photo: "/media/webp-images/Burrito/losJuanesBurrito.webp",
},
{
name: "Burrito Texano",
price: 15.99,
description:
"Stuffed with chicken, shrimp, steak, beans, rice, grilled onions, bell peppers, lettuce, topped with cheese dip, pico de gallo & fresh avocado.",
 photo: "/media/webp-images/Burrito/burittoTexano.webp",
},
],
},
{
key: "quesadillas",
title: "Quesadillas",
note: '10" flour tortilla served with rice, beans, lettuce, guacamole & sour cream.',
items: [
{
name: "Classic Quesadilla",
price: 12.99,
description: "With your choice of meat.",
 photo: "/media/webp-images/quesadillas/classicQuesadilla.webp",
},
{
name: "Cheese Quesadilla",
price: 8.99,
 photo: "/media/webp-images/quesadillas/cheeseQuesadilla.webp",
},
{
name: "Shrimp Quesadilla",
price: 15.99,
 photo: "/media/webp-images/quesadillas/shrimpQuesadilla.webp",
},
{
name: "Fish Quesadilla",
price: 15.99,
 photo: "/media/webp-images/quesadillas/fishQuesadilla.webp",
},
{
name: "Texana Quesadilla",
price: 15.99,
 photo: "/media/webp-images/quesadillas/texanaQuesadilla.webp",
},
{
name: "De Maiz Quesadilla",
price: 8.99,
priceNote: "each",
 photo: "/media/webp-images/quesadillas/DeMaizQuesadilla.webp",
},
{
name: "Fried Quesadilla",
price: 8.99,
 photo: "/media/webp-images/quesadillas/friedQuesadilla.webp",
},
{
name: "Carnitas Lover Quesadilla",
price: 14.99,
description: "Topped with melted cheese & home made chorizo.",
 photo: "/media/webp-images/quesadillas/carnitasLoverQuesadilla.webp",
},
],
},
{
key: "mexican-plates",
title: "Mexican Plates",
note:
"Cualquier modificación o extras pueden cambiar el precio original. Any modification or extra may change the price.",
items: [
{
name: "Street Tacos Order (4)",
price: 12.99,
unitPrice: 3.49,
options: "Lengua, tripa & cabeza $0.75 extra each.",
 photo: "/media/webp-images/Mexican_Plates/streetTacosOrder.webp",
},
{
name: "Tacos Flour Tortillas",
price: 4.0,
priceNote: "each",
 photo: "/media/webp-images/Mexican_Plates/tacosFlourTortilla.webp",
},
{
name: "Quesatacos (4)",
price: 13.99,
 photo: "/media/webp-images/Mexican_Plates/quesatacos.webp",
},
{
name: "Gorditas Order (3)",
price: 14.99,
unitPrice: 5.25,
 photo: "/media/webp-images/Mexican_Plates/gorditasOrder.webp",
},
{
name: "Sopes Order (3)",
price: 14.99,
unitPrice: 5.25,
 photo: "/media/webp-images/Mexican_Plates/sopesOrder.webp",
},
{
name: "Huaraches",
price: 9.0,
 photo: "/media/webp-images/Mexican_Plates/huaraches.webp",
},
{
name: "Torta Mexicana",
price: 12.99,
 photo: "/media/webp-images/Mexican_Plates/tortaMexicana.webp",
},
{
name: "Torta Milanesa",
price: 13.99,
 photo: "/media/webp-images/Mexican_Plates/tortaMilanesa.webp",
},
{
name: "Torta Hawaiana",
price: 13.99,
 photo: "/media/webp-images/Mexican_Plates/torta.webp",
},
{
name: "Cubana",
price: 14.99,
 photo: "/media/webp-images/Mexican_Plates/tortaCubana.webp",
},
{
name: "Flautas",
price: 12.99,
 photo: "/media/webp-images/Mexican_Plates/flautas.webp",
},
{
name: "Pupusas (3)",
price: 11.99,
 photo: "/media/webp-images/Mexican_Plates/pupusas.webp",
},
],
},
{
key: "kids-plates",
title: "Kids Plates",
items: [
{
name: "Fresh Chicken Tenders",
price: 8.99,
description: "Served with fries.",
 photo: "/media/webp-images/kidsMenu/freshChickeTenders.webp",
},
{
name: "2 Tacos",
price: 7.99,
description: "Chicken or steak, served with fries or rice.",
 photo: "/media/webp-images/kidsMenu/2Tacos.webp",
},
{
name: "Kids Quesadilla",
price: 7.99,
description: "Chicken or steak, served with fries or rice.",
 photo: "/media/webp-images/kidsMenu/kidsQuesadilla.webp",
},
{
name: "Kids ACP",
price: 8.99,
description: "Chicken, rice & melted cheese.",
 photo: "/media/webp-images/kidsMenu/kidsACP.webp",
},
{
name: "Kids Burrito",
price: 7.99,
description: "Stuffed with rice & beans, chicken or steak, served with fries.",
 photo: "/media/webp-images/kidsMenu/kidsBurrito.webp",
},
{
name: "Cheeseburger",
price: 9.99,
description: "Served with fries.",
 photo: "/media/webp-images/kidsMenu/cheeseBurger.webp",
},
],
},
{
key: "desserts",
title: "Desserts",
items: [
{
name: "Home made flan",
price: 5.0,
 photo: "/media/webp-images/Dessert/flan.webp",
},
{
name: "Banana Split",
price: 8.0,
 photo: "/media/webp-images/Dessert/bananaSplit.webp",
},
{
name: "Ice Cream",
price: 6.0,
 photo: "/media/webp-images/Dessert/iceCream.webp",
},
{
name: "Churro",
price: 5.0,
 photo: "/media/webp-images/Dessert/churro.webp",
},
{
name: "Cheese Cake",
price: 6.0,
 photo: "/media/webp-images/Dessert/cheeseCake.webp",
},
],
},
];

export const simpleFoodSections: DishSection[] = [
{
key: "meats",
title: "Meats",
note: "Add any of these meats to your tacos, tortas & plates.",
items: [
{ name: "Asada", description: "Grilled Steak" },
{ name: "Al Pastor", description: "Marinated Pork" },
{ name: "Lengua", description: "Beef Tongue" },
{ name: "Tripa", description: "Beef Tripe" },
{ name: "Cabeza", description: "Beef Head" },
{ name: "Carnitas", description: "Fried Pork" },
{ name: "Chorizo", description: "Mexican Sausage" },
{ name: "Barbacoa", description: "Mexican BBQ" },
],
},
{
key: "side-orders",
title: "Side Orders",
items: [
{ name: "Rice", price: 2.5 },
{ name: "Beans", price: 2.5 },
{ name: "Rice & Beans", price: 3.99 },
{ name: "Tortillas", price: 1.49 },
{ name: "Grilled Chicken 6oz", price: 5.99 },
{ name: "Grilled Steak 6oz", price: 5.99 },
{ name: "Pico De Gallo", price: 1.99 },
{ name: "Guacamole", price: null, marketPrice: true },
{ name: "Avocado", price: null, marketPrice: true },
{ name: "Queso Fresco", price: 3.5 },
{
name: "Fried Sweet Plantains",
price: 2.99,
description: "Served with sour cream & powder cheese.",
},
],
},
{
key: "adds",
title: "Adds",
items: [
{ name: "Pico De Gallo", price: 0.99 },
{ name: "Cheese", price: 1.99 },
{ name: "Sour Cream", price: 0.99 },
{ name: "Avocado", price: null, marketPrice: true },
{ name: "Cambray", price: 1.49 },
{ name: "Chiles Toreados", price: 0.99 },
{ name: "Fry Egg", price: 1.5, priceNote: "each" },
{ name: "Lime", price: 0.99 },
{ name: "Queso Fresco", price: 2.99 },
{ name: "French Fries", price: 3.99 },
],
},
];

export const drinksMenu: DishSection[] = [
{
key: "drinks",
title: "Drinks",
items: [
{
name: "Soft Drinks",
price: 3.5,
description: "Free Refill",
photo: "https://images.pexels.com/photos/104509/pexels-photo-104509.jpeg",
},
{
name: "Sweet Tea",
price: 3.5,
description: "Free Refill",
photo: "https://images.pexels.com/photos/11009226/pexels-photo-11009226.jpeg",
},
{
name: "Jarritos",
price: 3.0,
photo: "https://images.pexels.com/photos/13689190/pexels-photo-13689190.jpeg",
},
{
name: "Mexican Coca-Cola",
price: 4.0,
photo: "https://images.pexels.com/photos/4113629/pexels-photo-4113629.jpeg",
},
{
name: "Agua Fresca (24 Oz)",
price: 3.5,
description: "No Refill",
photo: "https://images.pexels.com/photos/37663515/pexels-photo-37663515.jpeg",
},
{
name: "Agua Fresca (32 Oz)",
price: 5.0,
description: "No Refill. Horchata, Jamaica, piña, tamarindo & limonada.",
photo: "https://images.pexels.com/photos/37663515/pexels-photo-37663515.jpeg",
},
{
name: "Coffee",
price: 3.5,
description: "Free Refill",
photo: "https://images.pexels.com/photos/1195197/pexels-photo-1195197.jpeg",
},
],
},
{
key: "cocktails",
title: "Cocktails",
note: "We Required ID",
items: [
{
name: "Margarita Los Juanes 20oz.",
price: 16.0,
description: "1800 Tequila, fresh lime juice, orange juice & syrup.",
photo: "https://images.pexels.com/photos/32912253/pexels-photo-32912253.jpeg",
},
{
name: "Pitcher Margarita",
price: 23.0,
description: "Lime, mango, strawberry & peach.",
photo: "https://images.pexels.com/photos/38995393/pexels-photo-38995393.jpeg",
},
{
name: "Frozen Margarita 20oz.",
price: 15.0,
description: "Mango, strawberry & peach.",
photo: "https://images.pexels.com/photos/31269850/pexels-photo-31269850.jpeg",
},
{
name: "House Margarita 20oz.",
price: 10.0,
description:
"House tequila, orange liquor & margarita mix. Mango, strawberry & peach add $2.00.",
photo: "https://images.pexels.com/photos/33776436/pexels-photo-33776436.jpeg",
},
{
name: "Jumbo Margarita 32oz.",
price: 15.0,
description: "Mango, strawberry & peach add $2.00.",
photo: "https://images.pexels.com/photos/30591631/pexels-photo-30591631.jpeg",
},
{
name: "Coronarita 20oz.",
price: 18.0,
description: "Tequila, triple sec, & margarita mix. 7oz. coronita.",
photo: "https://images.pexels.com/photos/14190247/pexels-photo-14190247.jpeg",
},
{
name: "On The Beach",
price: 12.0,
description: "Orange juice, peach schnapps & cranberry juice.",
photo: "https://images.pexels.com/photos/9872733/pexels-photo-9872733.jpeg",
},
{
name: "Cantarito",
price: 15.0,
description: "Tequila, orange juice, lime juice, Squirt & Tajin.",
photo: "https://images.pexels.com/photos/36539021/pexels-photo-36539021.jpeg",
},
{
name: "Mojito",
price: 12.0,
description: "Rum, lime, peppermint & mineral water.",
photo: "https://images.pexels.com/photos/4051220/pexels-photo-4051220.jpeg",
},
{
name: "Charro Negro",
price: 12.0,
description: "Tequila, lime juice & Pepsi.",
photo: "https://images.pexels.com/photos/4113667/pexels-photo-4113667.jpeg",
},
{
name: "Paloma",
price: 15.0,
description: "Tequila, lime juice, Tajin & Squirt.",
photo: "https://images.pexels.com/photos/7376990/pexels-photo-7376990.jpeg",
},
{
name: "Vampiro",
price: 12.0,
description: "Tequila, Tajin, Sangrita, Squirt & lime juice.",
photo: "https://images.pexels.com/photos/7376896/pexels-photo-7376896.jpeg",
},
{
name: "Cuba Libre",
price: 12.0,
description: "Rum, lime & cola.",
photo: "https://images.pexels.com/photos/4113683/pexels-photo-4113683.jpeg",
},
{
name: "Piña Colada",
price: 14.0,
description: "Rum, Malibu, pineapple juice & coconut cream.",
photo: "https://images.pexels.com/photos/28525185/pexels-photo-28525185.jpeg",
},
{
name: "Blue Motorcycle",
price: 13.0,
description: "Tequila, vodka, rum, gin, triple sec, blue curacao, sweet & sour.",
photo: "https://images.pexels.com/photos/3196019/pexels-photo-3196019.jpeg",
},
{
name: "Long Island Ice Tea",
price: 12.0,
description: "Vodka, gin, white rum, triple sec & splash of cola.",
photo: "https://images.pexels.com/photos/8879621/pexels-photo-8879621.jpeg",
},
{
name: "Tequila Sunrise",
price: 12.0,
description: "Silver Tequila, orange juice & granadine.",
photo: "https://images.pexels.com/photos/34299757/pexels-photo-34299757.jpeg",
},
],
},
{
key: "daily-drink-specials",
title: "Daily Drink Specials",
items: [
{
day: "Monday",
name: "Margarita",
price: 5.0,
photo: "https://images.pexels.com/photos/32912253/pexels-photo-32912253.jpeg",
},
{
day: "Tuesday",
name: "Mojito",
price: 8.0,
photo: "https://images.pexels.com/photos/4051220/pexels-photo-4051220.jpeg",
},
{
day: "Wednesday",
name: "Paloma",
price: 8.0,
photo: "https://images.pexels.com/photos/7376990/pexels-photo-7376990.jpeg",
},
{
day: "Thursday",
name: "Mezcalita",
price: 8.0,
photo: "https://images.pexels.com/photos/34222954/pexels-photo-34222954.jpeg",
},
{
day: "Friday",
name: "Mix Berry Vodka",
price: 8.0,
photo: "https://images.pexels.com/photos/24870647/pexels-photo-24870647.jpeg",
},
],
},
];

export const plainDrinkSections: PlainListSection[] = [
{
key: "shots",
title: "Shots",
groups: [
{
items: [
"Tequila Reposado",
"Clase Azul",
"Don Julio 1942",
"Don Julio Reposado",
"Don Julio Blanco",
"Patron Reposado",
"Herradura",
"1800 Cristalino",
"1800 Blanco",
"Jimador",
"Jose Cuervo",
],
},
],
},
{
key: "beer",
title: "Beer",
option: "Make it Michelada",
groups: [
{
label: "Draft",
items: ["Modelo Especial", "Blue Moon", "XX Ambar", "Stella", "Michelob Ultra", "Pacifico", "Negra Modelo"],
},
{
label: "Bottle",
items: [
"Modelo",
"Negra Modelo",
"Corona",
"Corona Obscura",
"XX Ambar",
"XX Lager",
"Pacifico",
"Heineken",
"Blue Moon",
"Miller Lite",
"Michelob Ultra",
],
},
],
},
];

export const policies = {
serviceCharge:
"For all parties of six people or more (included kids) a 18% service charge before the tax will be added to the check.",
pricing: "Prices are subject to change according the market place.",
cooking: "These menu items may be cooked to order.",
foodSafety:
"Consuming raw or undercooked, meats, poultry, seafood, shellfish, or eggs may increase your risk for food borne illness.",
};