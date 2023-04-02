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
</style>
