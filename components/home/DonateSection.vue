<template>
  <div>
    <div class="py-12 mx-24 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:justify-around lg:items-center">
      <div class="w-1/2">
        <h2 class="text-3xl text-gray-900 sm:text-4xl">
          <span class="inline-flex">Finding it hard to choose?</span>
          <span class="inline-flex">Make a general donation.</span>
        </h2>
        <p class="max-w-3xl mt-3 text-lg text-gray-500">Your donation will go to a random cause that we support</p>
      </div>
      <div class="mt-8 lg:mt-0 lg:ml-8">
        <ClientOnly placeholder="Loading...">
          <form class="items-center sm:flex" @submit.prevent="donate">
            <label for="amount" class="sr-only">Amount</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span class="text-gray-500 sm:text-sm"> $ </span>
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                class="w-full px-5 py-3 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm  focus:ring-primary-500 focus:border-primary-500 sm:max-w-xs"
                placeholder="0.00"
                aria-describedby="amount-currency"
                v-model="amount"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span class="text-gray-500 sm:text-sm" id="amount-currency"> USD </span>
              </div>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <StripeCheckout ref="checkoutRef" :pk="pk" :session-id="sessionId" />
              <button
                type="submit"
                class="flex items-center justify-center w-full px-24 py-3 text-base font-medium text-white border border-transparent rounded-md  bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Donate
              </button>
            </div>
          </form>
        </ClientOnly>
      </div>
    </div>
    <!-- <hr class="h-px mx-24 border-1 border-gary-200" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      pk: process.env.NODE_ENV === 'production' ? process.env.STRIPE_PK_PROD : process.env.STRIPE_PK_DEV,
      sessionId: 'session_id',
      amount: 0,
    }
  },
  // beforeMount() {
  //   this.pk = process.env.NODE_ENV === 'production' ? process.env.STRIPE_PK_PROD : process.env.STRIPE_PK_DEV
  // },
  methods: {
    async donate() {
      if (this.amount >= 1) {
        await this.$axios
          .$post(
            `${process.env.functionBaseUrl}/create-checkout-session?locale=${this.$i18n.locale}&amount=${
              this.amount * 100
            }`
          )
          .then((session) => {
            this.sessionId = session.id
            // You will be redirected to Stripe's secure checkout page
            return this.$refs.checkoutRef.redirectToCheckout()
          })
      }
    },
  },
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type='number'] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
