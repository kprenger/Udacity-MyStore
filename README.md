# Udacity-MyStore

This project is part of the Udacity Full Stack JavaScript Developer Nanodegree. The intent was to create a Storefront Web Front-End using Angular. It allows a user to browse products, add them to a cart, and checkout. It uses local JSON data and does not connect to a backend.

## Prereqs

- Node
  - I built and tested with v17.7.1
- Angular CLI
  - I built and tested with v15.0.4

## Setup

1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary packages.
3. Run `ng serve` to run the web server locally.
4. Once successfully running, navigate to `http://localhost:4200/` in your browser of choice.
   - I built and tested with Google Chrome Version 109.0.5414.87.

## Technical Overview

The app consists of the following structure:

- Components
  - Nav Bar
  - Product List
    - Product Item
  - Product Detail
  - Cart
    - Cart Item
  - Confirmation
- Services
  - Product
  - Cart
- Models
  - Product
  - Cart Item

### Components

#### Nav Bar

The navigation bar allows you to easily navigate between the two main screens of the app (Product List & Cart). It is persistent at the top of the web app.

#### Product List

This can be accessed at the `/products` route (`/` will redirect here as well). It displays a list of available products that you can add to your cart. If you try to add more than 8 items total to your cart, you will receive an error message stating that your cart is too full. This is to simulate the idea of not having enough stock on-hand or limiting the amount of quantity a user can purchase.

The Product List is made up of a list of **Product Item** components.

#### Product Details

In clicking the image of a specific product in the **Product List**, you are brought to the Product Details screen (`/products/:id` route). Here, you see more information about the product and can also add it to the Cart.

#### Cart

The Cart page (`/cart`) allows you to see your current cart. If it is empty, it will tell you. You can modify the quantity of items in the cart (between 1 and 8 per item to simulate low stock or quantity restrictions), or remove an item entirely. There is a form with input validations that allows you to complete your purchase when filled out with correct information (error messages are displayed if the data is incorrect).

The Cart is made up of **Cart Item** components which are child components of the Cart itself and use Input/Output decorators accordingly to pass information around.

#### Confirmation

The confirmation screen (`/confirmation`) is a final way for a user to see their high-level order information.

### Services

#### Product

Used to get Product information (either the full list or a single item) following an Observable pattern.

#### Cart

Used to add and modify the current Cart contents.

### Models

#### Product

A model representation of a Product. It consists of an id, name, description, and price.

#### Cart Item

A model representation of a Cart Item. It consists of a Product and a quantity.
