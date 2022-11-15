<template>
    <section class="container">
        <div v-if="store.loading">
            Sto caricando i dati
        </div>
        <div class="row" v-if="!store.loading">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" v-for="(item, index) in store.characterList"
                :key="item.id">
                <CardComponent :character="item" />
            </div>
        </div>
    </section>
</template>

<script>
import { store } from '../store';
import CardComponent from './CardComponent.vue';

export default {
    name: "CharacterList",
    components: { CardComponent },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>