<template>
    <v-col class="nav-bar d-flex flex-row justify-center align-center ma-0 py-6" style="position: fixed; top: 0; left: 0; z-index: 9999; transition: 0.8s;">
        <div class="nav-bar-item bg-primary d-flex flex-row align-center justify-center rounded-xl py-1 px-6 elevation-4">
            <transition name="slide">
                <v-img 
                    v-if="showBanner" 
                    src="../../assets/logo.png" 
                    @click="scrollToSection('banner')" 
                    class="font-weight-bold text-colortext ma-0 pa-0 cursor-pointer"
                    style="width: 48px; height: 48px;">
                </v-img>
            </transition>
            <h2 @click="scrollToSection('introduction')" class="font-weight-bold text-colortext ma-2 cursor-pointer">Introduction</h2>
            <h2 @click="scrollToSection('education')" class="font-weight-bold text-colortext ma-2 cursor-pointer">Education</h2>
            <h2 @click="scrollToSection('skills')" class="font-weight-bold text-colortext ma-2 cursor-pointer">Skills</h2>
        </div>
        <v-spacer/>
        <v-container class="nav-bar-item bg-primary rounded-circle mx-4 my-1 pa-1 elevation-4 d-flex justify-center align-center cursor-pointer" style="height: 42px; width: 42px;">
            <v-icon @click="toggleTheme" class="text-colortext1" size="18">mdi-theme-light-dark</v-icon>
        </v-container>
        <v-container class="nav-bar-item bg-primary rounded-circle mx-4 my-1 pa-1 elevation-4 d-flex justify-center align-center cursor-pointer" style="height: 64px; width: 64px;">
            <v-icon class="text-colortext1">mdi-gmail</v-icon>
        </v-container>
        <v-container class="nav-bar-item bg-primary rounded-circle mx-4 my-1 pa-1 elevation-4 d-flex justify-center align-center cursor-pointer" style="height: 64px; width: 64px;">
            <v-icon class="text-colortext1">mdi-linkedin</v-icon>
        </v-container>
        <v-container class="nav-bar-item bg-primary rounded-circle mx-4 my-1 pa-1 elevation-4 d-flex justify-center align-center cursor-pointer" style="height: 64px; width: 64px;">
            <v-icon class="text-colortext1">mdi-book-account</v-icon>
        </v-container>
    </v-col>
    <Section ref="banner" class="background-image-container bg-background h-screen w-100 d-flex justify-center flex-column ma-0 py-0">

        <v-container class="d-flex flex-column justify-center align-center h-100 w-100">
            <v-container class="d-flex flex-column align-center h-50 w-66 rounded-lg elevation-4 pa-0" style="max-width: 760px">
                <v-container class="bg-primary w-100 h-50 rounded-t-lg d-flex flex-row align-center pa-12">
                    <v-container class="bg-tertiary rounded-circle" style="min-width: 96px; min-height: 96px; max-width: 96px; max-height: 96px;"/>
                    <v-container>
                        <h1 class="text-colortext font-weight-medium">Hey! I'am Federico Magri</h1>
                        <h3 class="text-colortext font-weight-light"><b><u>Software Engineering</u></b> student from Argentina</h3>
                    </v-container>
                </v-container>
                <v-container class="opacity-90 bg-tertiary d-flex flex-column justify-center align-center h-100 w-100 rounded-b-lg pa-0">
                    <v-container class="d-flex flex-row justify-center align-center pa-0" style="height: 48px;">
                        <v-btn @click="scrollToSection('introduction')" class="w-25 h-100 bg-primary rounded-xl mx-4 text-capitalize elevation-2" style="max-width: 162px;">
                            See portfolio
                        </v-btn>
                        <v-btn class="w-25 h-100 bg-primary rounded-xl mx-4 text-capitalize elevation-2" style="max-width: 162px;">
                            let's talk! ▶
                        </v-btn>
                    </v-container>
                </v-container>
            </v-container>   
        </v-container>
    </Section>

    <Section ref="introduction" class="h-screen w-100 h-screen ma-0">
        <v-col class="h-screen">
            <h1>Introduction</h1>
        </v-col>
    </Section>

    <Section ref="education" class="h-screen w-100 h-screen ma-0">
        <v-col class="h-screen">
            <h1>Education</h1>
        </v-col>
    </Section>

    <Section ref="skills" class="h-screen w-100 h-screen ma-0">
        <v-col class="h-screen">
            <h1>Skills</h1>
        </v-col>
    </Section>

</template>

<style scoped>
    .background-image-container {
        background-image: url('../../assets/coding-bg.jfif');
        background-size: cover;
        background-position: center;
    }
    .nav-bar.sticky {
        backdrop-filter: blur(30px);
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 0.5s ease;
    }
    .slide-enter, .slide-leave-to {
        transform: translateX(-40px);
        opacity: 0;
    }
</style>

<script setup>
    import { ref } from 'vue';
    import { useTheme } from 'vuetify';

    const theme = useTheme();
    
    const toggleTheme = () => {
        theme.global.name.value = theme.global.name.value === 'light' ? 'dark' : 'light';
    };

    const introduction = ref(null);
    const education = ref(null);
    const skills = ref(null);
    const banner = ref(null);

    const scrollToSection = (section) => {
        if (section === 'introduction' && introduction.value) {
            introduction.value.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'education' && education.value) {
            education.value.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'skills' && skills.value) {
            skills.value.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'banner' && banner.value) {
            banner.value.scrollIntoView({ behavior: 'smooth' });
        }
    };

    var showBanner = ref(false);

    window.addEventListener("scroll", function(){
        var header = document.querySelector(".nav-bar");
        var item = document.querySelector(".nav-bar-item");

        if (window.scrollY >= window.innerHeight) {
            header.classList.add("sticky", "bg-primary", "elevation-4");
            header.classList.remove("py-6");
            item.classList.remove("bg-primary");
            showBanner.value = true;
        } else {
            header.classList.remove("sticky", "bg-primary", "elevation-4");
            header.classList.add("py-6");
            item.classList.add("bg-primary");
            showBanner.value = false;
    }
    })

</script>