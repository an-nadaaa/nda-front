import Vue from 'vue'
export const bus = new Vue()

// this is typescript types explaining where the bus is accessible
// declare module 'vue/types/vue' {
//     // this.$bus inside Vue components
//     interface Vue {
//       $bus: Vue;
//     }
//   }

//   declare module '@nuxt/types' {
//     // nuxtContext.app.$bus inside asyncData, fetch, plugins, middleware, nuxtServerInit
//     interface NuxtAppOptions {
//       $bus: Vue;
//     }
//     // nuxtContext.$bus
//     interface Context {
//       $bus: Vue;
//     }
//   }

//   declare module 'vuex/types/index' {
//     // this.$bus inside Vuex stores
//     interface Store<S> {
//       $bus: Vue;
//     }
//   }

const EventBus = (context, inject) => {
  inject('bus', bus)
}

export default EventBus
