// this function creates a new product and returns the product
require('dotenv').config()
const STRIPE_SK = process.env.STRIPE_SK
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:8888'
const stripe = require('stripe')(STRIPE_SK),
  headers = {
    'Access-Control-Allow-Origin': BASE_URL,
    'Access-Control-Allow-Headers': 'Content-Type',
  }
const STRIPE_GENERAL_PRODUCT = process.env.STRIPE_GENERAL_PRODUCT

exports.handler = async function (event, context) {
  console.log('Invoked')
  // CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    }
  }

  if (event.httpMethod === 'GET' || event.httpMethod === 'PUT') {
    return {
      statusCode: 405,
      headers,
      message: 'Method Not Allowed',
    }
  }

  if (event.httpMethod === 'POST') {
    const entity = JSON.parse(event.body)

    if (entity.product !== STRIPE_GENERAL_PRODUCT) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: 'Product field already populated',
        }),
      }
    }

    const product = await stripe.products.create({
      name: entity.title,
      description: entity.description,
      images: [entity.cover],
    })

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(product),
    }
  }

  if (event.httpMethod === 'DELETE') {
    const entity = JSON.parse(event.body)

    if (entity.product === STRIPE_GENERAL_PRODUCT) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          message: 'Cannot delete the general product',
        }),
      }
    }

    const product = await stripe.products.del(entity.product)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(product),
    }
  }
}
