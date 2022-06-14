<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            v-smooth-scroll
            href="#bottom"
            target="_blank"
          >Goto Bottom</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
    <v-row style="height: 100vh">
      <v-col>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti ducimus rerum obcaecati quas saepe explicabo vel doloremque? Asperiores in iste quam magnam totam nesciunt delectus eaque ab repudiandae quasi!
        Odit facilis ipsum explicabo, quidem delectus iste aspernatur! Voluptatibus pariatur adipisci inventore aliquam iure numquam corrupti, dolorem placeat distinctio porro minima reiciendis similique saepe repellat perspiciatis, autem excepturi ex? Nesciunt!
        Laborum enim, ipsam facere blanditiis voluptatibus odio, eum nihil nemo laboriosam explicabo velit aliquid a quisquam commodi. Deserunt dicta, quibusdam corrupti nulla totam a delectus iure adipisci cupiditate nostrum inventore.
        Debitis pariatur perferendis autem nemo quasi quisquam, adipisci numquam mollitia ab, animi quidem ullam? Laborum quia nostrum maxime aut tempore provident fugiat eaque iste. Hic ducimus esse voluptas dolorum. Ducimus.
        Reiciendis fugit ullam, blanditiis dolores amet sed in recusandae sit itaque error dolore accusantium sint cumque excepturi repudiandae. Qui fugit autem maiores libero, quibusdam sit delectus vitae officia praesentium placeat!
        Id inventore, nihil minima, impedit velit illum incidunt autem accusamus, aut maiores nam! Odio, autem facilis expedita animi, possimus aspernatur ad doloremque veritatis libero magni provident beatae. Quae, architecto fuga.
        Omnis, dicta eos quaerat illo saepe facere neque sed minima voluptas, non officia voluptate facilis aliquid maiores maxime dolor laboriosam perferendis iusto? Odit consequatur beatae adipisci distinctio ducimus? Nulla, culpa!
        Commodi ut incidunt quidem nostrum eveniet, esse reiciendis deserunt omnis vel praesentium minima quos assumenda iste inventore doloribus. Nobis ab, incidunt dignissimos debitis enim itaque placeat perferendis! Cumque, voluptas quia.
        Dicta obcaecati accusantium aut placeat nam ad, numquam adipisci quo nostrum blanditiis? Eveniet possimus dolores, adipisci impedit autem ipsum aperiam ea placeat, totam earum minus beatae dolorum quaerat corrupti eum!
        Mollitia velit cumque temporibus esse tempora, vel perspiciatis neque? Fugit ipsam tempore veniam quibusdam consectetur expedita! Quos, voluptatem sunt accusamus laboriosam modi dolorum libero magni nobis nostrum omnis voluptas tempore?</span>
      </v-col>
    </v-row>
    <v-row style="height: 100vh">
      <v-col>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti ducimus rerum obcaecati quas saepe explicabo vel doloremque? Asperiores in iste quam magnam totam nesciunt delectus eaque ab repudiandae quasi!
        Odit facilis ipsum explicabo, quidem delectus iste aspernatur! Voluptatibus pariatur adipisci inventore aliquam iure numquam corrupti, dolorem placeat distinctio porro minima reiciendis similique saepe repellat perspiciatis, autem excepturi ex? Nesciunt!
        Laborum enim, ipsam facere blanditiis voluptatibus odio, eum nihil nemo laboriosam explicabo velit aliquid a quisquam commodi. Deserunt dicta, quibusdam corrupti nulla totam a delectus iure adipisci cupiditate nostrum inventore.
        Debitis pariatur perferendis autem nemo quasi quisquam, adipisci numquam mollitia ab, animi quidem ullam? Laborum quia nostrum maxime aut tempore provident fugiat eaque iste. Hic ducimus esse voluptas dolorum. Ducimus.
        Reiciendis fugit ullam, blanditiis dolores amet sed in recusandae sit itaque error dolore accusantium sint cumque excepturi repudiandae. Qui fugit autem maiores libero, quibusdam sit delectus vitae officia praesentium placeat!
        Id inventore, nihil minima, impedit velit illum incidunt autem accusamus, aut maiores nam! Odio, autem facilis expedita animi, possimus aspernatur ad doloremque veritatis libero magni provident beatae. Quae, architecto fuga.
        Omnis, dicta eos quaerat illo saepe facere neque sed minima voluptas, non officia voluptate facilis aliquid maiores maxime dolor laboriosam perferendis iusto? Odit consequatur beatae adipisci distinctio ducimus? Nulla, culpa!
        Commodi ut incidunt quidem nostrum eveniet, esse reiciendis deserunt omnis vel praesentium minima quos assumenda iste inventore doloribus. Nobis ab, incidunt dignissimos debitis enim itaque placeat perferendis! Cumque, voluptas quia.
        Dicta obcaecati accusantium aut placeat nam ad, numquam adipisci quo nostrum blanditiis? Eveniet possimus dolores, adipisci impedit autem ipsum aperiam ea placeat, totam earum minus beatae dolorum quaerat corrupti eum!
        Mollitia velit cumque temporibus esse tempora, vel perspiciatis neque? Fugit ipsam tempore veniam quibusdam consectetur expedita! Quos, voluptatem sunt accusamus laboriosam modi dolorum libero magni nobis nostrum omnis voluptas tempore?</span>
      </v-col>
    </v-row>
    <v-row style="height: 100vh">
      <v-col>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti ducimus rerum obcaecati quas saepe explicabo vel doloremque? Asperiores in iste quam magnam totam nesciunt delectus eaque ab repudiandae quasi!
        Odit facilis ipsum explicabo, quidem delectus iste aspernatur! Voluptatibus pariatur adipisci inventore aliquam iure numquam corrupti, dolorem placeat distinctio porro minima reiciendis similique saepe repellat perspiciatis, autem excepturi ex? Nesciunt!
        Laborum enim, ipsam facere blanditiis voluptatibus odio, eum nihil nemo laboriosam explicabo velit aliquid a quisquam commodi. Deserunt dicta, quibusdam corrupti nulla totam a delectus iure adipisci cupiditate nostrum inventore.
        Debitis pariatur perferendis autem nemo quasi quisquam, adipisci numquam mollitia ab, animi quidem ullam? Laborum quia nostrum maxime aut tempore provident fugiat eaque iste. Hic ducimus esse voluptas dolorum. Ducimus.
        Reiciendis fugit ullam, blanditiis dolores amet sed in recusandae sit itaque error dolore accusantium sint cumque excepturi repudiandae. Qui fugit autem maiores libero, quibusdam sit delectus vitae officia praesentium placeat!
        Id inventore, nihil minima, impedit velit illum incidunt autem accusamus, aut maiores nam! Odio, autem facilis expedita animi, possimus aspernatur ad doloremque veritatis libero magni provident beatae. Quae, architecto fuga.
        Omnis, dicta eos quaerat illo saepe facere neque sed minima voluptas, non officia voluptate facilis aliquid maiores maxime dolor laboriosam perferendis iusto? Odit consequatur beatae adipisci distinctio ducimus? Nulla, culpa!
        Commodi ut incidunt quidem nostrum eveniet, esse reiciendis deserunt omnis vel praesentium minima quos assumenda iste inventore doloribus. Nobis ab, incidunt dignissimos debitis enim itaque placeat perferendis! Cumque, voluptas quia.
        Dicta obcaecati accusantium aut placeat nam ad, numquam adipisci quo nostrum blanditiis? Eveniet possimus dolores, adipisci impedit autem ipsum aperiam ea placeat, totam earum minus beatae dolorum quaerat corrupti eum!
        Mollitia velit cumque temporibus esse tempora, vel perspiciatis neque? Fugit ipsam tempore veniam quibusdam consectetur expedita! Quos, voluptatem sunt accusamus laboriosam modi dolorum libero magni nobis nostrum omnis voluptas tempore?</span>
      </v-col>
    </v-row>
    <v-row id="bottom" style="height: 100vh">
      <v-col>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores corrupti ducimus rerum obcaecati quas saepe explicabo vel doloremque? Asperiores in iste quam magnam totam nesciunt delectus eaque ab repudiandae quasi!
        Odit facilis ipsum explicabo, quidem delectus iste aspernatur! Voluptatibus pariatur adipisci inventore aliquam iure numquam corrupti, dolorem placeat distinctio porro minima reiciendis similique saepe repellat perspiciatis, autem excepturi ex? Nesciunt!
        Laborum enim, ipsam facere blanditiis voluptatibus odio, eum nihil nemo laboriosam explicabo velit aliquid a quisquam commodi. Deserunt dicta, quibusdam corrupti nulla totam a delectus iure adipisci cupiditate nostrum inventore.
        Debitis pariatur perferendis autem nemo quasi quisquam, adipisci numquam mollitia ab, animi quidem ullam? Laborum quia nostrum maxime aut tempore provident fugiat eaque iste. Hic ducimus esse voluptas dolorum. Ducimus.
        Reiciendis fugit ullam, blanditiis dolores amet sed in recusandae sit itaque error dolore accusantium sint cumque excepturi repudiandae. Qui fugit autem maiores libero, quibusdam sit delectus vitae officia praesentium placeat!
        Id inventore, nihil minima, impedit velit illum incidunt autem accusamus, aut maiores nam! Odio, autem facilis expedita animi, possimus aspernatur ad doloremque veritatis libero magni provident beatae. Quae, architecto fuga.
        Omnis, dicta eos quaerat illo saepe facere neque sed minima voluptas, non officia voluptate facilis aliquid maiores maxime dolor laboriosam perferendis iusto? Odit consequatur beatae adipisci distinctio ducimus? Nulla, culpa!
        Commodi ut incidunt quidem nostrum eveniet, esse reiciendis deserunt omnis vel praesentium minima quos assumenda iste inventore doloribus. Nobis ab, incidunt dignissimos debitis enim itaque placeat perferendis! Cumque, voluptas quia.
        Dicta obcaecati accusantium aut placeat nam ad, numquam adipisci quo nostrum blanditiis? Eveniet possimus dolores, adipisci impedit autem ipsum aperiam ea placeat, totam earum minus beatae dolorum quaerat corrupti eum!
        Mollitia velit cumque temporibus esse tempora, vel perspiciatis neque? Fugit ipsam tempore veniam quibusdam consectetur expedita! Quos, voluptatem sunt accusamus laboriosam modi dolorum libero magni nobis nostrum omnis voluptas tempore?</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
