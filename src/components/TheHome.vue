<template>

        <div class=" rounded-xl flex-col gap-3 flex items-center justify-center  lg:w-1/2 mx-auto h-1/3 my-auto">
           <h1 class="text-white text-xl  text-center font-bold font-sans -mt-10">Weather App</h1>
            <form @submit.prevent="takeToWeather" class="flex flex-col gap-2">
                <input type="text" name="" id="" required v-model.trim="city" class="bg-gray-200  mx-auto  rounded-lg p-1 hover:border hover:border-black hover:border-2 hover:bg-white">
                <input type="submit" value="Get weather" class="mt-4 p-1 hover:bg-white  rounded-lg font-semibold hover:font-bold shadow-lg bg-gray-300 cursor-pointer">
            </form>
        </div>

</template>

<script>
export default {
    name: "TheHome",
    data(){
        return{
            clicked:false,
            city:''
        }
    },
    methods:{
        takeToWeather() {
            this.$router.push({ name: "weather", params: { city: this.city } });
        }
    }
}
</script>

<style scoped>

</style>