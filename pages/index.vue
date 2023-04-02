<template>
  <div class="landing-page" id="home">
    <nav class="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
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
      <p>{{ contact }} <a href={{ linkedin }}>LinkedIn</a>.</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.offsetTop;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  },

  data() {
    return {
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
      linkedin: 'https://www.linkedin.com/in/ryan-meneses-5b1b4b1b3/'
    }
  }
}
</script>

<style>
html {
  background-color: #ececec;
  scroll-behavior: smooth;
}

.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  font-family: 'Calibri', sans-serif;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.850);
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.navbar li {
  background-color: rgba(0, 0, 0, 0.150);
  border-radius: 5px;
  margin-right: 10px;
}

.navbar a {
  display: block;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
}

.navbar a:hover {
  background-color: #ececec;
  color: #333;
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

p {
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.850);
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
