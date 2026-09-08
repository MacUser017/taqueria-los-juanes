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
photo: "https://images.pexels.com/photos/28525191/pexels-photo-28525191.jpeg",
},
{
day: "Tuesday",
name: "Carne en su Jugo",
price: 15.0,
description:
"Stewed beef in its own juices, pinto beans, bacon, onion & corn or flour tortilla.",
photo: "https://images.pexels.com/photos/34822475/pexels-photo-34822475.jpeg",
},
{
day: "Wednesday",
name: "Costillas de Puerco",
price: 15.0,
description: "Pork ribs in green or red sauce. Served with rice & beans.",
photo: "https://images.pexels.com/photos/34495394/pexels-photo-34495394.jpeg",
},
{
day: "Thursday",
name: "Chiles Rellenos",
price: 15.0,
description:
"Poblano peppers stuffed with cheese, covered in tomato sauce. Served with rice, beans & corn or flour tortilla.",
photo: "https://images.pexels.com/photos/39206896/pexels-photo-39206896.jpeg",
},
{
day: "Friday",
name: "Bisteck a la Mexicana",
price: 15.0,
description:
"Thin slices of beef steak cooked in a flavorful mixture of tomatoes, onions & green chili peppers.",
photo: "https://images.pexels.com/photos/36430161/pexels-photo-36430161.jpeg",
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
photo: "https://images.pexels.com/photos/32371267/pexels-photo-32371267.jpeg",
},
{
name: "Lunch Fajitas Texanas",
price: 14.99,
description:
"Steak, shrimp & chicken, served rice, beans, guacamole salad & corn or flour tortilla.",
photo: "https://images.pexels.com/photos/38366541/pexels-photo-38366541.jpeg",
},
{
name: "Lunch A.C.P.",
price: 11.99,
description: "Rice with chicken topped with melted cheese & vegetables.",
photo: "https://images.pexels.com/photos/21821575/pexels-photo-21821575.jpeg",
},
{
name: "Lunch Chilaquiles",
price: 12.99,
description:
"Fried corn tortilla smothered in tomatillo or red sauce, topped with steak or chicken & 2 fried eggs, served with rice & beans.",
addOns: [{ name: "Queso Fresco", price: 2.0 }],
photo: "https://images.pexels.com/photos/376463/pexels-photo-376463.jpeg",
},
{
name: "Lunch Huevos al Gusto",
price: 12.99,
description: "Chorizo, ham or a la mexicana, served with rice & beans.",
addOns: [
{ name: "Queso Fresco", price: 2.0 },
{ name: "Chile Toreado", price: 0.99 },
],
photo: "https://images.pexels.com/photos/28525191/pexels-photo-28525191.jpeg",
},
{
name: "Lunch Burrito",
price: 12.99,
description:
"Stuffed with rice, beans, lettuce, mozzarella cheese, pico de gallo & home fries. Served with option steak, chicken or eggs.",
photo: "https://images.pexels.com/photos/27365284/pexels-photo-27365284.jpeg",
},
{
name: "Lunch Carnitas",
price: 12.99,
description: "Mexican style fried pork, served with rice, beans & guacamole salad.",
photo: "https://images.pexels.com/photos/14006143/pexels-photo-14006143.jpeg",
},
{
name: "Lunch Chimichanga",
price: 10.99,
description:
"Pieces of beef or chicken wrapped in a fried flour tortilla & topped with cheese dip, served with Mexican rice & choice of refried beans & guacamole salad.",
photo: "https://images.pexels.com/photos/6037915/pexels-photo-6037915.jpeg",
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
photo: "https://images.pexels.com/photos/31823036/pexels-photo-31823036.jpeg",
},
{
name: "Cheese Dip",
price: 6.0,
photo: "https://images.pexels.com/photos/27603258/pexels-photo-27603258.jpeg",
},
{
name: "Beans & Cheese",
price: 6.0,
photo: "https://images.pexels.com/photos/12557551/pexels-photo-12557551.jpeg",
},
{
name: "Guacamole",
price: null,
marketPrice: true,
photo: "https://images.pexels.com/photos/5737452/pexels-photo-5737452.jpeg",
},
{
name: "Spinach Dip",
price: 6.0,
photo: "https://images.pexels.com/photos/38253936/pexels-photo-38253936.jpeg",
},
{
name: "Papas Locas",
price: 15.0,
photo: "https://images.pexels.com/photos/28525214/pexels-photo-28525214.jpeg",
},
{
name: "Chicken Wings (10)",
price: 15.0,
description: "Served with celery & carrots.",
flavors: ["Hot Buffalo", "Mango Habanero", "Sweet BBQ", "Lemon Pepper Sauce", "Plain"],
photo: "https://images.pexels.com/photos/8862763/pexels-photo-8862763.jpeg",
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
photo: "https://images.pexels.com/photos/29851128/pexels-photo-29851128.jpeg",
},
{
name: "Chicken Nachos",
price: 13.99,
photo: "https://images.pexels.com/photos/27897601/pexels-photo-27897601.jpeg",
},
{
name: "Steak Nachos",
price: 13.99,
photo: "https://images.pexels.com/photos/29851128/pexels-photo-29851128.jpeg",
},
{
name: "Carnitas Nachos",
price: 14.99,
photo: "https://images.pexels.com/photos/12557546/pexels-photo-12557546.jpeg",
},
{
name: "Fajita Style Nachos",
price: 14.99,
description: "Chicken or steak.",
photo: "https://images.pexels.com/photos/5211212/pexels-photo-5211212.jpeg",
},
{
name: "Shrimp or Texanos",
price: 16.5,
description: "Fajita style nachos.",
photo: "https://images.pexels.com/photos/36988561/pexels-photo-36988561.jpeg",
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
photo: "https://images.pexels.com/photos/14006143/pexels-photo-14006143.jpeg",
},
{
name: "Carnitas En Salsa Verde O Roja",
price: 16.99,
description: "Mexican style fried pork with green or red sauce.",
photo: "https://images.pexels.com/photos/18354021/pexels-photo-18354021.jpeg",
},
{
name: "Chuletas",
price: 15.99,
description: "Grilled pork chops.",
photo: "https://images.pexels.com/photos/12473311/pexels-photo-12473311.jpeg",
},
{
name: "Carne Asada",
price: 15.99,
description: "Grilled flank steak, grilled onions & peppers.",
photo: "https://images.pexels.com/photos/11153859/pexels-photo-11153859.jpeg",
},
{
name: "Chori Steak",
price: 16.99,
description: "Grilled steak topped with chorizo, onions & cheese sauce.",
photo: "https://images.pexels.com/photos/28525114/pexels-photo-28525114.jpeg",
},
{
name: "Cazuelon",
price: 16.99,
description: "Grilled steak, chicken, two fried eggs & chorizo.",
photo: "https://images.pexels.com/photos/20582036/pexels-photo-20582036.jpeg",
},
{
name: "Platillo Barbacoa",
price: 15.99,
description: "Mexican style BBQ.",
photo: "https://images.pexels.com/photos/25389275/pexels-photo-25389275.jpeg",
},
{
name: "Platillo Centroamericano",
price: 15.99,
description:
"Grilled steak, 2 fried eggs, fried plantains, sour cream & centroamerican cheese.",
photo: "https://images.pexels.com/photos/37121082/pexels-photo-37121082.jpeg",
},
{
name: "Cielo, Mar Y Tierra",
price: 17.99,
description: "Grilled steak, chicken, fish & shrimp.",
photo: "https://images.pexels.com/photos/36145046/pexels-photo-36145046.jpeg",
},
{
name: "Chilaquiles",
price: 15.99,
description:
"Fried corn tortilla smothered in tomatillo or red sauce topped with steak or chicken & 2 fried eggs.",
photo: "https://images.pexels.com/photos/376463/pexels-photo-376463.jpeg",
},
{
name: "Platillo De Milanesa",
price: 15.99,
description: "Breaded steak.",
photo: "https://images.pexels.com/photos/20670978/pexels-photo-20670978.jpeg",
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
photo: "https://images.pexels.com/photos/8250430/pexels-photo-8250430.jpeg",
},
{
name: "Choripollo",
price: 16.99,
description: "Grilled chicken breast topped with chorizo, onions & cheese sauce.",
photo: "https://images.pexels.com/photos/14551665/pexels-photo-14551665.jpeg",
},
{
name: "Pollo Chipotle",
price: 16.99,
description:
"Grilled chicken strips, mushrooms, onions covered with chipotle cream sauce.",
photo: "https://images.pexels.com/photos/8697537/pexels-photo-8697537.jpeg",
},
{
name: "A.C.P.",
price: 14.99,
description:
"Rice with chicken, vegetables topped with melted cheese sauce & pico de gallo.",
photo: "https://images.pexels.com/photos/21821575/pexels-photo-21821575.jpeg",
},
{
name: "Mole Poblano",
price: 14.99,
description: "Chicken covered with mole sauce.",
photo: "https://images.pexels.com/photos/27603300/pexels-photo-27603300.jpeg",
},
{
name: "Milanesa De Pollo",
price: 14.99,
description: "Breaded chicken.",
photo: "https://images.pexels.com/photos/31372332/pexels-photo-31372332.jpeg",
},
{
name: "Pollo Popeye",
price: 16.49,
description:
"Grilled chicken breast topped with spinach, mushrooms, covered with melted cheese.",
photo: "https://images.pexels.com/photos/33481695/pexels-photo-33481695.jpeg",
},
{
name: "Pollo Feliz",
price: 16.49,
description:
"Grilled chicken breast topped with zucchini, squash, mushrooms, onions & bell peppers.",
photo: "https://images.pexels.com/photos/13422463/pexels-photo-13422463.jpeg",
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
photo: "https://images.pexels.com/photos/8920125/pexels-photo-8920125.jpeg",
},
{
name: "Veggie Quesadilla",
price: 13.99,
photo: "https://images.pexels.com/photos/32291152/pexels-photo-32291152.jpeg",
},
{
name: "Spinach Quesadilla",
price: 13.99,
photo: "https://images.pexels.com/photos/27603325/pexels-photo-27603325.jpeg",
},
{
name: "Veggie Burrito",
price: 12.99,
photo: "https://images.pexels.com/photos/9258728/pexels-photo-9258728.jpeg",
},
{
name: "Veggie Fajitas",
price: 14.99,
photo: "https://images.pexels.com/photos/32371273/pexels-photo-32371273.jpeg",
},
{
name: "A.C.V.",
price: 14.99,
description: "Rice with vegetables.",
photo: "https://images.pexels.com/photos/10695967/pexels-photo-10695967.jpeg",
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
photo: "https://images.pexels.com/photos/15415465/pexels-photo-15415465.jpeg",
},
{
name: "Steak Salad",
price: 12.99,
photo: "https://images.pexels.com/photos/10806015/pexels-photo-10806015.jpeg",
},
{
name: "Shrimp Salad",
price: 14.99,
photo: "https://images.pexels.com/photos/9544507/pexels-photo-9544507.jpeg",
},
{
name: "Fish Salad",
price: 14.99,
photo: "https://images.pexels.com/photos/17679709/pexels-photo-17679709.jpeg",
},
{
name: "Taco Salad",
price: 12.99,
photo: "https://images.pexels.com/photos/37981996/pexels-photo-37981996.jpeg",
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
photo: "https://images.pexels.com/photos/27365284/pexels-photo-27365284.jpeg",
},
{
name: "Burrito California",
price: 13.99,
description:
"Stuffed with beans, rice, grilled onion, bell peppers, lettuce, topped with cheese dip, pico de gallo & fresh avocado.",
photo: "https://images.pexels.com/photos/27588767/pexels-photo-27588767.jpeg",
},
{
name: "Burrito Fish Or Shrimp",
price: 14.99,
description:
"Stuffed with beans, rice, grilled onion, bell peppers, topped with cheese dip, pico de gallo & fresh avocado.",
photo: "https://images.pexels.com/photos/5337516/pexels-photo-5337516.jpeg",
},
{
name: "Los Juanes Burrito",
price: 14.99,
description:
"Stuffed with grilled chicken, steak, onions, bell peppers, lettuce & topped with cheese dip, home made chorizo & fresh avocado.",
photo: "https://images.pexels.com/photos/27365296/pexels-photo-27365296.jpeg",
},
{
name: "Burrito Texano",
price: 15.99,
description:
"Stuffed with chicken, shrimp, steak, beans, rice, grilled onions, bell peppers, lettuce, topped with cheese dip, pico de gallo & fresh avocado.",
photo: "https://images.pexels.com/photos/38108419/pexels-photo-38108419.jpeg",
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
photo: "https://images.pexels.com/photos/5836439/pexels-photo-5836439.jpeg",
},
{
name: "Cheese Quesadilla",
price: 8.99,
photo: "https://images.pexels.com/photos/15662087/pexels-photo-15662087.jpeg",
},
{
name: "Shrimp Quesadilla",
price: 15.99,
photo: "https://images.pexels.com/photos/14930606/pexels-photo-14930606.jpeg",
},
{
name: "Fish Quesadilla",
price: 15.99,
photo: "https://images.pexels.com/photos/5848697/pexels-photo-5848697.jpeg",
},
{
name: "Texana Quesadilla",
price: 15.99,
photo: "https://images.pexels.com/photos/32351725/pexels-photo-32351725.jpeg",
},
{
name: "De Maiz Quesadilla",
price: 8.99,
priceNote: "each",
photo: "https://images.pexels.com/photos/36971093/pexels-photo-36971093.jpeg",
},
{
name: "Fried Quesadilla",
price: 8.99,
photo: "https://images.pexels.com/photos/35188185/pexels-photo-35188185.jpeg",
},
{
name: "Carnitas Lover Quesadilla",
price: 14.99,
description: "Topped with melted cheese & home made chorizo.",
photo: "https://images.pexels.com/photos/33718644/pexels-photo-33718644.jpeg",
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
photo: "https://images.pexels.com/photos/8448179/pexels-photo-8448179.jpeg",
},
{
name: "Tacos Flour Tortillas",
price: 4.0,
priceNote: "each",
photo: "https://images.pexels.com/photos/5837196/pexels-photo-5837196.jpeg",
},
{
name: "Quesatacos (4)",
price: 13.99,
photo: "https://images.pexels.com/photos/38366548/pexels-photo-38366548.jpeg",
},
{
name: "Gorditas Order (3)",
price: 14.99,
unitPrice: 5.25,
photo: "https://images.pexels.com/photos/34380892/pexels-photo-34380892.jpeg",
},
{
name: "Sopes Order (3)",
price: 14.99,
unitPrice: 5.25,
photo: "https://images.pexels.com/photos/27938734/pexels-photo-27938734.jpeg",
},
{
name: "Huaraches",
price: 9.0,
photo: "https://images.pexels.com/photos/32335062/pexels-photo-32335062.jpeg",
},
{
name: "Torta Mexicana",
price: 12.99,
photo: "https://images.pexels.com/photos/35020126/pexels-photo-35020126.jpeg",
},
{
name: "Torta Milanesa",
price: 13.99,
photo: "https://images.pexels.com/photos/37624172/pexels-photo-37624172.jpeg",
},
{
name: "Torta Hawaiana",
price: 13.99,
photo: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg",
},
{
name: "Cubana",
price: 14.99,
photo: "https://images.pexels.com/photos/29205252/pexels-photo-29205252.jpeg",
},
{
name: "Flautas",
price: 12.99,
photo: "https://images.pexels.com/photos/17429144/pexels-photo-17429144.jpeg",
},
{
name: "Pupusas (3)",
price: 11.99,
photo: "https://images.pexels.com/photos/33490827/pexels-photo-33490827.jpeg",
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
photo: "https://images.pexels.com/photos/37228290/pexels-photo-37228290.jpeg",
},
{
name: "2 Tacos",
price: 7.99,
description: "Chicken or steak, served with fries or rice.",
photo: "https://images.pexels.com/photos/5837196/pexels-photo-5837196.jpeg",
},
{
name: "Kids Quesadilla",
price: 7.99,
description: "Chicken or steak, served with fries or rice.",
photo: "https://images.pexels.com/photos/15662235/pexels-photo-15662235.jpeg",
},
{
name: "Kids ACP",
price: 8.99,
description: "Chicken, rice & melted cheese.",
photo: "https://images.pexels.com/photos/21821575/pexels-photo-21821575.jpeg",
},
{
name: "Kids Burrito",
price: 7.99,
description: "Stuffed with rice & beans, chicken or steak, served with fries.",
photo: "https://images.pexels.com/photos/18330007/pexels-photo-18330007.jpeg",
},
{
name: "Cheeseburger",
price: 9.99,
description: "Served with fries.",
photo: "https://images.pexels.com/photos/4109233/pexels-photo-4109233.jpeg",
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
photo: "https://images.pexels.com/photos/34474024/pexels-photo-34474024.jpeg",
},
{
name: "Banana Split",
price: 8.0,
photo: "https://images.pexels.com/photos/16560563/pexels-photo-16560563.jpeg",
},
{
name: "Ice Cream",
price: 6.0,
photo: "https://images.pexels.com/photos/7761650/pexels-photo-7761650.jpeg",
},
{
name: "Churro",
price: 5.0,
photo: "https://images.pexels.com/photos/21792159/pexels-photo-21792159.jpeg",
},
{
name: "Cheese Cake",
price: 6.0,
photo: "https://images.pexels.com/photos/28835210/pexels-photo-28835210.jpeg",
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