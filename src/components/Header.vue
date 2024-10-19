<template>
    <v-row class="nav-bar d-flex flex-row justify-center align-center ma-0 py-6 w-100" style="position: fixed; top: 0; left: 0; z-index: 9999; transition: 0.8s;">
        <v-col 
            xs="12" sm="12" md="6" lg="6" xl="6" 
            class="d-flex flex-row align-center"
        >
            <v-div class="nav-bar-item bg-primary d-flex flex-row align-center justify-start rounded-xl py-2 px-6 elevation-4">
                <v-img 
                    src="/src/assets/logo.png" 
                    @click="sections.at(0).scroll" 
                    class="font-weight-bold text-colortext ma-0 pa-0"
                    style="min-height: 38px; max-height: 38px; min-width: 56px; max-width: 56px;">
                </v-img>
                    
                <h2 class="nav-bar-item font-weight-medium mx-2" 
                    v-for="section in sections.slice(1)" :key="section.name" @click="section.scroll"> {{section.name}} 
                </h2>
            </v-div>
        </v-col>
        <v-spacer/>
        <v-col xs="12" sm="12" md="6" lg="6" xl="6" class="d-flex flex-row align-center justify-end">
            <v-container @click="toggleTheme" class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center" style="height: 38px; width: 38px;">
                <v-icon class="text-colortext1" size="18">mdi-theme-light-dark</v-icon>
            </v-container>
            <a href="mailto:fedemagri23@gmail.com"
                class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center" 
                style="height: 58px; width: 58px; text-decoration: none;"
            >
                <v-icon class="text-colortext1">mdi-gmail</v-icon>
            </a>
            <v-container @click="goToLink('https://www.linkedin.com/in/federico-magri-342581264/')" class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center" style="height: 58px; width: 58px;">
                <v-icon class="text-colortext1">mdi-linkedin</v-icon>
            </v-container>
            <v-container @click="goToLink('https://github.com/fedemagri')" class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center" style="height: 58px; width: 58px;">
                <v-icon class="text-colortext1">mdi-github</v-icon>
            </v-container>
            <v-container class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center" style="height: 58px; width: 58px;">
                <v-icon class="text-colortext1">mdi-book-account</v-icon>
            </v-container>
        </v-col>
    </v-row>
</template>

<style scoped>
    .nav-bar-item :hover{
        color: rgb(255, 136, 0);
    }
</style>

<script setup>

    const props = defineProps({
        sections: {
            type: Array,
            required: true,
        }

    });

    import { onMounted, ref } from 'vue';
    import { useTheme } from 'vuetify';

    const theme = useTheme();
    
    const toggleTheme = () => {
        var banner = document.querySelector(".background-image-container");
        
        theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light';
    
        if (theme.global.name.value === 'dark')
            banner.classList.add("dark");
        else
            banner.classList.remove("dark");
    };

    const goToLink = (link) => {
        window.open(link, '_blank');
    };

</script>