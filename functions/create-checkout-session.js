// This is your test secret API key.
require('dotenv').config()
const STRIPE_SK = process.env.STRIPE_SK
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:8888'
const stripe = require('stripe')(STRIPE_SK),
  headers = {
    'Access-Control-Allow-Origin': BASE_URL,
    'Access-Control-Allow-Headers': 'Content-Type',
  }

exports.handler = async function (event, context) {
  // CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
    }
  }
  // your server-side functionality
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          unit_amount_decimal: event.queryStringParameters.amount,
          currency: 'usd',
          product: event.queryStringParameters.slug ? event.queryStringParameters.slug : 'prod_L10916LiODpbnv',
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${BASE_URL}${
      event.queryStringParameters.locale === 'en' ? '' : `/${event.queryStringParameters.locale}`
    }/success`,
    cancel_url: `${BASE_URL}/${
      event.queryStringParameters.locale === 'en' ? '' : `/${event.queryStringParameters.locale}`
    }/cancel`,
    locale: event.queryStringParameters.locale,
    // payment_method_types: ['card', 'fpx', 'grabpay', 'alipay'],
  })

  // redirect to the checkout session url
  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(session),
  }
  // res.redirect(303, session.url)
}
