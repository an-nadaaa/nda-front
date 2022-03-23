<template>
  <div class="min-h-full mx-auto lg:mx-24">
    <section class="py-10">
      <!-- Page header -->
      <div class="px-4 mx-auto sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:px-8">
        <div class="flex items-center space-x-5">
          <div>
            <h1 class="mb-2 text-4xl font-bold text-gray-900">{{ campaign.attributes.title }}</h1>
            <p class="text-sm font-medium text-gray-500">
              Created on
              <time datetime="2020-08-25">{{ formatDate(campaign.attributes.createdAt) }}</time>
            </p>
          </div>
        </div>
        <div
          class="flex flex-col-reverse mt-6 space-y-4 space-y-reverse justify-stretch sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
          <div class="p-4 text-xl font-semibold rounded-md bg-primary-100 text-primary-700">
            Raising: {{ formateAmount(campaign.attributes.goal) }}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 mx-auto mt-8 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-3">
        <aside aria-labelledby="donation-section" class="lg:col-start-3 lg:col-span-1">
          <div class="px-4 py-5 bg-white shadow-md sm:rounded-lg sm:px-6 lg:sticky lg:top-0">
            <h2 id="donation-section" class="mb-3 text-2xl font-semibold text-gray-900">Donations</h2>
            <span
              :class="`inline-flex items-center px-2.5 py-0.5 rounded-md text-md mb-3 font-medium ${
                campaign.attributes.closed ? 'bg-gary-100 text-gray-800' : 'bg-green-100 text-green-800'
              }`">
              <Component
                class="-ml-0.5 mr-1.5 w-5 h-5"
                :is="campaign.attributes.closed ? 'LockIcon' : 'LockOpenIcon'" />

              {{ campaign.attributes.closed ? 'Closed' : 'Open' }}
            </span>
            <div class="h-2 my-3 overflow-hidden bg-gray-200 rounded-full">
              <div class="h-2 bg-yellow-400 rounded-full" :style="`width: ${percentage}%`"></div>
            </div>
            <ul class="my-6 space-y-6">
              <div>
                <h2 class="text-lg font-medium text-gray-500">Raised</h2>
                <ul role="list" class="mt-3 space-y-3">
                  <li class="flex justify-start">
                    <div class="flex items-center space-x-3">
                      <div class="text-lg font-medium text-gray-900">
                        {{ formateAmount(campaign.attributes.raised) }}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 class="text-lg font-medium text-gray-500">Impact</h2>
                <ul role="list" class="mt-3 space-y-3">
                  <li class="flex justify-start">
                    <div class="flex items-center space-x-3">
                      <div class="text-lg font-medium text-gray-900">
                        {{ campaign.attributes.impact }}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- <li>Raised: {{ formateAmount(campaign.attributes.raised) }}</li> -->
              <!-- <li>Impact: {{ campaign.attributes.impact }}</li> -->
            </ul>
            <ClientOnly placeholder="Loading...">
              <form action="#" class="flex flex-col mt-12 sm:mx-auto sm:max-w-lg" @submit.prevent="donate">
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
                      class="block w-full px-5 py-3 mb-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
                      placeholder="0.00"
                      aria-describedby="amount-currency"
                      v-model="amount" />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span class="text-gray-500 sm:text-sm" id="amount-currency"> USD </span>
                    </div>
                  </div>
                </div>
                <div class="mt-4 sm:mt-1">
                  <StripeCheckout ref="checkoutRef" :pk="pk" :session-id="sessionId" />
                  <button
                    type="submit"
                    class="relative flex items-center w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow bg-primary-600 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700 sm:px-10">
                    <MoonLoader class="absolute left-0 ml-4" :loading="loading" color="#fff" size="30px"></MoonLoader>
                    <div class="mx-auto">Donate</div>
                  </button>
                </div>
              </form>
            </ClientOnly>
          </div>
        </aside>

        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <!-- Cover -->
          <section aria-labelledby="campaign-cover">
            <div class="overflow-hidden bg-white shadow sm:rounded-lg">
              <div id="campaign-cover">
                <img
                  class="object-cover w-full aspect-video"
                  v-if="campaign.attributes.cover.data.attributes.url && !campaign.attributes.video"
                  :src="campaign.attributes.cover.data.attributes.url"
                  alt="" />
                <VideoPlayer v-else :showPlayer="true" :videoLocation="campaign.attributes.video" />
              </div>
              <div class="px-4 py-5 border-t border-gray-200 sm:px-6">
                <h3 class="text-2xl font-semibold">Overview</h3>
                <div class="prose lg:prose-lg" v-html="campaign.attributes.description"></div>
              </div>
              <div class="p-6">
                <span
                  v-for="(tag, i) in campaign.attributes.tags.data"
                  :key="i"
                  :class="`inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-primary-100 text-primary-800  ${
                    i === 0 ? '' : 'ltr:mr-4 rtl:ml-4 mx-2'
                  }`">
                  {{ tag.attributes.value }}
                </span>
              </div>
            </div>
          </section>

          <!-- Body -->
          <section aria-labelledby="campaign-information">
            <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div class="divide-y divide-gray-200">
                <div class="px-4 py-5 sm:px-6">
                  <h2 id="campaign-information" class="text-2xl font-semibold text-gray-900">Campaign Details</h2>
                </div>
                <!-- Gallery -->
                <div>
                  <CoolLightBox :items="images" :index="index" :useZoomBar="true" @close="index = null" />
                  <div class="flex px-6 py-1 overflow-y-scroll">
                    <div
                      class="h-40 mx-[2px] aspect-square cursor-pointer"
                      v-for="(image, imageIndex) in images"
                      :key="imageIndex"
                      @click="index = imageIndex"
                      :style="{ backgroundImage: 'url(' + image.thumb + ')' }"></div>
                  </div>
                </div>
                <div class="px-4 py-6 prose max-w-none sm:px-6 lg:prose-xl" v-html="campaign.attributes.body"></div>
              </div>
              <!-- Other sections should be added here -->
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import qs from 'qs'
import { CURRENCY_NAME } from '~/config/config'
import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
import { LockIcon, LockOpenIcon } from 'vue-tabler-icons'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    MoonLoader,
    LockIcon,
    LockOpenIcon,
    CoolLightBox,
  },
  async asyncData({ $axios, app, params, error }) {
    const STRAPI_API = process.env.NODE_ENV === 'production' ? process.env.STRAPI_API : 'http://localhost:5000/api'
    const campaignQuery = qs.stringify(
      {
        populate: {
          cover: {
            fields: ['url'],
          },
          tags: {
            fields: ['value'],
          },
          natures: {
            fields: ['value'],
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    )
    // get the last two characters
    const campaign = await $axios
      .$get(`${STRAPI_API}/campaigns/${params.id}?locale=${app.i18n.locale}&${campaignQuery}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      })
      .then(({ data }) => data)
      .catch((err) => {
        error({
          statusCode: 404,
          message: 'Campaign not found',
        })
      })
    return { campaign }
  },
  data() {
    return {
      pk: process.env.NODE_ENV === 'production' ? process.env.STRIPE_PK_PROD : process.env.STRIPE_PK_DEV,
      sessionId: 'session_id',
      amount: 0,
      loading: false,
      index: null,
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
            }&product=${this.campaign.attributes.product}`
          )
          .then((session) => {
            this.loading = false
            this.sessionId = session.id
            // You will be redirected to Stripe's secure checkout page
            return this.$refs.checkoutRef.redirectToCheckout()
          })
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return new Intl.DateTimeFormat(this.$i18n.locale, { dateStyle: 'full' }).format(date) || ''
    },
    formateAmount(amount) {
      return new Intl.NumberFormat(this.$i18n.locale, {
        style: 'currency',
        currency: CURRENCY_NAME,
      }).format(amount)
    },
  },
  computed: {
    percentage() {
      return (this.campaign.attributes.raised * 100) / this.campaign.attributes.goal
    },
    images() {
      return this.campaign.attributes.gallery
        ? this.campaign.attributes.gallery.data.map((image) => ({
            src: image.attributes.url,
            thumb: image.attributes.url.replace('photo', 'thumbnail_photo'),
          }))
        : [
            {
              src: this.campaign.attributes.cover.data.attributes.url,
              thumb: this.campaign.attributes.cover.data.attributes.url.replace('photo', 'thumbnail_photo'),
            },
          ]
    },
  },
}
</script>
