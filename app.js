Vue.createApp({
    data() {
        return {
            mesFilms: [],
            nomFilm: '',

    };
    },
    methods: {
    addFilm(){
        this.mesFilms.push(this.nomFilm);
        this.nomFilm = ""
    }
    },
    computed: {

    },
    watch:{
    }
}).mount('#app');