// Nina Crochet product catalog — photographs are grouped by distinct product.
const PRODUCTS = [
  {
    "id": 1001,
    "name": "Sage Green Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 2000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_111408.jpg",
    "images": [
      "assets/gallery/20261123_111408.jpg",
      "assets/gallery/file_00000000f190820ba0e477325a953996.png"
    ]
  },
  {
    "id": 1002,
    "name": "Brown Textured Short-Sleeve Top",
    "category": "Tops",
    "description": "Handmade crochet top.",
    "price": 3000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_112847.jpg",
    "images": [
      "assets/gallery/20261123_112847.jpg",
      "assets/gallery/table decor2DDD.jpg"
    ]
  },
  {
    "id": 1003,
    "name": "Brown Textured Long-Sleeve Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 3000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_113445.jpg",
    "images": [
      "assets/gallery/20261123_113445.jpg",
      "assets/gallery/table decor2DDD.jpg"
    ]
  },
  {
    "id": 1004,
    "name": "Blue and Rust Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 3000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_113846.jpg",
    "images": [
      "assets/gallery/20261123_113846.jpg",
      "assets/gallery/20261123_114230.jpg"
    ]
  },
  {
    "id": 1005,
    "name": "Brown Striped Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": 3500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_115301.jpg",
    "images": [
      "assets/gallery/20261123_115301.jpg",
      "assets/gallery/20261123_115353.jpg"
    ]
  },
  {
    "id": 1006,
    "name": "Light Grey Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 4000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_120342.jpg",
    "images": [
      "assets/gallery/20261123_120342.jpg",
      "assets/gallery/20261123_120455.jpg"
    ]
  },
  {
    "id": 1007,
    "name": "Pink and Purple Patchwork Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": 4000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_120724.jpg",
    "images": [
      "assets/gallery/20261123_120724.jpg",
      "assets/gallery/20261123_120810.jpg",
      "assets/gallery/20261123_121052.jpg",
      "assets/gallery/20261123_121313.jpg"
    ]
  },
  {
    "id": 1008,
    "name": "Black Textured table decor",
    "category": "Accessories",
    "description": "Handmade crochet accessory.",
    "price": 3000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_121422.jpg",
    "images": [
      "assets/gallery/20261123_121422.jpg",
      "assets/gallery/table decor2DDD.jpg"
    ]
  },
  {
    "id": 1009,
    "name": "Burgundy Crochet Crop",
    "category": "Accessories",
    "description": "Handmade crochet accessory.",
    "price": 1500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_121656.jpg",
    "images": [
      "assets/gallery/20261123_121656.jpg",
      "assets/gallery/table decor2DDD.jpg"
    ]
  },
  {
    "id": 1010,
    "name": "Burgundy Cropped Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 1500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_121748.jpg",
    "images": [
      "assets/gallery/20261123_121748.jpg",
      "assets/gallery/table decor2DDD.jpg"
    ]
  },
  {
    "id": 1011,
    "name": "Blue Striped Crochet Vest",
    "category": "Tops",
    "description": "Handmade crochet top.",
    "price": 900,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_121905.jpg",
    "images": [
      "assets/gallery/20261123_121905.jpg",
      "assets/gallery/20261123_121956.jpg",
      "assets/gallery/20261123_122054.jpg"
    ]
  },
  {
    "id": 1012,
    "name": "Black Button Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": 3500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_122154.jpg",
    "images": [
      "assets/gallery/20261123_122154.jpg",
      "assets/gallery/20261123_122323.jpg"
    ]
  },
  {
    "id": 1013,
    "name": "Men's Brown Stripe Collared-shirt",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": 3500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_122449.jpg",
    "images": [
      "assets/gallery/20261123_122449.jpg",
      "assets/gallery/20261123_122522.jpg",
      "assets/gallery/20261123_122605.jpg"
    ]
  },
  {
    "id": 1014,
    "name": "Grey Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": 3800,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_122707.jpg",
    "images": [
      "assets/gallery/20261123_122707.jpg",
      "assets/gallery/20261123_122908.jpg"
    ]
  },
  {
    "id": 1015,
    "name": "Square Pattern granny coat",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": 7500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_123104.jpg",
    "images": [
      "assets/gallery/20261123_123104.jpg",
      "assets/gallery/20261123_123419.jpg"
    ]
  },
  {
    "id": 1016,
    "name": "Brown-Yellow Textured Long Coat",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": 6500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_123758.jpg",
    "images": [
      "assets/gallery/20261123_123758.jpg",
      "assets/gallery/20261123_123845.jpg"
    ]
  },
  {
    "id": 1017,
    "name": "Olive Green Openwork Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 5500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_124007.jpg",
    "images": [
      "assets/gallery/20261123_124007.jpg",
      "assets/gallery/20261123_124128.jpg"
    ]
  },
  {
    "id": 1018,
    "name": "Blue Crochet Basket",
    "category": "Home Decor",
    "description": "Handmade crochet home decor.",
    "price": 5000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_124459.jpg",
    "images": [
      "assets/gallery/20261123_124459.jpg",
      "assets/gallery/20261123_124506.jpg"
    ]
  },
  {
    "id": 1019,
    "name": "Red and Yellow Crochet Centerpiece with small basket",
    "category": "Home Decor",
    "description": "Handmade crochet home decor.",
    "price": 1500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_124625.jpg",
    "images": [
      "assets/gallery/20261123_124625.jpg",
      "assets/gallery/table decor2DDD.jpg"
    ]
  },
  {
    "id": 1020,
    "name": "Black Mini Crochet Bag",
    "category": "Bags",
    "description": "Handmade crochet bag.",
    "price": 1500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_124741.jpg",
    "images": [
      "assets/gallery/20261123_124741.jpg",
      "assets/gallery/20261123_124805.jpg",
      "assets/gallery/20261123_124807.jpg"
    ]
  },
  {
    "id": 1021,
    "name": "Brown Crochet Handbag",
    "category": "Bags",
    "description": "Handmade crochet bag.",
    "price": 1800,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_124852.jpg",
    "images": [
      "assets/gallery/20261123_124852.jpg",
      "assets/gallery/20261123_124900.jpg"
    ]
  },
  {
    "id": 1022,
    "name": "Brown Crochet Basket Bag",
    "category": "Bags",
    "description": "Handmade crochet bag.",
    "price": 1800,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_125001.jpg",
    "images": [
      "assets/gallery/20261123_125001.jpg",
      "assets/gallery/table decor2DDD.jpg"
    ]
  },
  {
    "id": 1023,
    "name": "Grey Ribbed Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_125124.jpg",
    "images": [
      "assets/gallery/20261123_125124.jpg",
      "assets/gallery/20261123_125205.jpg"
    ]
  },
  {
    "id": 1024,
    "name": "Turquoise Button Vest",
    "category": "Tops",
    "description": "Handmade crochet top.",
    "price": 2000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_125306.jpg",
    "images": [
      "assets/gallery/20261123_125306.jpg",
      "assets/gallery/20261123_125334.jpg"
    ]
  },
  {
    "id": 1025,
    "name": "Grey Sleeveless Crochet Top",
    "category": "Tops",
    "description": "Handmade crochet top.",
    "price": 2000,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_125529.jpg",
    "images": [
      "assets/gallery/20261123_125529.jpg",
      "assets/gallery/20261123_125553.jpg"
    ]
  },
  {
    "id": 1026,
    "name": "Red and Yellow Round Table Mats",
    "category": "Home Decor",
    "description": "Handmade crochet home decor.",
    "price": 500,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/circle table1.jpg",
    "images": [
      "assets/gallery/circle table1.jpg",
      "assets/gallery/circle table2.jpg"
    ]
  },
  {
    "id": 1027,
    "name": "Pink Fringed Crochet Scarf",
    "category": "Accessories",
    "description": "Handmade crochet accessory.",
    "price": 700,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/scarf1.jpg",
    "images": [
      "assets/gallery/scarf1.jpg",
      "assets/gallery/scarf2.jpg"
    ]
  },
  {
    "id": 1028,
    "name": "Black and White Crochet Table Decor",
    "category": "Home Decor",
    "description": "Handmade crochet home decor.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/table decor1.jpg",
    "images": [
      "assets/gallery/table decor1.jpg",
      "assets/gallery/table decor2.jpg"
    ]
  },
    {
    "id": 10132,
    "name": "black-button-front-crochet-cardigan",
    "category": "Home Decor",
    "description": "Handmade crochet black-button-front-crochet-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/black-button-front-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/black-button-front-crochet-cardigan.jpg",
      "assets/gallery/table desdsasacor2.jpg"
    ]
  },
    {
    "id": 1333,
    "name": "black-cream-checkered-crochet-vest",
    "category": "Home Decor",
    "description": "Handmade crochet black-cream-checkered-crochet-vest.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/black-cream-checkered-crochet-vest.jpg",
    "images": [
      "assets/gallery/black-cream-checkered-crochet-vest.jpg",
      "assets/gallery/table decodsdsr2.jpg"
    ]
  },
    {
    "id": 1228,
    "name": "black-gray-striped-crochet-cardigan",
    "category": "Home Decor",
    "description": "Handmade crochet black-gray-striped-crochet-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/black-gray-striped-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/black-gray-striped-crochet-cardigan.jpg",
      "assets/gallery/tableertyu decor2.jpg"
    ]
  },
    {
    "id": 1876,
    "name": "black-hooded-crochet-sweater",
    "category": "Home Decor",
    "description": "Handmade crochet black-hooded-crochet-sweater.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/black-hooded-crochet-sweater.jpg",
    "images": [
      "assets/gallery/black-hooded-crochet-sweater.jpg",
      "assets/gallery/table dedwqacor2.jpg"
    ]
  },
    {
    "id": 1574,
    "name": "black-long-sleeve-crochet-cardigan",
    "category": "Home Decor",
    "description": "Handmade crochet black-long-sleeve-crochet-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/black-long-sleeve-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/black-long-sleeve-crochet-cardigan.jpg",
      "assets/gallery/table decdssssor2.jpg"
    ]
  },
    {
    "id": 1909,
    "name": "blue-baby-crochet-romper-and-hat-set",
    "category": "Home Decor",
    "description": "Handmade crochet blue-baby-crochet-romper-and-hat-set.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/blue-baby-crochet-romper-and-hat-set.jpg",
    "images": [
      "assets/gallery/blue-baby-crochet-romper-and-hat-set.jpg",
      "assets/gallery/table devvvdddcor2.jpg"
    ]
  },
    {
    "id": 1000,
    "name": "blue-heart-applique-crochet-cardigan",
    "category": "Home Decor",
    "description": "Handmade crochet blue-heart-applique-crochet-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/blue-heart-applique-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/blue-heart-applique-crochet-cardigan.jpg",
      "assets/gallery/tablsewse decor2.jpg"
    ]
  },
    {
    "id": 2000,
    "name": "blue-textured-crochet-sweater",
    "category": "Home Decor",
    "description": "Handmade crochet blue-textured-crochet-sweater.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/blue-textured-crochet-sweater.jpg",
    "images": [
      "assets/gallery/blue-textured-crochet-sweater.jpg",
      "assets/gallery/table decdvddor2.jpg"
    ]
  },
    {
    "id": 1100,
    "name": "brown-textured-crochet-cardigan",
    "category": "Home Decor",
    "description": "Handmade brown-textured-crochet-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/brown-textured-crochet-cardigan.webp",
    "images": [
      "assets/gallery/brown-textured-crochet-cardigan.webp",
      "assets/gallery/table decor2DDD.jpg"
    ]
  },
    {
    "id": 1111,
    "name": "brown-crochet-storage-basket",
    "category": "Home Decor",
    "description": "Handmade brown-crochet-storage-basket.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/1.jpg",
    "images": [
      "assets/gallery/1.jpg",
      "assets/gallery/brown-crochet-storage-basket.jpg"
    ]
  },
    {
    "id": 1110,
    "name": "burgundy-openwork-crochet-sweater",
    "category": "Home Decor",
    "description": "Handmade crochet burgundy-openwork-crochet-sweater.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/burgundy-openwork-crochet-sweater.jpg",
    "images": [
      "assets/gallery/burgundy-openwork-crochet-sweater.jpg",
      "assets/gallery/table decor2DD.jpg"
    ]
  },
    {
    "id": 1010,
    "name": "cream-brown-baby-cardigan-with-headband",
    "category": "Home Decor",
    "description": "Handmade crochet cream-brown-baby-cardigan-with-headband.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/cream-brown-baby-cardigan-with-headband.jpg",
    "images": [
      "assets/gallery/cream-brown-baby-cardigan-with-headband.jpg",
      "assets/gallery/table decor2DDDDDD.jpg"
    ]
  },
    {
    "id": 1666,
    "name": "dark-brown-long-sleeve-cardigan",
    "category": "Home Decor",
    "description": "Handmade crochet dark-brown-long-sleeve-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/dark-brown-long-sleeve-cardigan.jpg",
    "images": [
      "assets/gallery/dark-brown-long-sleeve-cardigan.jpg",
      "assets/gallery/table decor2DDDD.jpg"
    ]
  },
    {
    "id": 1998,
    "name": "lavender-short-sleeve-crochet-top",
    "category": "Home Decor",
    "description": "Handmade crochet lavender-short-sleeve-crochet-top.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/lavender-short-sleeve-crochet-top.jpg",
    "images": [
      "assets/gallery/lavender-short-sleeve-crochet-top.jpg",
      "assets/gallery/light-blue-short-sleeve-crochet-top.jpg"
    ]
  },
    {
    "id": 1227,
    "name": "light-gray-hooded-crochet-sweater",
    "category": "Home Decor",
    "description": "Handmade crochet light-gray-hooded-crochet-sweater.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/light-gray-hooded-crochet-sweater.jpg",
    "images": [
      "assets/gallery/light-gray-hooded-crochet-sweater.jpg",
      "assets/gallery/table decor2DDDDDDDDD.jpg"
    ]
  },
    {
    "id": 1108,
    "name": "navy-blue-ribbed-crochet-sweater",
    "category": "Home Decor",
    "description": "Handmade crochet navy-blue-ribbed-crochet-sweater.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/navy-blue-ribbed-crochet-sweater.jpg",
    "images": [
      "assets/gallery/navy-blue-ribbed-crochet-sweater.jpg",
      "assets/gallery/table decor2SSS.jpg"
    ]
  },
    {
    "id": 1897,
    "name": "olive-green-crochet-crop-top",
    "category": "Home Decor",
    "description": "Handmade crochet olive-green-crochet-crop-top.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/olive-green-crochet-crop-top.jpg",
    "images": [
      "assets/gallery/olive-green-crochet-crop-top.jpg",
      "assets/gallery/table decorAAAAA2.jpg"
    ]
  },
    {
    "id": 2500,
    "name": "periwinkle-blue-crochet-cardigan",
    "category": "Home Decor",
    "description": "Handmade crochet periwinkle-blue-crochet-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/periwinkle-blue-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/periwinkle-blue-crochet-cardigan.jpg",
      "assets/gallery/table decor2DSDS.jpg"
    ]
  },
    {
    "id": 9808,
    "name": "pink-blue-multicolor-crochet-cardigan",
    "category": "Home Decor",
    "description": "Handmade crochetpink-blue-multicolor-crochet-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/pink-blue-multicolor-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/pink-blue-multicolor-crochet-cardigan.jpg",
      "assets/gallery/table decorDADAAF2.jpg"
    ]
  },
    {
    "id": 9807,
    "name": "pink-burgundy-baby-crochet-sweater",
    "category": "Home Decor",
    "description": "Handmade crochet pink-burgundy-baby-crochet-sweater.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/pink-burgundy-baby-crochet-sweater.jpg",
    "images": [
      "assets/gallery/pink-burgundy-baby-crochet-sweater.jpg",
      "assets/gallery/tablDDDDe decor2.jpg"
    ]
  },
    {
    "id": 9804,
    "name": "purple-multicolor-baby-crochet-sweater",
    "category": "Home Decor",
    "description": "Handmade crochet purple-multicolor-baby-crochet-sweater.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/purple-multicolor-baby-crochet-sweater.jpg",
    "images": [
      "assets/gallery/purple-multicolor-baby-crochet-sweater.jpg",
      "assets/gallery/taSSSSSSSSSSble decor2.jpg"
    ]
  },
    {
    "id": 7600,
    "name": "purple-pink-blue-baby-crochet-sweater",
    "category": "Home Decor",
    "description": "purple-pink-blue-baby-crochet-sweater.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/purple-pink-blue-baby-crochet-sweater.jpg",
    "images": [
      "assets/gallery/purple-pink-blue-baby-crochet-sweaterSASASA.jpg",
      "assets/gallery/tableSASASA decor2.jpg"
    ]
  },
    {
    "id": 5400,
    "name": "purple-white-long-crochet-cardigan",
    "category": "Home Decor",
    "description": "Handmade crochet purple-white-long-crochet-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/purple-white-long-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/purple-white-long-crochet-cardigan.jpg",
      "assets/gallery/table dsdsdsecor2.jpg"
    ]
  },
    {
    "id": 3200,
    "name": "red-crochet-poncho",
    "category": "Home Decor",
    "description": "Handmade crochet red-crochet-poncho.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/red-crochet-poncho.jpg",
    "images": [
      "assets/gallery/red-crochet-poncho.jpg",
      "assets/gallery/table decovvdvdr2.jpg"
    ]
  },
    {
    "id": 4890,
    "name": "white-heart-detail-crochet-cardigan",
    "category": "Home Decor",
    "description": "Handmade crochet white-heart-detail-crochet-cardigan.",
    "price": 2300,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/white-heart-detail-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/white-heart-detail-crochet-cardigan.jpg",
      "assets/gallery/table decosssssssr2.jpg"
    ]
  }
];
