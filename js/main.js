import HeroThumb from "./components/TheHeroThumbnail.js";
import LightBox from "./components/TheLightbox.js";


(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            fetch('./data.json')
                .then(res => res.json())
                .then(data => this.heroData = data)
                .catch(error => console.error(error));
        },

        data() {
            return {
                heroData: {},
                lbData: {}
            }
        },

        components: {
            theherothumb: HeroThumb,
            thelightbox: LightBox
        },
        methods: {
            loadLightbox(hero) {
                this.lbData = hero;
            }
        },
    }).mount('#app')
})()