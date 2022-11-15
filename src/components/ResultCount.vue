<template>
    <div class="text-center">
        <h4 class="text-center">Found {{ store.characterList.length }} characters</h4>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name: 'ResultCount',
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>