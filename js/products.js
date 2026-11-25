// Nina Crochet product catalog — photographs are grouped by distinct product.
const PRODUCTS = [
  {
    "id": 1001,
    "name": "Sage Green Crochet Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": null,
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
    "price": null,
    "size": "Not specified",
    "yarn": "Not specified",
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
    "price": null,
    "size": "Not specified",
    "yarn": "Not specified",
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
    "price": null,
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
    "price": null,
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
    "price": null,
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
    "price": null,
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
    "name": "Black Textured Scarf",
    "category": "Accessories",
    "description": "Handmade crochet accessory.",
    "price": null,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_121422.jpg",
    "images": [
      "assets/gallery/20261123_121422.jpg"
    ]
  },
  {
    "id": 1009,
    "name": "Burgundy Crochet Scarf",
    "category": "Accessories",
    "description": "Handmade crochet accessory.",
    "price": null,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/20261123_121656.jpg",
    "images": [
      "assets/gallery/20261123_121656.jpg"
    ]
  },
  {
    "id": 1010,
    "name": "Burgundy Cropped Sweater",
    "category": "Sweaters",
    "description": "Handmade crochet sweater.",
    "price": null,
    "size": "Not specified",
    "yarn": "Not specified",
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
    "price": null,
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
    "price": null,
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
    "name": "Brown Crochet Long Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": null,
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
    "price": null,
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
    "name": "Black and White Patterned Cardigan",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": null,
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
    "name": "Brown Textured Long Coat",
    "category": "Cardigans",
    "description": "Handmade crochet cardigan or outer layer.",
    "price": null,
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
    "price": null,
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
    "price": null,
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
    "name": "Red and Yellow Crochet Centerpiece",
    "category": "Home Decor",
    "description": "Handmade crochet home decor.",
    "price": null,
    "size": "Not specified",
    "yarn": "Not specified",
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
    "price": null,
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
    "price": null,
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
    "price": null,
    "size": "Not specified",
    "yarn": "Not specified",
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
    "price": null,
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
    "price": null,
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
    "price": null,
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
    "price": null,
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
    "price": null,
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
    "price": null,
    "size": "Not specified",
    "yarn": "Not specified",
    "image": "assets/gallery/table decor1.jpg",
    "images": [
      "assets/gallery/table decor1.jpg",
      "assets/gallery/table decor2.jpg"
    ]
  }
];
