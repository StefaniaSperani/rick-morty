import { reactive } from "vue";

export const store = reactive({
    apiURL: 'https://rickandmortyapi.com/api/',
    characterList: [],
    loading: false,
    search: {
        status: '',
        name: ''
    },
    errormessage: ''
});