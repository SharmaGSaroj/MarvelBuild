export default {
    name: "TheHeroThumb",


    props: {
        hero: Object
    },

    template: `
            <li>
                <img : src='"images/" + hero.biopic' alt="" style="width:150px">
                <div class="sprite" id="cap"></div>
                <div class="red-bumper"></div>
                <h5>
                    {{hero.name}}
                </h5>
            </li>
    
    `


}