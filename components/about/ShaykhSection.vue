<template>
  <div class="overflow-hidden bg-white">
    <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 class="text-base font-semibold tracking-wide uppercase text-primary-600">
            {{ shaykhSection.title }}
          </h2>
          <h3 class="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            {{ shaykhSection.subtitle }}
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg
            class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true">
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img
                  class="object-cover object-center rounded-lg shadow-lg"
                  :src="shaykhSection.imageUrl"
                  alt="Shaykh giving a talk"
                  width="1184"
                  height="1376" />
              </div>
              <!-- <figcaption class="flex mt-3 text-sm text-gray-500">
                <CameraIcon class="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                <span class="ml-2">Photograph by ?</span>
              </figcaption> -->
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="prose prose-lg text-gray-500" v-html="prosefy(shaykhBio)"></div>
          <!-- <div class="mx-auto text-base max-w-prose lg:max-w-none">
            <p class="text-lg text-gray-500">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </div>
          <div class="mx-auto mt-5 prose text-gray-500 prose-primary lg:max-w-none lg:row-start-1 lg:col-start-1">
            <p>
              Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium
              arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.
            </p>
            <p>
              Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit nisi lorem pulvinar. Urna, laoreet
              fusce nibh leo. Dictum et et et sit. Faucibus sed non gravida lectus dignissim imperdiet a.
            </p>
            <p>
              Dictum magnis risus phasellus vitae quam morbi. Quis lorem lorem arcu, metus, egestas netus cursus. In.
            </p>
            <ul role="list">
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit
              faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim
              sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CameraIcon } from 'vue-tabler-icons'
import * as SHAYKH_SECTION from '~/content/site/about/shaykh_section.json'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

export default {
  components: {
    CameraIcon,
  },
  data() {
    return {
      shaykhSection: SHAYKH_SECTION.en,
      shaykhBio: `<p className="lead">
  Dr. Ibrahim Nuhu Tahir is the founder of An-Nadaa Educational Foundation. He personally supervises and monitors all the activities of the foundation to ensure that they are in line with the rules of Allah, objectives of the organization and maximise the benefit for the community. All this while also ensuring the rights of the donors, partners and beneficiaries are not violated in any way.
</p>

### Early Years
Dr. Ibrahim Nuhu Tahir was born and raised in Nigeria. Sheikh started his Islamic education from a young age in the classical way with his father Dr. Nuhu Tahir (may Allah preserve him) and other scholars in that region. He completed his memorization at a young age and learnt different Islamic Sciences like Fiqh, Uloom ul Quran & hadith from his hometown and surrounding areas.

Sheikh Ibrahim enjoys being around children which is why he started off as a primary School headmaster at Raudatul Qur’an School in Zaria city of Nigeria.

### Madinah Education
He was then accepted into the International Islamic University, Madinah. He graduated from the Dept of Shariah at the top of his class with his Bachelors in Shariah and Islamic Studies. He then followed that up with a Postgraduate Diploma (first class of honours) in Islamic Law and Islamic Political Science. Sheikh Ibrahim benefited greatly from his stay in this blessed city learning a lot from the knowledge and tarbiya of the scholars. This is where the idea of An-Nadaa was first developed.

### Malaysia
He then went on to complete his masters and PhD from Islamic International University of Malaysia. While he was doing his PhD he was also a teacher and the head of Islamic department in the International Islamic School Malaysia. After completing his PhD sheikh was invited to join the department of Economics and Management Sciences where he is now an associate professor. He is also a research fellow at the Center for Islamic Economics. Sheikh Ibrahim has also been invited by the Islamic Economic Club- Kuwait to conduct series of lectures on Islamic Economics and Fiqh. He has many articles and publications in research journals and conferences on a range of topics including, Business coaching, Cryptocurrencies, Waqf, Zakat management

In addition to his official teaching and research responsibilities sheikh Ibrahim also constantly engages with the community especially the youth to spread the knowledge and the tarbiyyah of the deen. He conducts classes in Fiqh, Seerah, Akhlaaq, Tafseer, Faraid, essential knowledge for new muslims and also delivers Jumma Khutbah in IIUM Shah mosque. Sheikh Ibrahim also holds advisory roles with many organisations and student bodies.

Sheikh Ibrahim allots a lot of his free time, and many times sacrifices his own family time, to cater to the religious needs of Muslim youth who would otherwise not have any access to students of knowledge. With his deep knowledge coupled with extreme humility, Sheikh Ibrahim has significantly single-handedly developed Islam in the lives of hundreds if not thousands of Muslim youth.`,
    }
  },
  methods: {
    prosefy(content) {
      return sanitizeHtml(marked.parse(content))
    },
  },
}
</script>
