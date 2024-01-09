<template>
  <Head>
    <Title>Ryan Meneses</Title>
  </Head>
  <div class="landing-page" id="home">
    <NavBar :pageContent="pageContent" />
    <div class="header">
      <img :src="`/img/me.png`" alt="" />
      <h1>{{ name }}</h1>
      <h2>{{ title }}</h2>
      <h5> {{ location }} </h5>
      <p>{{ tagline }}</p>
    </div>
    <div class="section-about" id="about">
      <h2>About Me</h2>
      <p v-for="paragraph in about" :key="paragraph">{{ paragraph }}</p>
    </div>
    <!-- FIXME: DOES NOT TRANSITION -->
    <Transition name="fade" appear>
      <p class="quote" @mouseover="getQuote()">"{{ quote.text }}" – {{ quote.author }}</p>
    </Transition>
    <button class="btn btn--main" @click="getHaiku()">Get Haiku</button>
    <p id="hidden-haiku" hidden>{{ haiku }}</p>
    <div class="section-projects" id="projects">
      <h2>Projects</h2>
      <div>
        <div v-for="project in projects" :key="project.name" class="project">
          <img :src="`/img/${project.thumbnail}`" alt="" />
          <h3>{{ project.name }}</h3>
          <p v-for="description in project.description" :key="description">{{ description }}</p>
          <a :href="`${project.ref}`" target="_blank">See more</a>
        </div>
      </div>
    </div>
    <div class="footer" id="contact">
      <h2>Contact</h2>
      <p>{{ contact }}
        <a :href="`${linkedin}`" target="_blank">LinkedIn</a> and <a :href="`${github}`" target="_blank">GitHub</a>
      </p>
      <p>{{ year }}</p>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import content from '~/static/content.js'

export default {
  head() {
    return {
      title: 'Ryan Meneses'
    }
  },

  components: {
    NavBar
  },

  beforeMount() {
    // Fetch data from public APIs
    fetch("https://type.fit/api/quotes")
      .then(async response => {
        const data = await response.json()

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText
          return Promise.reject(error)
        }

        let quote = this.get_random_quote(data)

        this.quote.text = quote.text

        if (quote.author) {
          this.quote.author = quote.author
        } else {
          this.quote.author = "Unknown"
        }
      })


      .catch(error => {
        this.errorMessage = error
        console.error("Error fetching quote from https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373", error)
      })
  },

  data() {
    return {
      pageContent: [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'projects', title: 'Projects' },
        { id: 'contact', title: 'Contact' },
      ],
      name: content.name,
      title: content.title,
      tagline: content.tagline,
      location: content.location,
      about: content.about,
      quote: content.quote,
      haiku: '',
      projects: content.projects,
      contact: content.contact,
      linkedin: content.linkedin,
      github: content.github,
      year: new Date().getFullYear()
    }
  },

  methods: {
    getQuote() {
      fetch("https://type.fit/api/quotes")
        .then(async response => {
          const data = await response.json()

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
          }

          let quote = this.get_random_quote(data)
          this.quote.text = quote.text

          if (quote.author) {
            this.quote.author = quote.author
          } else {
            this.quote.author = "Unknown"
          }
        })
    },

    getHaiku() {
      // unhide id hidden-haiku
      document.getElementById('hidden-haiku').style.display = 'block'

      let prompt = "Given this information about " + this.name + ": " + this.about[0] + ", write a motivational haiku to " + this.name + " in the context of this quote: " + this.quote.text

      console.log(prompt)

      const url = 'https://ygdyx3u5m234obbfstcmhpezfi0kxgqy.lambda-url.us-west-1.on.aws/'

      // fetch(url, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Basic ' + btoa('r:pAZSXazsx12!')
      //   },
      //   method: 'POST',
      //   body: JSON.stringify({ input: prompt }),
      // })
      //   .then(response => response.json())
      //   .then(data => this.haiku = data)
      //   .catch(error => console.error(error))



      // TEMPLATE
      // const url = 'https://ygdyx3u5m234obbfstcmhpezfi0kxgqy.lambda-url.us-west-1.on.aws/'

      fetch(url, {
        method: 'POST',
        body: prompt,
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

    },
    // Returns a random quote from a dictionary of quotes fetched from the public quotes API: https://type.fit/api/quotes
    get_random_quote(quotes) {
      let index = Math.random() * quotes.length
      return quotes[Math.ceil(index)]
    }
  },
}
</script>

<style>
/* Document */
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  font-family: 'Calibri', sans-serif;
}

/* Header */
.header {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 25px;
}

.header img {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 25px;
  margin-bottom: -50px;
}

.header h1 {
  color: rgba(0, 0, 0, 0.850);
  padding-top: 50px;
  padding-bottom: 10px;
  font-size: 40px;
  font-weight: 600;
}

.header p {
  margin-top: 50px;
}

.quote {
  text-align: center;
  margin: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* About */
.section-about {
  font-size: 14px;
  font-weight: 500;
  max-width: 800px;
  color: rgba(0, 0, 0, 0.850);
  margin-bottom: 25px;
}

/* Projects */
.section-projects h2 {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  display: flex;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.825);
  margin-bottom: 30px;
  margin-top: 50px;
}

.section-projects img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.section-projects a {
  font-size: 14px;
}

/* Large screen */
@media screen and (min-width: 800px) {
  .section-projects div {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }

  .project {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-right: 20px;
    flex: 1;
  }
}

/* Small screen */
@media only screen and (max-width: 800px) {
  .section-projects div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
}

/* Footer */
.footer h2 {
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  display: flex;
  height: 50px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.850);
  margin-top: 50px;
  margin-bottom: 50px;
}

.footer {
  text-align: center;
  padding-top: 25px;
  margin-bottom: 50px;
}
</style>
