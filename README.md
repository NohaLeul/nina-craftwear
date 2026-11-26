# Craftwear by Nina Website

A responsive, multi-page crochet shop and learning website built with HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — Home
- `about.html` — About Us
- `tutorials.html` — Basic, Intermediate and Advanced learning paths with quizzes
- `shop.html` — 28 distinct products from the supplied gallery, filters, cart and email order preparation
- `contact.html` — Contact details and email-preparing form
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Service

## Run locally
1. Extract the ZIP folder.
2. Open `index.html` in a modern browser.
3. For best results, use a simple local web server (for example VS Code Live Server) so all relative assets load consistently.

## Edit products
Open `js/products.js` to edit the catalog. Each product has a name, category, short visual description, main image and an array of additional photographs grouped with that product. Prices, sizes and yarn types are not specified because they were not confirmed in the supplied website or photographs; the shop displays “Contact for price”.

The catalog contains 28 visually distinct products grouped from 54 supplied individual product photographs. Confirm prices, availability, sizing and materials with the business before publishing.

## Replace images
- Logo: `assets/logo/nina-crochet-logo.png`
- Actual product photographs: `assets/gallery/`
- AI-generated contact sheet: `assets/gallery/ai-product-contact-sheet.png` (not used as a product listing image)

The shop catalog uses the individual supplied photographs, with alternate views grouped by product. The older illustrative files in `assets/products/` remain in the project for existing homepage category and promotional sections.

## Contact settings
The email recipient is currently `craftwearbynina@gmail.com` in `js/shop.js` and `js/main.js`. Replace it if needed. The phone and social links are included in the HTML pages:
- Phone / WhatsApp: +251 985 472 850
- Instagram: https://www.instagram.com/craftware_by_nina/
- TikTok: https://www.tiktok.com/@ninascrochet

The Telegram phone deep link may not resolve on every device; visitors can also search the phone number in Telegram.

## Ordering limitations
The cart and checkout form work in the browser and store cart data in local storage. Checkout creates a `mailto:` draft with the order details. The visitor must send the email manually. This is not a payment gateway, inventory system or automatic order-submission backend.

## Tutorial progress limitations
Tutorial completion and quiz passes are stored in browser local storage on the current device and browser. Progress is not linked to a student account and does not sync across devices. The quiz pass threshold is 70% by default in `js/tutorials.js`.

## Before publishing
- Verify product prices, availability, materials and sizes with the business.
- Confirm email address, social links and phone contact.
- Review Privacy Policy and Terms of Service for the business and applicable local requirements.
- Add a backend or trusted commerce platform if you need secure customer accounts, payment processing, order storage, inventory or newsletter subscriptions.


## Social links
- Instagram: https://www.instagram.com/craftware_by_nina/
- TikTok: https://www.tiktok.com/@ninascrochet
- YouTube: https://www.youtube.com/@netsizeru6350

## Email forms
Contact and order forms open a prepared Gmail compose page in the visitor's current browser. The visitor must review and press Send; the website does not send email automatically.
