import uuid from "react-uuid";
import orangeNavel from "../../Assets/AllProducts/Orange-Navel.png";
import orangeBaladi from "../../Assets/AllProducts/baladi-orange.png";
import orangeValencia from "../../Assets/AllProducts/Orange-Valencia.png";
import orangeNavelLate from "../../Assets/AllProducts/Navel-Late-Orange.png";
import mandarin from "../../Assets/AllProducts/Mandarin.png";
import grapeFruit from "../../Assets/AllProducts/Grape-Fruit.png";
import mangoAlphonso from "../../Assets/AllProducts/Mango-alphonso.png";
import mango from '../../Assets/AllProducts/mango.png';
import lemon from "../../Assets/AllProducts/lemon.png";
import grapesGreen from '../../Assets/AllProducts/Grapes-green.png';
import grapesBlack from '../../Assets/AllProducts/Grapes-black.png';
import grapesRed from '../../Assets/AllProducts/Grapes-red.png';
import guave from '../../Assets/AllProducts/Guava.png';
import pomegrenate from '../../Assets/AllProducts/Pomegrenate.png';
import potato from '../../Assets/AllProducts/Potato New.png'
import potatoSweet from '../../Assets/AllProducts/Potato Sweet.png';
import capsicum from '../../Assets/AllProducts/Capsicum Mixed - 3 Color.png'
import cabbage from '../../Assets/AllProducts/Cabbage Chinese.png'
import broccoli from '../../Assets/AllProducts/Broccoli.png'
import onionRed from '../../Assets/AllProducts/Onion Red.png'
import onionWhite from '../../Assets/AllProducts/White-Onions.png'
import onionGold from '../../Assets/AllProducts/Gold-Onions.png'
import garlic from '../../Assets/AllProducts/Garlic.png'
import strawberry from '../../Assets/AllProducts/Strawberry.png'
import peache from '../../Assets/AllProducts/Peaches.png'
import watermelon from '../../Assets/AllProducts/Watermelon.png'

export const OurAllProducts = [
  {
    id: uuid(),
    name: "Orange Navel",
    image: orangeNavel,
    duration: 'From Dec. to Feb.',
    details:
      "Navel oranges are one of the healthiest fruits, and are filled with Vitamin C, fiber and potassium.",
  },
  {
    id: uuid(),
    name: "Orange Valencia",
    image: orangeValencia,
    duration: 'From Feb. to May.',
    details:
      "The Valencia Orange is a sweet orange. Helps keep blood pressure under check and lowers cholestrol.",
  },
  {
    id: uuid(),
    name: "Orange Baladi",
    image: orangeBaladi,
    duration: 'From Dec. to Feb.',
    details:
      "The Baladi Orange is one of the healthiest fruits, and are filled with Vitamin C, fiber and potassium.",
  },
  {
    id: uuid(),
    name: "Orange Navel-Late",
    image: orangeNavelLate,
    duration: 'From Mar. to Apr.',
    details:
      "The Baladi Orange is one of the healthiest fruits, and are filled with Vitamin C, fiber and potassium.",
  },
  {
    id: uuid(),
    name: "Mandarin",
    image: mandarin,
    duration: 'From Nov. to Mar.',
    details:
      "This citrus fruit contains Vitamins A, B, and a high level of Vitamin C has multiple health benefits, from reducing the risk of cancer to weight loss.",
  },
  {
    id: uuid(),
    name: "Grape-Fruit",
    image: grapeFruit,
    duration: 'From Oct. to Feb.',
    details:
      "The grapefruit is a cross between an orange and a pomelo. It provides health benefits for the skin, blood pressure, heart health, and disease prevention. Grapefruit contains high levels of vitamin C. Grapefruits are low in calories but are full of nutrients, and an excellent source of vitamins A and C. Grapefruit decreases the risk of obesity, diabetes, heart diseases.",
  },
  {
    id: uuid(),
    name: "Lemon (Eureka)",
    image: lemon,
    duration: 'From Oct. to Jan.',
    details:
      "Lemon health benefits includes improving vitamin C levels, decreasing blood cholesterol, boosting liver function, boosting metabolism.",
  },
  {
    id: uuid(),
    name: "Mango Alphonso",
    image: mangoAlphonso,
    duration: 'From Apr. to Oct.',
    details:
      "Also known as 'The King of Fruits,' Alphonso mangoes are rich in flavour and are premium variety of mango. It can be eaten fresh, sliced or pureed and are rich in vitamins.",
  },
  {
    id: uuid(),
    name: "Mango",
    image: mango,
    duration: 'From Apr. to Oct.',
    details:
      "Mango's with its rich flavor and amazing taste is a perfect refreshing beverage for scorching summer months. It is low in calorie and source of vital nutrients comprising of dietary fiber, vitamins, minerals.",
  },
  {
    id: uuid(),
    name: "Strawberry",
    image: strawberry,
    duration: 'From Aug. to Dec.',
    details:
      "A sweet, red heart-shaped fruit which are delicious in taste. These are low-calorie, fiber-rich fruits packed with vitamins C and K, folate, potassium, manganese, and magnesium.",
  },
  {
    id: uuid(),
    name: "Green Grapes",
    image: grapesGreen,
    duration: 'From May. to Jun.',
    details:
      "Resveratrol is a key nutrient in grapes that may offer health benefits. Grapes are a good source of fiber, potassium, and a range of vitamins and other minerals.",
  },
  {
    id: uuid(),
    name: "Black Grapes",
    image: grapesBlack,
    duration: 'From Jul. to Aug.',
    details:
      "Grapes are packed with a number of nutrients and vitamins. Grapes are packed with antioxidants, which has some incredible benefits for the skin, hair and overall health. Black grapes are known to help in maintaining good eyesight. They exhibit anti-mutagenic and antioxidant properties​, Grapes work as a brain protecting agen​t and they also are effective in the prevention of diabetes.",
  },
  {
    id: uuid(),
    name: "Red Grapes",
    image: grapesRed,
    duration: 'From Jul. to Sep.',
    details:
      "Resveratrol is a key nutrient in grapes that may offer health benefits. Grapes are a good source of fiber, potassium, and a range of vitamins and other minerals.",
  },
  {
    id: uuid(),
    name: "Peaches",
    image: peache,
    duration: 'From Jul. to Sep.',
    details:
      "Peaches are fuzzy tasty fruits with valuable source of nutrition that helps your body prevent cancer and protects your heart from diseases.",
  },
  {
    id: uuid(),
    name: "Watermelon",
    image: watermelon,
    duration: 'From Jul. to Sep.',
    details:
      "Watermelon is a delicious and refreshing fruit. watermelon is 92% water.The combination of water and fiber means you're eating a good volume of food without a lot of calories.",
  },
  {
    id: uuid(),
    name: "Guave",
    image: guave,
    duration: 'From May. to Jun.',
    details:
      "Guava is powerhouse of nutrients. Guavas are extraordinarily rich in vitamin C and antioxidants that are beneficial for skin.",
  },
  {
    id: uuid(),
    name: "Pomegrenate",
    image: pomegrenate,
    duration: 'From Sep. to Nov.',
    details:
      "Pomegranate is a good source of fibre. It also contains vitamins A, C and E, iron and other antioxidants.",
  },
  {
    id: uuid(),
    name: "Onion Red",
    image: onionRed,
    duration: 'From May. to Aug.',
    details:
      "Red Onions actually contain less sugar than other types. Red onions are one of the best natural sources of quercetin, a bioflavonoid that is particularly well suited for scavenging free radicals.Aside from its antioxidant properties, quercetin has been found to possess cancer fighting, anti-fungal, anti-bacterial, and anti-inflammatory properties.",
  },
  {
    id: uuid(),
    name: "Onion White",
    image: onionWhite,
    duration: 'From Feb. to May.',
    details:
      "White onions are one of the best natural sources of quercetin, a bioflavonoid that is particularly well suited for scavenging free radicals.Aside from its antioxidant properties, quercetin has been found to possess cancer fighting, anti-fungal, anti-bacterial, and anti-inflammatory properties.",
  },
  {
    id: uuid(),
    name: "Onion Gold",
    image: onionGold,
    duration: 'From Feb. to Jul.',
    details:
      "Gold onions are one of the best natural sources of quercetin, a bioflavonoid that is particularly well suited for scavenging free radicals.Aside from its antioxidant properties, quercetin has been found to possess cancer fighting, anti-fungal, anti-bacterial, and anti-inflammatory properties.",
  },
  {
    id: uuid(),
    name: "Garlic",
    image: garlic,
    duration: 'From Apr. to Jun.',
    details:
      "Garlic is low in calories and rich in vitamin C, vitamin B6 and manganese. It also contains trace amounts of various other nutrients. Garlic supplements help prevent and reduce the severity of common illnesses like the flu and common cold.",
  },
  {
    id: uuid(),
    name: "Potato",
    image: potato,
    duration: 'From Jun. to Apr.',
    details:
      "New potatoes have thin, wispy skins and a crisp, waxy texture. They are young potatoes and unlike their fully grown counterparts, they keep their shape once cooked and cut. They are also sweeter because their sugar has not yet converted into starch, and are therefore particularly suited to salads.",
  },
  {
    id: uuid(),
    name: "Potato Sweet",
    image: potatoSweet,
    duration: 'From Jun. to Dec.',
    details:
      "Sweet Potatoes are not only sweet in taste they are sweet for your health. Not only do they taste like dessert, but they provide some surprising health benefits. Among these categories are antioxidants, anti-inflammatory nutrients, and blood sugar-regulating nutrients.",
  },
  {
    id: uuid(),
    name: "Capsicum Mixed",
    image: capsicum,
    duration: 'From Jun. to Dec.',
    details:
      "Bell peppers come in various colors, such as green (unripe), red, yellow, and orange. Green, unripe fruits have a slightly bitter flavor and are not as sweet as those that are fully ripe. Fresh, raw bell peppers are mainly composed of water. The rest is made up of carbohydrates and small amounts of protein and fat.",
  },
  {
    id: uuid(),
    name: "Cabbage",
    image: cabbage,
    duration: 'From Jun. to Dec.',
    details:
      "Cabbage has long been recognised as a health boosting vegetable,it helps to regulate blood pressure. It is high in potassium. Fights anaemia and fatigue. Rich in antioxidants. Keeps eyes healthy. Great for weight loss. Supports youthful and healthy skin.",
  },
  {
    id: uuid(),
    name: "Broccoli",
    image: broccoli,
    duration: 'From Jun. to Dec.',
    details:
      "Brocolli is high in vitamin C and vitamins A, and K, calcium, folate, and iron. It is also fat free, sodium free, and cholesterol free. It contains dietary fiber that is essential in the fight against obesity, heart disease, hypertension, diabetes, high blood cholesterol, and ulcers.",
  },

];
