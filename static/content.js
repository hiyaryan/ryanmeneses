export default {
    pageContent: [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'projects', title: 'Projects' },
        { id: 'contact', title: 'Contact' },
    ],
    name: 'Ryan Meneses',
    title: 'Software Engineer',
    tagline: 'On a mission to explore new frontiers in technology and passionately forge a path to a brighter future.',
    location: 'San Francisco Bay Area',
    about: [
        "Hi there! Thanks for stopping by. I'm Ryan, a software engineer with a big heart for technology and its power to change the world for the better. It's not just my job; it's my passion.",
        "Ever since I can remember, the universe's mysteries and our place in it have kept me up at night. Growing up, I realized that technology isn't just a tool, but a gateway to answering some of life's biggest questions and pushing the limits of what we think is possible.",
        "I've had the amazing opportunity to work on projects that aren't just about code, but about dreams – like helping humanity set foot on other planets, or tapping into the mind-blowing potential of quantum computing. Working with brilliant minds in these fields has been nothing short of inspiring.",
        "What really gets me excited is the thought of how technology can open doors to new discoveries. Whether it's developing smart algorithms to decode the universe or creating AI that might one day think like us, I believe we're on the cusp of something huge.",
        "When I'm not in front of a computer screen, I love diving into discussions with people from different walks of life. Their perspectives on these big technological leaps and how they see them shaping our future are always eye-opening.",
        "In a nutshell, I'm thrilled to be part of this incredible journey with fellow thinkers and innovators. We're in this together, pushing the boundaries of what's possible. Let's keep the momentum going and see where this path takes us!"
    ],
    quote: { 'text': 'We are a way for the universe to know itself.', "author": 'Carl Sagan' },
    projects: [
        {
            name: 'The CDJ',
            thumbnail: 'project-4-thumbnail.png',
            description: ["I am developing The Cognitive Distortion Journal (CDJ) as a tool to address a common challenge in cognitive-behavioral therapy (CBT): the identification and reframing of distorted thinking. Motivated by the difficulty many face in managing cognitive distortions in real-time, I created this project as a Single Page Application (SPA) using React and Material UI. This approach ensures a seamless, interactive user experience. The backend, built with Node.js and Express, interfaces with a MongoDB database through a RESTful API, offering robust data management. My aim was to provide an effective, intuitive tool for mental health interventions, leveraging modern web technologies."],
            ref: 'https://github.com/hiyaryan/the-cdj',
        },
        {
            name: 'This Website',
            thumbnail: 'project-3-thumbnail.png',
            description: ["My website is powered by Vue.js and Nuxt.js, and it's designed as a static webpage hosted on GitHub Pages. Its purpose is to professionally showcase my software engineering skills and projects. The use of Vue.js and Nuxt.js ensures that the site is dynamic, robust, and efficient in terms of user experience. It presents my work and achievements in a clear, simple, and accessible format, demonstrating my proficiency in modern web development technologies. Additionally, this website was co-developed with the help of ChatGPT, highlighting my skills in prompt engineering and my ability to integrate AI tools into software development."],
            ref: 'https://github.com/hiyaryan/ryanmeneses',
        },
        {
            name: 'QCS Quantum Circuits',
            thumbnail: 'project-2-thumbnail.png',
            description: ["At Rigetti Computing, I spearheaded a Rust-based tool that generates LaTeX-formatted quantum circuits, which are graphical representations of quantum systems used to visualize the flow of quantum information. The tool serializes Quil, the assembly language of quantum computers, into LaTeX form, and is accessible via the company's quantum cloud services (QCS). The tool provides a high-level abstraction of the structure of quantum instructions. This aids designers and researchers to analyze and design complex quantum algorithms before accessing valuable quantum computing resources."],
            ref: 'https://github.com/rigetti/quil-rs/pull/145'
        },
        {
            name: 'SIMOC SAM',
            thumbnail: 'project-1-thumbnail.png',
            description: ["At Over the Sun, I extended SIMOC, a habitat atmospheric and environmental simulation hosted on NGS, enabling citizen scientists and classrooms to access a live data feed from SAM, a real-life hermetically sealed habitat, using Vue.js for the front-end and Python for the back-end. My role involved designing and implementing features to allow users to view and analyze data from Adafruit sensors measuring CO2, humidity, temperature, pressure, and VOC levels. The project's challenge was to create a user-friendly interface with data visualization tools, and the outcome was a contribution to space exploration and education."],
            ref: 'https://github.com/overthesun',
        }
    ],
    contact: 'Find me on ',
    linkedin: 'https://www.linkedin.com/in/ryan-james-meneses',
    github: 'https://github.com/hiyaryan',
}