<template>
    <nav class="navbar">
        <ul>
            <li v-for="(section, index) in pageContent" :key="index">
                <nuxt-link :to="`#${section.id}`">{{ section.title
                }}</nuxt-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        pageContent: {
            type: Array,
            required: true
        }
    },
}
</script>

<style>
.navbar {
    background-color: rgba(0, 0, 0, 0.850);
    padding: 10px 20px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

@media screen and (min-width: 475px) {
    .navbar ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        justify-content: space-evenly;

    }
}

@media screen and (max-width: 475px) {
    .navbar ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
    }
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
</style>
