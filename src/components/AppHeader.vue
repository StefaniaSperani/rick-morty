<template>
    <header class="container">
        <h1 class="text-center my-5"> {{ title }}</h1>
    </header>

</template>

<script>
export default {
    name: 'AppHeader',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
h1 {
    font-weight: 700;
}
</style>