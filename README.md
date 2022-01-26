# Volvo Coding assignment

## Table of Contents

1. [Purpose](#purpose)
2. [Requirements](#requirements)
3. [Technologies Used](#technologies-started)
3. [Getting Started](#getting-started)
4. [Subgraphs Application Structure](#application-structure)
6. [Queries](#queries)
7. [Mutations](#Mutations)


## Purpose

To create an order management flow for a customer based on the business requirements. Its been built in an apollo federation server  a super graph router and three subgraphs customer, order, product.

## Requirements

- node
- npm
- docker-desktop
- docker-compose

## Technologies Used

- Node Js
- Typescript
- Graph QL
- Apollo Federated Server(Microservices)
- MySql
- Sequelize
- Docker
- Jest

## Getting Started and Commands

To get Started please follow the below Requirements
[requirements](#requirements), you can follow these steps to get the project up and running:

```window
$ git clone https://github.com/karthick-krishnan/Viaplay-sample-task.git
$ docker-compose up --build -d                  # Builds, deploy and create containers for each microservices 
$ docker-compose down                           # Turns down all the microservers
$ docker-compose logs                           # check all the docker compose logs
$ docker system prune                           # remove all the images from docker
```

## Test Commands
npm run test 
Note : Test cases are generated indivitually on each subgraphg. So to generate test cases go to a particular subgraph 
for example: cd subgraphs/order
             npm run test



# Application Runtimes
1) Database runs at host address "35.244.14.142".
2) For other Micro services check the ports in config folder. 

# Database Scripts
1) To generate database scripts install sequelize-cli create:
1) Create migration script example "npx sequelize-cli migration:create --name fileName". This command would create a migration file

# Troubleshooting
1) To clean up the images 
    a) Run commnad "docker image prune"
1) If containers are not spining up properly.
    -- Delete the volume "docker volume prune"
    -- Delete the volume "docker system prune"


##  Subgraphs Application Structure
```
├── config                   # module which contains the db config details
├── dao                      # module which contains all the db related operations such as transactions, models etc
├── services                 # Module which contains the core business logic and all queries related activities such as Queries, Mutations
├── types                    # Module which contains the typescript types
├── utils                    # Application level utility methods/logics
├── app.ts                   # File which contains subgraph initializations
├── *.graphql                # File which contains the graphql type definitions
├── ../test                  # Test cases for each subgraph are written here
```


List of all services


## Queries

## Customer - Query to get the list of customers

- Query: `query Query {
  getAllCustomers {
    address
    customerId
    emailId
    name
    phone
  }
}`

- Response Json body for the above query (Example):

```json
{
  "data": {
    "getAllCustomers": [
      {
        "address": "houston",
        "customerId": "123e4567-e89b-12d3-a456-426655440000",
        "emailId": "newcustomer@gmail.com",
        "name": "new customer",
        "phone": "1234234"
      },
      {
        "address": "houston",
        "customerId": "123e4567-e89b-12d3-a456-426655440012",
        "emailId": null,
        "name": "new customer1",
        "phone": null
      }
    ]
  }
}

```

## Product - Query to get the list of products

- Query: `query Query {
  allProducts {
    price
    name
    prodId
    qty
  }
}`

- Response Json body for the above query (Example):

```json
{
  "data": {
    "allProducts": [
      {
        "price": 12,
        "name": "karthick",
        "prodId": "3aec7e8a-9c9e-493e-9b1b-abb33d4a5ca8",
        "qty": 2
      },
      {
        "price": 13,
        "name": "karthick",
        "prodId": "49230094-ad3d-466f-b8cc-33a127e4e6b5",
        "qty": 1
      },
      {
        "price": 12,
        "name": "kar",
        "prodId": "7020ede9-4a3c-48d7-a52c-863bc769bf80",
        "qty": 1
      },
      {
        "price": 10.12,
        "name": "testproduct",
        "prodId": "91b7f732-61a5-4387-a0a9-19bc6248bf56",
        "qty": 2
      },
      {
        "price": 1.2,
        "name": "newproduct",
        "prodId": "bd2b4283-aadf-49f3-833d-8cbf83bec6d9",
        "qty": 2
      },
      {
        "price": 12,
        "name": "ash",
        "prodId": "c65226bd-63fe-4b7b-83fe-6f79faa6d94f",
        "qty": 1
      }
    ]
  }
}

```


## Order - Query to get the order with the orderId

- Query: `query Order($orderId: ID!) {
  order(orderId: "0571533b-e535-45ff-8c66-13c7057c4e68") {
    customer {
      address
      customerId
      emailId
      name
    }
    deliveryDate
    orderId
    products {
      prodId
      price
    }
    totalPrice
  }
}`

- Response Json body for the above query (Example):

```json
{
  "data": {
    "order": {
      "customer": {
        "address": "houston",
        "customerId": "123e4567-e89b-12d3-a456-426655440000",
        "emailId": "newcustomer@gmail.com",
        "name": "new customer"
      },
      "deliveryDate": "664502400000",
      "orderId": "0571533b-e535-45ff-8c66-13c7057c4e68",
      "products": [
        {
          "prodId": "bd2b4283-aadf-49f3-833d-8cbf83bec6d9",
          "price": 1.2
        }
      ],
      "totalPrice": 1.2
    }
  }
}
```

## Product - Query to get the product by product id

- Query: `query Order($orderId: ID!, $prodId: ID!) {
  product(prodId: "3aec7e8a-9c9e-493e-9b1b-abb33d4a5ca8") {
    name
    price
    prodId
    qty
  }`

- Response Json body for the above query (Example):

```json
{
  "data": {
    "product": {
      "name": "karthick",
      "price": 12,
      "prodId": "3aec7e8a-9c9e-493e-9b1b-abb33d4a5ca8",
      "qty": 2
    }
  }
}
```

## Mutations


## Product - Mutation to create a product

- Query: `mutation Mutation($name: String, $price: Float, $qty: Int) {
  createProduct(name: "new product", price: 12, qty: 11) {
    name
    price
    prodId
    qty
  }
}`

- Response Json body for the above query (Example):

```json
{
  "data": {
    "createProduct": {
      "name": "new product",
      "price": 12,
      "prodId": "36770a0b-81bf-4d1a-bf50-1defdfa53130",
      "qty": 11
    }
  }
}
```


## Order - Mutation to create an order

- Query: `mutation Mutation($name: String, $price: Float, $qty: Int, $customerId: ID, $deliveryDate: String, $products: [ID], $orderQty2: Int, $totalPrice: Float) {
  order(customerId: "123e4567-e89b-12d3-a456-426655440000", deliveryDate: "2021-07-10", products: ["36770a0b-81bf-4d1a-bf50-1defdfa53130"], qty: 2, totalPrice: 12) {
    deliveryDate
    orderId
    products {
      name
      price
      prodId
      qty
    }
    customer {
      address
      emailId
      customerId
      name
      phone
    }
    totalPrice
  }
}`

- Response Json body for the above query (Example):

```json
{
  "data": {
    "order": {
      "deliveryDate": "2021-07-10 00:00:00",
      "orderId": "abf6df55-42fd-4da3-856d-366a319ca468",
      "products": [
        {
          "name": "new product",
          "price": 12,
          "prodId": "36770a0b-81bf-4d1a-bf50-1defdfa53130",
          "qty": 11
        }
      ],
      "customer": {
        "address": "houston",
        "emailId": "newcustomer@gmail.com",
        "customerId": "123e4567-e89b-12d3-a456-426655440000",
        "name": "new customer",
        "phone": "1234234"
      },
      "totalPrice": 12
    }
  }
}


```
## Error Scenerios 

## Mutation to create an order  -- when a customer doesnt have email or phone number

- Response Json body for the above query (Example):

```json

{
  "errors": [
    {
      "message": "Customer doesnot have email or phone number!!!",
      "extensions": {
        "code": "404",
        "serviceName": "order",
        "exception": {
          "message": "Customer doesnot have email or phone number!!!",
          "locations": [
            {
              "line": 1,
              "column": 10
            }
          ],
          "path": [
            "order"
          ]
        }
      }
    }
  ],
  "data": {
    "order": null
  }
}

```

## Mutation to create an order  -- when a customer doesnt have email or phone number

- Response Json body for the above query (Example):

```json

{
  "errors": [
    {
      "message": "product quantity quoted should be less!!!",
      "extensions": {
        "code": "400",
        "serviceName": "order",
        "exception": {
          "message": "product quantity quoted should be less!!!",
          "locations": [
            {
              "line": 1,
              "column": 10
            }
          ],
          "path": [
            "order"
          ]
        }
      }
    }
  ],
  "data": {
    "order": null
  }
}

```

## Get requests API Exceptions

Error code |                         Error Message
---------- | :-----------------------------------------------------------:
400        |                    Invalid Input
401        |                    Unauthorized
403        |                    User is not authorized 
500        |                    FAILED



# Tables
No tables are required