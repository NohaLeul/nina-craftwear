// Craftwear by Nina product catalog — supplied product photographs grouped by product.
const PRODUCTS = [
  {
    "id": 1001,
    "name": "Sage Green Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 2000,
    "size": "S",
    "yarn": "Polyester",
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
    "size": "S",
    "yarn": "Acrylic",
    "image": "assets/gallery/20261123_112847.jpg",
    "images": [
      "assets/gallery/20261123_112847.jpg"
    ]
  },
  {
    "id": 1003,
    "name": "Brown Textured Long-Sleeve Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 3000,
    "size": "S",
    "yarn": "polyester",
    "image": "assets/gallery/20261123_113445.jpg",
    "images": [
      "assets/gallery/20261123_113445.jpg"
    ]
  },
  {
    "id": 1004,
    "name": "Blue and Rust Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 3000,
    "size": "S",
    "yarn": "polyester",
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
    "size": "M",
    "yarn": "polyester",
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
    "size": "M",
    "yarn": "Acrylic",
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
    "size": "S",
    "yarn": "Acrylic",
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
    "category": "Home Decor",
    "description": "Handmade crochet accessory.",
    "price": 3000,
    "size": "M",
    "yarn": "polyester",
    "image": "assets/gallery/20261123_121422.jpg",
    "images": [
      "assets/gallery/20261123_121422.jpg"
    ]
  },
  {
    "id": 1009,
    "name": "Burgundy Crochet Crop",
    "category": "Tops",
    "description": "Handmade crochet accessory.",
    "price": 1500,
    "size": "S",
    "yarn": "Acrylic",
    "image": "assets/gallery/20261123_121656.jpg",
    "images": [
      "assets/gallery/20261123_121656.jpg"
    ]
  },
  {
    "id": 1010,
    "name": "Burgundy Cropped Sweater",
    "category": "Tops",
    "description": "Handmade crochet sweater.",
    "price": 1500,
    "size": "S",
    "yarn": "polyester",
    "image": "assets/gallery/20261123_121748.jpg",
    "images": [
      "assets/gallery/20261123_121748.jpg"
    ]
  },
  {
    "id": 1011,
    "name": "Blue Striped Crochet Vest",
    "category": "Tops",
    "description": "Handmade crochet top.",
    "price": 900,
    "size": "S",
    "yarn": "Acrylic",
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
    "size": "S",
    "yarn": "Acrylic",
    "image": "assets/gallery/20261123_122154.jpg",
    "images": [
      "assets/gallery/20261123_122154.jpg",
      "assets/gallery/20261123_122323.jpg"
    ]
  },
  {
    "id": 1013,
    "name": "Men's Brown Stripe Collared-shirt",
    "category": "Tops",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": 3500,
    "size": "L",
    "yarn": "polyester",
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
    "size": "XL",
    "yarn": "polyester",
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
    "yarn": "polyester",
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
    "yarn": "polyester",
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
    "yarn": "polyester",
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
    "yarn": "polyester",
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
    "yarn": "Acrylic",
    "image": "assets/gallery/20261123_124625.jpg",
    "images": [
      "assets/gallery/20261123_124625.jpg"
    ]
  },
  {
    "id": 1020,
    "name": "Black Mini Crochet Bag",
    "category": "Bags",
    "description": "Handmade crochet bag.",
    "price": 1500,
    "size": "Not specified",
    "yarn": "Acrylic",
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
    "yarn": "Acrylic",
    "image": "assets/gallery/20261123_124852.jpg",
    "images": [
      "assets/gallery/20261123_124852.jpg",
      "assets/gallery/20261123_124900.jpg"
    ]
  },
  {
    "id": 1022,
    "name": "Brown Crochet Basket Bag",
    "category": "Home Decor",
    "description": "Handmade crochet bag.",
    "price": 1800,
    "size": "Not specified",
    "yarn": "Acrylic",
    "image": "assets/gallery/20261123_125001.jpg",
    "images": [
      "assets/gallery/20261123_125001.jpg"
    ]
  },
  {
    "id": 1023,
    "name": "Grey Ribbed Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": 2300,
    "size": "S",
    "yarn": "polyester",
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
    "size": "S",
    "yarn": "polyester",
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
    "size": "M",
    "yarn": "Acrylic",
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
    "yarn": "polyester",
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
    "yarn": "Acrylic",
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
    "size": "One Size",
    "yarn": "Acrylic",
    "image": "assets/gallery/table decor1.jpg",
    "images": [
      "assets/gallery/table decor1.jpg",
      "assets/gallery/table decor2.jpg"
    ]
  },
  {
    "id": 10132,
    "name": "Black Button Front Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet black-button-front-crochet-cardigan.",
    "price": 2300,
    "size": "M",
    "yarn": "Acrylic",
    "image": "assets/gallery/black-button-front-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/black-button-front-crochet-cardigan.jpg"
    ]
  },
  {
    "id": 1333,
    "name": "Black Cream Checkered Crochet Vest",
    "category": "Tops",
    "description": "Handmade crochet black-cream-checkered-crochet-vest.",
    "price": 2300,
    "size": "S",
    "yarn": "polyester",
    "image": "assets/gallery/black-cream-checkered-crochet-vest.jpg",
    "images": [
      "assets/gallery/black-cream-checkered-crochet-vest.jpg"
    ]
  },
  {
    "id": 1228,
    "name": "Black Gray Striped Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet black-gray-striped-crochet-cardigan.",
    "price": 2300,
    "size": "XL",
    "yarn": "Acrylic",
    "image": "assets/gallery/black-gray-striped-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/black-gray-striped-crochet-cardigan.jpg"
    ]
  },
  {
    "id": 1876,
    "name": "Black Hooded Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet black-hooded-crochet-sweater.",
    "price": 2300,
    "size": "M",
    "yarn": "Acrylic",
    "image": "assets/gallery/black-hooded-crochet-sweater.jpg",
    "images": [
      "assets/gallery/black-hooded-crochet-sweater.jpg"
    ]
  },
  {
    "id": 1574,
    "name": "Black Long Sleeve Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet black-long-sleeve-crochet-cardigan.",
    "price": 2300,
    "size": "M",
    "yarn": "Acrylic",
    "image": "assets/gallery/black-long-sleeve-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/black-long-sleeve-crochet-cardigan.jpg"
    ]
  },
  {
    "id": 1909,
    "name": "Blue Baby Crochet Romper And Hat Set",
    "category": "Accessories",
    "description": "Handmade crochet blue-baby-crochet-romper-and-hat-set.",
    "price": 2300,
    "size": "One Size",
    "yarn": "polyester",
    "image": "assets/gallery/blue-baby-crochet-romper-and-hat-set.jpg",
    "images": [
      "assets/gallery/blue-baby-crochet-romper-and-hat-set.jpg"
    ]
  },
  {
    "id": 1000,
    "name": "Blue Heart Applique Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet blue-heart-applique-crochet-cardigan.",
    "price": 2300,
    "size": "S",
    "yarn": "polyester",
    "image": "assets/gallery/blue-heart-applique-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/blue-heart-applique-crochet-cardigan.jpg"
    ]
  },
  {
    "id": 2000,
    "name": "Blue Textured Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet blue-textured-crochet-sweater.",
    "price": 2300,
    "size": "S",
    "yarn": "Acrylic",
    "image": "assets/gallery/blue-textured-crochet-sweater.jpg",
    "images": [
      "assets/gallery/blue-textured-crochet-sweater.jpg"
    ]
  },
  {
    "id": 1100,
    "name": "Brown Textured Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade brown-textured-crochet-cardigan.",
    "price": 2300,
    "size": "M",
    "yarn": "Acrylic",
    "image": "assets/gallery/brown-textured-crochet-cardigan.webp",
    "images": [
      "assets/gallery/brown-textured-crochet-cardigan.webp"
    ]
  },
  {
    "id": 1111,
    "name": "Brown Crochet Storage Basket",
    "category": "Home Decor",
    "description": "Handmade brown-crochet-storage-basket.",
    "price": 2300,
    "size": "Acrylic",
    "yarn": "Not specified",
    "image": "assets/gallery/1.jpg",
    "images": [
      "assets/gallery/1.jpg",
      "assets/gallery/brown-crochet-storage-basket.jpg"
    ]
  },
  {
    "id": 1110,
    "name": "Burgundy Openwork Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet burgundy-openwork-crochet-sweater.",
    "price": 2300,
    "size": "S",
    "yarn": "polyester",
    "image": "assets/gallery/burgundy-openwork-crochet-sweater.jpg",
    "images": [
      "assets/gallery/burgundy-openwork-crochet-sweater.jpg"
    ]
  },
  {
    "id": 1010,
    "name": "Cream Brown Baby Cardigan With Headband",
    "category": "Cardigans",
    "description": "Handmade crochet cream-brown-baby-cardigan-with-headband.",
    "price": 2300,
    "size": "One Size",
    "yarn": "Acrylic",
    "image": "assets/gallery/cream-brown-baby-cardigan-with-headband.jpg",
    "images": [
      "assets/gallery/cream-brown-baby-cardigan-with-headband.jpg"
    ]
  },
  {
    "id": 1666,
    "name": "Dark Brown Long Sleeve Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet dark-brown-long-sleeve-cardigan.",
    "price": 2300,
    "size": "XXL",
    "yarn": "Acrylic",
    "image": "assets/gallery/dark-brown-long-sleeve-cardigan.jpg",
    "images": [
      "assets/gallery/dark-brown-long-sleeve-cardigan.jpg"
    ]
  },
  {
    "id": 1998,
    "name": "Lavender Short Sleeve Crochet Top",
    "category": "Tops",
    "description": "Handmade crochet lavender-short-sleeve-crochet-top.",
    "price": 2300,
    "size": "m",
    "yarn": "Not specified",
    "image": "assets/gallery/lavender-short-sleeve-crochet-top.jpg",
    "images": [
      "assets/gallery/lavender-short-sleeve-crochet-top.jpg"
    ]
  },
  {
    "id": 1227,
    "name": "Light Gray Hooded Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet light-gray-hooded-crochet-sweater.",
    "price": 2300,
    "size": "M",
    "yarn": "Acrylic",
    "image": "assets/gallery/light-gray-hooded-crochet-sweater.jpg",
    "images": [
      "assets/gallery/light-gray-hooded-crochet-sweater.jpg"
    ]
  },
  {
    "id": 1108,
    "name": "Navy Blue Ribbed Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet navy-blue-ribbed-crochet-sweater.",
    "price": 2300,
    "size": "L",
    "yarn": "Acrylic",
    "image": "assets/gallery/navy-blue-ribbed-crochet-sweater.jpg",
    "images": [
      "assets/gallery/navy-blue-ribbed-crochet-sweater.jpg"
    ]
  },
  {
    "id": 1897,
    "name": "Olive Green Crochet Crop Top",
    "category": "Tops",
    "description": "Handmade crochet olive-green-crochet-crop-top.",
    "price": 2300,
    "size": "One Size",
    "yarn": "polyester",
    "image": "assets/gallery/olive-green-crochet-crop-top.jpg",
    "images": [
      "assets/gallery/olive-green-crochet-crop-top.jpg"
    ]
  },
  {
    "id": 2500,
    "name": "Periwinkle Blue Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet periwinkle-blue-crochet-cardigan.",
    "price": 2300,
    "size": "M",
    "yarn": "polyester",
    "image": "assets/gallery/periwinkle-blue-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/periwinkle-blue-crochet-cardigan.jpg"
    ]
  },
  {
    "id": 9808,
    "name": "Pink Blue Multicolor Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochetpink-blue-multicolor-crochet-cardigan.",
    "price": 2300,
    "size": "M",
    "yarn": "polyester",
    "image": "assets/gallery/pink-blue-multicolor-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/pink-blue-multicolor-crochet-cardigan.jpg"
    ]
  },
  {
    "id": 9807,
    "name": "Pink Burgundy Baby Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet pink-burgundy-baby-crochet-sweater.",
    "price": 2300,
    "size": "One Size",
    "yarn": "Acrylic",
    "image": "assets/gallery/pink-burgundy-baby-crochet-sweater.jpg",
    "images": [
      "assets/gallery/pink-burgundy-baby-crochet-sweater.jpg"
    ]
  },
  {
    "id": 9804,
    "name": "Purple Multicolor Baby Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet purple-multicolor-baby-crochet-sweater.",
    "price": 2300,
    "size": "One Size",
    "yarn": "polyester",
    "image": "assets/gallery/purple-multicolor-baby-crochet-sweater.jpg",
    "images": [
      "assets/gallery/purple-multicolor-baby-crochet-sweater.jpg"
    ]
  },
  {
    "id": 7600,
    "name": "Purple Pink Blue Baby Crochet Sweater",
    "category": "Sweaters",
    "description": "purple-pink-blue-baby-crochet-sweater.",
    "price": 2300,
    "size": "L",
    "yarn": "Acrylic",
    "image": "assets/gallery/purple-pink-blue-baby-crochet-sweater.jpg",
    "images": [
      "assets/gallery/purple-pink-blue-baby-crochet-sweater.jpg"
    ]
  },
  {
    "id": 5400,
    "name": "Purple White Long Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet purple-white-long-crochet-cardigan.",
    "price": 2300,
    "size": "M",
    "yarn": "Acrylic",
    "image": "assets/gallery/purple-white-long-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/purple-white-long-crochet-cardigan.jpg"
    ]
  },
  {
    "id": 3200,
    "name": "Red Crochet Poncho",
    "category": "Accessories",
    "description": "Handmade crochet red-crochet-poncho.",
    "price": 2300,
    "size": "M",
    "yarn": "Acrylic",
    "image": "assets/gallery/red-crochet-poncho.jpg",
    "images": [
      "assets/gallery/red-crochet-poncho.jpg"
    ]
  },
  {
    "id": 4890,
    "name": "White Heart Detail Crochet Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet white-heart-detail-crochet-cardigan.",
    "price": 2300,
    "size": "S",
    "yarn": "Acrylic",
    "image": "assets/gallery/white-heart-detail-crochet-cardigan.jpg",
    "images": [
      "assets/gallery/white-heart-detail-crochet-cardigan.jpg"
    ]
  }
];
