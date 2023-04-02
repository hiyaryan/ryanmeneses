<template>
  <div class="landing-page" id="home">
    <NavBar :pageContent="pageContent" />
    <div class="header">
      <h1>{{ name }}</h1>
      <h2>{{ title }}</h2>
      <p>{{ tagline }}</p>
    </div>
    <div class="section" id="about">
      <h2>About Me</h2>
      <p>{{ about }}</p>
    </div>
    <div class="section" id="projects">
      <h2>Portfolio</h2>
      <div class="portfolio">
        <div v-for="project in portfolio" :key="project.name">
          <img :src="`@/assets/img/${project.thumbnail}`" :alt="project.thumbnail" />
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
    <div class="footer" id="contact">
      <h2>Contact</h2>
      <p>{{ contact }} <a :href="`${linkedin}`" target="_blank">LinkedIn</a></p>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  },

  data() {
    return {
      pageContent: [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'projects', title: 'Projects' },
        { id: 'contact', title: 'Contact' },
      ],
      name: 'Ryan Meneses',
      title: 'Software Engineer',
      tagline: 'Passionate about solving problems that lead to a better world.',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi.',
      portfolio: [
        {
          name: 'SIMOC SAM',
          thumbnail: 'project-1-thumbnail.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi.',
        },
        {
          name: 'QCS Quantum Circuits',
          thumbnail: 'project-2-thumbnail.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi.',
        },
        {
          name: 'ryanmeneses.com',
          thumbnail: 'project-3-thumbnail.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi.',
        }
      ],
      contact: 'Find me on ',
      linkedin: 'https://www.linkedin.com/in/ryan-james-meneses-b6973a132'
    }
  }
}
</script>

<style>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  font-family: 'Calibri', sans-serif;
}

.header {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
}

.header h1 {
  color: rgba(0, 0, 0, 0.850);
  padding-top: 50px;
  font-size: 40px;
  font-weight: 600;
}

.portfolio {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.portfolio div {
  width: calc(33.33% - 10px);
  margin-bottom: 20px;
}

.portfolio img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.section h2 {
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
  margin-bottom: 30px;
  margin-top: 50px;
}

.footer {
  padding-top: 25px;
  margin-bottom: 50px;
  text-align: center;
}
</style>
