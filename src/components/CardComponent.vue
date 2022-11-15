<template>
    <div class="character text-center">
        <img :src="character.image" :alt="character.name">
        <h4>{{ character.name }}</h4>
        <div>{{ character.status }}</div>
        <div class="font-weight-bold">{{ character.species }}</div>
    </div>
</template>

<script>
export default {
    props: {
        character: Object
    }
}
</script>

<style lang="scss" scoped>
h4 {
    text-transform: capitalize;
}

img {
    border-radius: 50%;
    box-shadow: 0 0 6px 3px rgba(#000, 0.15);
}
</style>