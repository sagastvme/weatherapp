<template>
    <div :class="backgroundColor" class="  flex items-center justify-center  h-screen">

        <div class="bg-gray-50 bg-opacity-30 rounded-xl mb-36 w-full md:w-1/2  h-1/2 flex">
            <router-view/>

        </div>


    </div>

</template>

<script>


export default {
    name: 'App',
    data() {
        return {
            backgroundColor: null,
            options:
                ['bg-gradient-to-r from-black to-gray-600',

                    'bg-gradient-to-r from-black to-blue-900',

                    'bg-gradient-to-b from-orange-600 to-yellow-600',
                    'bg-gradient-to-t from-black to-purple-800',
                    'bg-gradient-to-t from-red-600 to-yellow-800',
                    'bg-gradient-to-t from-green-600 to-pink-800',
                    'bg-gradient-to-l from-yellow-600 to-gray-600',
                    'bg-gradient-to-l from-green-800 to-black',
                    'bg-gradient-to-l from-orange-800 to-purple-600']
        }
    },
    mounted() {
       this.chooseBackground();
    },
    methods: {
        chooseBackground(){
            const randNumber= Math.floor(Math.random() * this.options.length);
                this.backgroundColor=this.options[randNumber];

        }
    },

    components: {}
}
</script>

