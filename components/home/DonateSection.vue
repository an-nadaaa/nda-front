<template>
  <div id="donate" class="py-16 bg-white sm:py-24">
    <div class="relative sm:py-16">
      <div aria-hidden="true" class="hidden sm:block">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
        <svg class="absolute -ml-3 top-8 left-1/2" width="404" height="392" fill="none" viewBox="0 0 404 392">
          <defs>
            <pattern
              id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="392" fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />
        </svg>
      </div>
      <div class="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-6xl lg:px-8">
        <div class="relative px-6 py-10 overflow-hidden shadow-xl bg-primary-700 rounded-2xl sm:px-12 sm:py-20">
          <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
            <svg
              class="absolute inset-0 w-full h-full"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360">
              <path
                class="text-primary-600 text-opacity-40"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
              <path
                class="text-primary-800 text-opacity-40"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
            </svg>
          </div>
          <div class="relative">
            <div class="sm:text-center">
              <h2 class="text-3xl text-white sm:text-5xl">
                <span class="inline-flex">Finding it hard to choose?</span>
                <span class="inline-flex">Make a general donation.</span>
              </h2>
              <p class="max-w-2xl mx-auto mt-6 text-lg text-primary-200">
                Your donation will go to where it is needed the most.
              </p>
            </div>
            <ClientOnly placeholder="Loading...">
              <form action="#" class="items-center mt-12 sm:mx-auto sm:max-w-lg sm:flex" @submit.prevent="donate">
                <div class="flex-1 min-w-0">
                  <label for="amount" class="sr-only">Amount</label>
                  <div class="relative mt-1 rounded-md shadow-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <span class="text-gray-500 sm:text-sm"> $ </span>
                    </div>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      class="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                      placeholder="0.00"
                      aria-describedby="amount-currency"
                      v-model="amount" />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-gray-500 sm:text-sm" id="amount-currency"> USD </span>
                    </div>
                  </div>
                </div>
                <div class="mt-4 sm:mt-1 sm:ml-3">
                  <StripeCheckout ref="checkoutRef" :pk="pk" :session-id="sessionId" />
                  <button
                    type="submit"
                    class="relative flex items-center w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow bg-primary-600 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700 sm:px-10">
                    <MoonLoader class="absolute left-0 ml-4" :loading="loading" color="#fff" size="30px"></MoonLoader>
                    <div class="mx-auto sm:mx-5">Donate</div>
                  </button>
                </div>
              </form>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'

export default {
  components: {
    MoonLoader,
  },
  data() {
    return {
      pk: process.env.NODE_ENV === 'production' ? process.env.STRIPE_PK_PROD : process.env.STRIPE_PK_DEV,
      sessionId: 'session_id',
      amount: 0,
      loading: false,
    }
  },
  methods: {
    async donate() {
      if (this.amount >= 1) {
        this.loading = true
        await this.$axios
          .$post(
            `${process.env.functionBaseUrl}/create-checkout-session?locale=${this.$i18n.locale}&amount=${
              this.amount * 100
            }`
          )
          .then((session) => {
            this.loading = false
            this.sessionId = session.id
            this.$segment.track('General Donation Started', {
              amount: this.amount * 100,
              sessionId: session.id,
            })
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
