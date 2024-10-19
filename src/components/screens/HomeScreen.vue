<template>
    <Header :sections="[
        {name: 'banner', scroll: () => {scrollToSection('banner')}},
        {name: 'about', scroll: () => {scrollToSection('about')}},
        {name: 'education', scroll: () => {scrollToSection('education')}},
        {name: 'skills', scroll: () => {scrollToSection('skills')}},
        {name: 'projects', scroll: () => {scrollToSection('projects')}}
        ]"/>
    <Section ref="banner" class="background-image-container bg-background h-screen w-100 d-flex justify-center flex-column ma-0 py-0">

        <v-container class="d-flex flex-column justify-center align-center h-100 w-100">
            <v-container class="d-flex flex-column align-center h-50 w-66 rounded-lg elevation-4 pa-0" style="max-width: 760px">
                <v-container class="bg-primary w-100 h-75 rounded-t-lg d-flex flex-row align-center pa-12">
                    <v-container class="profile-image-container bg-tertiary rounded-circle"/>
                    <v-container>
                        <h1 class="text-colortext font-weight-medium" style="font-size: 2rem; line-height: 0.1;">Hey! I'am</h1>
                        <h1 class="text-colortext font-weight-medium" style="font-size: 3rem;">Federico Magri</h1>
                        <h2 class="text-colortext font-weight-light"><b><u>Computer Engineering</u></b> student from Argentina</h2>
                    </v-container>
                </v-container>
                <v-container class="opacity-90 bg-tertiary d-flex flex-column justify-center align-center h-100 w-100 rounded-b-lg pa-0">
                    <v-container class="d-flex flex-row justify-center align-center pa-0" style="height: 48px;">
                        <v-btn @click="scrollToSection('about')" class="w-25 h-100 bg-primary rounded-xl mx-4 text-capitalize elevation-2" style="max-width: 162px; cursor: none;">
                            See portfolio
                        </v-btn>
                        <v-btn @click="openWhatsApp()" class="w-25 h-100 bg-primary rounded-xl mx-4 text-capitalize elevation-2" style="max-width: 162px; cursor: none;">
                            <v-icon class="mr-2" size="22">mdi-whatsapp</v-icon>
                            let's talk!
                        </v-btn>
                    </v-container>
                </v-container>
            </v-container>   
        </v-container>
    </Section>

    <Section ref="about" class="bg-background w-100 ma-0 px-6" style="min-height: 100vh;">
        <v-col style="padding-top: 106px;">
            <h1 style="font-size: 3rem;">About me</h1>
            
        </v-col>
    </Section>

    <Section ref="education" class="bg-background w-100 ma-0 px-6" style="min-height: 100vh;">
        <transition name="slide2">
            <EducationSection v-if="showED"/>
        </transition>
    </Section>

    <Section ref="skills" class="bg-background h-50 w-100 ma-0 px-6" style="min-height: 100vh;">
        <v-col style="padding-top: 106px;">

            <transition name="slide">
                <div v-if="showSkillNav" class="d-flex flex-row align-center justify-center py-2 px-6 w-50" style="position: fixed; top: 10vh; right: 0; z-index: 9999;">
                    <v-container @click="scrollToSection('languages')" class="nav-bar-item bg-primary rounded-lg mx-3 my-1 pa-2 elevation-4 d-flex d-row justify-center align-center">
                        <v-icon class="mx-2" size="28">mdi-keyboard</v-icon>
                        <h3 class="font-weight-medium">Programming languages</h3>
                    </v-container>
                    <v-container @click="scrollToSection('frameworks')" class="nav-bar-item bg-primary rounded-lg mx-3 my-1 pa-2 elevation-4 d-flex d-row justify-center align-center">
                        <v-icon class="mx-2" size="28">mdi-electron-framework</v-icon>
                        <h3 class="font-weight-medium">Frameworks</h3>
                    </v-container>
                    <v-container @click="scrollToSection('knowledge')" class="nav-bar-item bg-primary rounded-lg mx-3 my-1 pa-2 elevation-4 d-flex d-row justify-center align-center">
                        <v-icon class="mx-2" size="28">mdi-brain</v-icon>
                        <h3 class="font-weight-medium">Other knowledge</h3>
                    </v-container>
                </div>
            </transition>

            <h1 style="font-size: 3rem;" class="mb-4">My skills</h1>

            <Section ref="languages" class="w-100 ma-0 px-0" style="padding-top: 106px">
                <h2>Programming languages</h2>
                <transition name="slide2">
                    <ProgrammingLgSection v-if="showPLG" class="appear"/>
                </transition>
            </Section>
            
            <Section ref="frameworks" class="w-100 ma-0 px-0" style="padding-top: 106px">
                <h2>Frameworks</h2>
                <transition name="slide2">
                    <FrameworksSection v-if="showFW"/>
                </transition>
            </Section>
            
        </v-col>
    </Section>

    <Section ref="projects" class="bg-background h-25 w-100  ma-0 px-6" style="min-height: 100vh;">
        <v-col style="padding-top: 106px;">
            <h1 style="font-size: 3rem;">Projects</h1>
        </v-col>
    </Section>

</template>

<style scoped>
    .background-image-container {
        background-image: url('/src/assets/coding-bg.jfif');
        background-size: cover;
        background-position: center;
    }
    .background-image-container.dark {
        background-image: url('/src/assets/bg-dark2.jpg');
    }
    .profile-image-container {
        background-image: url('/src/assets/profile-tr.png');
        background-size: cover;
        background-position: center;
        min-width: 200px; min-height: 200px; max-width: 200px; max-height: 200px;
        margin-left: 25px;
        margin-right: 25px;
        transition: all 0.5s ease;
    }
    .profile-image-container:hover {
        min-width: 250px; min-height: 250px; max-width: 250px; max-height: 250px;
        margin-left: 0px;
        margin-right: 0px;
    }
    .nav-bar.sticky {
        backdrop-filter: blur(30px);
    }
    
    .slide-enter-active{
        transition: all 0.5s ease;
        opacity: 0;
    }
    .slide-enter-to {
        opacity: 1;
    }
    .slide-leave-active {
        transition: all 0.5s ease;
    }
    .slide-leave-to {
        transform: translateY(-40px);
        opacity: 0;
    }

    .slide2-enter-active{
        transition: all 1.2s ease;
        opacity: 0;
    }
    .slide2-enter-to {
        opacity: 1;
    }
    .slide2-leave-active {
        transition: all 0.2s ease;
    }
    .slide2-leave-to {
        transform: translateY(-40px);
        opacity: 0;
    }
</style>

<script setup>
    import { ref } from 'vue';
    import Header from '../Header.vue';
    import EducationSection from '../sections/EducationSection.vue';
    import ProgrammingLgSection from '../sections/ProgrammingLgSection.vue';
    import FrameworksSection from '../sections/FrameworksSection.vue';

    const about = ref(null);
    const education = ref(null);
    const skills = ref(null);
    const banner = ref(null);
    const projects = ref(null);
    const languages = ref(null);
    const frameworks = ref(null);

    const scrollToSection = (section) => {
        if (section === 'about' && about.value) {
            about.value.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'education' && education.value) {
            education.value.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'skills' && skills.value) {
            skills.value.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'banner' && banner.value) {
            banner.value.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'projects' && projects.value) {
            projects.value.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'languages' && languages.value) {
            languages.value.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'frameworks' && frameworks.value) {
            frameworks.value.scrollIntoView({ behavior: 'smooth' });
        }
    };

    var showBanner = ref(false);
    var showSkillNav = ref(false);

    // in-sections
    var showED = ref(false);
    var showPLG = ref(false);
    var showFW = ref(false);

    window.addEventListener("scroll", function(){
        var header = document.querySelector(".nav-bar");
        var item = document.querySelector(".nav-bar-item");

        if (window.scrollY >= 0.85*window.innerHeight) {
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

        // Skills section
        if (window.scrollY >= 2.85*window.innerHeight){
            showSkillNav.value = true;
        } else {
            showSkillNav.value = false;
        }

        // ED
        if (window.scrollY >= 1.3*window.innerHeight){
            showED.value = true
        } else {
            showED.value = false
        }

        // PLG
        if (window.scrollY >= 2.6*window.innerHeight){
            showPLG.value = true
        } else {
            showPLG.value = false
        }

        // FW
        if (window.scrollY >= 3.8*window.innerHeight){
            showFW.value = true
        } else {
            showFW.value = false
        }


    });

    const openWhatsApp = () => {
      const phoneNumber = '1125648009';
      const message = 'Hello Fede, i saw your portfolio...';
      const encodedMessage = encodeURIComponent(message);
      const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(url, '_blank');
    }
</script>