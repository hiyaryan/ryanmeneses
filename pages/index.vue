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
    <div class="section-projects" id="projects">
      <h2>Projects</h2>
      <div>
        <div v-for="project in projects" :key="project.name" class="project">
          <img :src="`/img/${project.thumbnail}`" alt="" />
          <h3>{{ project.name }}</h3>
          <p v-for="description in project.description" :key="description">{{ description }}</p>
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

export default {
  head() {
    return {
      title: 'Ryan Meneses'
    }
  },

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
      location: 'San Francisco Bay Area',
      about: ["Hello there! Thank you for visiting my website! My name is Ryan, and I'm a software engineer who is passionate about using technology to help solve big questions and push humanity towards our maximum potential.", "Ever since I was a kid, I've been fascinated by the mysteries of the universe and the big questions that we as humans seek to answer. And as I grew older, I realized that technology could play a crucial role in helping us unravel some of these mysteries and push the boundaries of what we thought was possible.", "In my career as a software engineer, I've been fortunate to work on some incredible projects with some amazing people who have only fueled my desire to work on these types of problems. One project, for instance, is all about pushing humanity closer towards becoming an interplanetary species, while another deals with humanity's ability to harness the computational power of the atomic world.", "What excites me most about my work is the potential for technology to help us unlock new insights and discoveries that can push humanity towards its maximum potential. Whether we're developing new algorithms to help us understand the fundamental workings of the universe or creating tools to help us harness the power of artificial intelligence, I believe that we can make a real difference by working together to push the boundaries of what we thought was possible.", "When I'm not coding, I love exploring these spaces through the lenses of those outside of my industry. I'm very curious to see the workings and ideas of those approaching these problems from different angles. I'm also very interested in hearing the kinds of impacts new technologies and discoveries might pose on humanity alike.", "Overall, I'm thrilled to be a part of a community of thinkers and doers who are just as passionate as I am about using technology to make a positive impact on the world. So, let's join forces and keep pushing the boundaries together!"],
      projects: [
        {
          name: 'SIMOC SAM',
          thumbnail: 'project-1-thumbnail.png',
          description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ipsum sit amet laoreet maximus. Suspendisse vel lacinia ipsum. Duis ullamcorper est eget tellus pulvinar, vel malesuada tellus hendrerit. Nulla facilisi.'],
        },
        {
          name: 'QCS Quantum Circuits',
          thumbnail: 'project-2-thumbnail.png',
          description: ["At Rigetti Computing, I used Rust for its memory safety and performance, to develop a software tool for visualizing quantum circuits through the company's quantum cloud services by serializing Quil, the assembly language of quantum computers, into LaTeX form. The LaTeX generated are quantum circuits which are graphical representations of quantum systems that are used to describe the flow of quantum information. This is an important tool for designing and analyzing quantum algorithms, that can be difficult to visualize.", "The Rust-based tool leverages Rigetti's quantum cloud services to access powerful quantum computing resources and perform complex calculations on quantum circuits. The tool provides the ability to visualize the structure of these quantum instructions. The output is a string of LaTeX utilizing the Quantikz package of which can be input into a LaTeX renderer that will help scientists and researchers better understand and analyze their programs that they feed into a quantum computer."],
        },
        {
          name: 'My Website',
          thumbnail: 'project-3-thumbnail.png',
          description: ["If you're looking at this website and it seems like it's not all put together, that's because I'm still working on it! You may see some Lorem Ipsum here and there but it's all part of the process. I've decided to build this website publicly so that I can share my journey. I'm excited to see where it takes me! :)"],
        }
      ],
      contact: 'Find me on ',
      linkedin: 'https://www.linkedin.com/in/ryan-james-meneses',
      github: 'https://github.com/hiyaryan',
      year: new Date().getFullYear()
    }
  }
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
