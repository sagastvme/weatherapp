<template>
    <div class=" rounded-xl flex-col  w-full flex items-center justify-center h-full  text-center text-white "
         v-if="dataReceived && !error">
        <div class="flex flex-row  w-full mb-auto ">
            <img :src="this.dataReceived.current.condition.icon" class="select-none ">
            <div class="text-lg text-gray-300 font-medium my-auto">Right now is
                <span class="text-white text-xl font-bold">{{ this.dataReceived.current.condition.text }} </span> in
                <span class=" text-white text-xl font-bold">{{ this.$route.params.city }}</span>
            </div>
        </div>

        <div class=" w-2/3   h-full text-lg text-justify">
            <div class="mt-8">


                <ul class="w-full  text-center">
                    <li><span class="mr-2">Local time and date:</span> <span
                            class="font-medium ">{{ this.dataReceived.location.localtime }}</span></li>


                    <li><span class="mr-2">Continent:</span> <span class="font-medium">{{ processedContinent }}</span>
                    </li>
                    <li><span class="mr-2">Region:</span> <span class="font-medium">{{
                        this.dataReceived.location.region
                        }}</span></li>

                    <li><span class="mr-2">Clouds:</span> <span class="font-medium">{{
                        this.dataReceived.current.cloud
                        }}%</span></li>


                    <li><span>Feels like:</span> <span
                            class="font-medium">{{ this.dataReceived.current.feelslike_c }} °C</span></li>
                    <li><span>Humidity:</span> <span class="font-medium">{{
                        this.dataReceived.current.humidity
                        }}%</span>

                    </li>
                    <li>
                        <span>Temperature:</span> <span class="font-medium">{{
                        this.dataReceived.current.temp_c
                        }} °C</span>
                    </li>
                </ul>


            </div>
        </div>

    </div>
    <div v-else-if="error && dataReceived===null " class="text-4xl text-white  w-full text-center my-auto">
        <span>Error, what you are looking for doesnt exist</span>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "WeatherInfo",
    data() {
        return {
            api_key: 'cb3f848e6f004acf8ff131821232604',
            city: null,
            dataReceived: false,
            localTime: null,
            processedContinent: null,
            error: true

        }
    },
    async created() {

        await this.sendCity();
    },
    methods: {
        async sendCity() {
            this.clicked = true
            var response
            try {
                response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${this.api_key}&q=${this.$route.params.city}&aqi=no`)
                this.error = false
                this.dataReceived = response.data


                this.getContinent(this.dataReceived.location.tz_id);
            } catch {
            this.dataReceived=null
            }

        },
        getContinent(t) {

            this.processedContinent = t.split("/")[0];


        }
    }
}
</script>
<style>
#test {
    background-image: url("../assets/thunderstorm.webp");
}
</style>