<template>
    <v-col class="nav-bar d-flex flex-row justify-center align-center ma-0 py-6" style="position: fixed; top: 0; left: 0; z-index: 9999; transition: 0.8s;">
        <div class="nav-bar-item bg-primary d-flex flex-row align-center justify-center rounded-xl py-2 px-6 elevation-4">
            <transition name="slide">   <!-- Para el futuro -->
                <v-img 
                    src="../../assets/logo.png" 
                    @click="scrollToSection('banner')" 
                    class="font-weight-bold text-colortext ma-0 pa-0 cursor-pointer"
                    style="width: 56px; height: 38px;">
                </v-img>
            </transition>
            <h2 @click="scrollToSection('about')" class="nav-bar-item font-weight-medium mx-2 cursor-pointer">About</h2>
            <h2 @click="scrollToSection('education')" class="nav-bar-item font-weight-medium mx-2 cursor-pointer">Education</h2>
            <h2 @click="scrollToSection('skills')" class="nav-bar-item font-weight-medium mx-2 cursor-pointer">Skills</h2>
            <h2 @click="scrollToSection('projects')" class="nav-bar-item font-weight-medium mx-2 cursor-pointer">Projects</h2>
        </div>
        <v-spacer/>
        <v-container class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center cursor-pointer" style="height: 38px; width: 38px;">
            <v-icon @click="toggleTheme" class="text-colortext1" size="18">mdi-theme-light-dark</v-icon>
        </v-container>
        <v-container class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center cursor-pointer" style="height: 58px; width: 58px;">
            <v-icon class="text-colortext1">mdi-gmail</v-icon>
        </v-container>
        <v-container class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center cursor-pointer" style="height: 58px; width: 58px;">
            <v-icon class="text-colortext1">mdi-linkedin</v-icon>
        </v-container>
        <v-container class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center cursor-pointer" style="height: 58px; width: 58px;">
            <v-icon class="text-colortext1">mdi-github</v-icon>
        </v-container>
        <v-container class="nav-bar-item bg-primary rounded-circle mx-3 my-1 pa-1 elevation-4 d-flex justify-center align-center cursor-pointer" style="height: 58px; width: 58px;">
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
                        <v-btn @click="scrollToSection('about')" class="w-25 h-100 bg-primary rounded-xl mx-4 text-capitalize elevation-2" style="max-width: 162px;">
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

    <Section ref="about" class="bg-background w-100 ma-0 px-6" style="min-height: 100vh;">
        <v-col style="padding-top: 106px;">
            <h1>About me</h1>
            
        </v-col>
    </Section>

    <Section ref="education" class="bg-background w-100 ma-0 px-6" style="min-height: 100vh;">
        <v-col style="padding-top: 106px;">
            <h1>Education</h1>
        </v-col>
    </Section>

    <Section ref="skills" class="bg-background h-50 w-100 ma-0 px-6" style="min-height: 100vh;">
        <v-col style="padding-top: 106px;">
            <h1 class="mb-4">My skills</h1>
            <h2>Programming languages</h2>
            <v-row class="my-2">

                <v-col xs="6" sm="4" md="4" lg="4" xl="2" class="rounded-ts-xl d-flex flex-column align-center border-lg pa-4">
                    <v-container class="d-flex flex-row justify-center align-center w-100 h-25">
                        <v-icon class="text-colortext1 ma-2" size="64">mdi-language-c</v-icon>
                        <h1 class="text-colortext1 font-weight-bold">C & C++</h1>
                    </v-container>
                    <p class="font-weight-medium">
                        One of my favorite languages, thanks to <b>C</b> I developed my knowledge and skills regarding the internal functioning 
                        of the computer and how programs, compilers and linkeditors work.
                    </p>
                    <br>
                    <p class="font-weight-medium">
                        The contents that I handle without any problems are: Characteristics of the <b>imperative paradigm</b>, functions and 
                        modularization, process <b>efficiency</b>, <b>recursion</b>, <b>library</b> use and construction, pointers, structs, <b>abstract data 
                        types</b> and memory management.
                    </p>
                    <br>
                    <p class="font-weight-medium">
                        My specialty is processing <b>large files</b> to get the output in the shortest time possible using structures like <b>AVL 
                        trees</b>, <b>hash tables</b>, <b>linked lists</b> and occurrence vectors, and algorithms such as <b>binary seacrh</b>, DFS, BFS, 
                        dijkstra, <b>merge sort</b>, <b>quick sort</b>, among others.
                    </p>
                </v-col>

                <v-col xs="6" sm="6" md="4" lg="4" xl="2" class="d-flex flex-column align-center border-lg pa-4">
                    <v-container class="d-flex flex-row justify-center align-center w-100 h-25">
                        <v-icon class="text-colortext1 ma-2" size="64">mdi-language-java</v-icon>
                        <h1 class="text-colortext1 font-weight-bold">Java</h1>
                    </v-container>
                    <p class="font-weight-medium">
                        <b>Java</b> is the language that I use the most today due to the degree I am studying.
                    </p>
                    <br>
                    <p class="font-weight-medium">
                        I have excellent knowledge of the <b>object-oriented paradigm</b>, with complete knowledge of <b>classes</b>, 
                        <b>inheritance</b>, <b>interfaces</b>, <b>generics</b>, abstract classes, encapsulation, hiding, polymorphism, error messages and methods.
                    </p>
                    <br>
                    <p class="font-weight-medium">
                        In addition, implementing strategies for different needs, such as <b>iterators</b>, predicates, lambda functions, equals and <b>hashing</b>.
                    </p>
                </v-col>

                <v-col xs="6" sm="6" md="4" lg="4" xl="2" class="d-flex flex-column align-center border-lg pa-4">
                    <v-container class="d-flex flex-row justify-center align-center w-100 h-25">
                        <v-icon class="text-colortext1 ma-2" size="64">mdi-language-ruby</v-icon>
                        <h1 class="text-colortext1 font-weight-bold">Ruby</h1>
                    </v-container>
                </v-col>

                <v-col xs="6" sm="6" md="4" lg="4" xl="2" class="d-flex flex-column align-center border-lg pa-4">
                    <v-container class="d-flex flex-row justify-center align-center w-100 h-25">
                        <v-icon class="text-colortext1 ma-2" size="64">mdi-language-javascript</v-icon>
                        <h1 class="text-colortext1 font-weight-bold">JavaScript</h1>
                    </v-container>
                </v-col>

                <v-col xs="6" sm="6" md="4" lg="4" xl="2" class="d-flex flex-column align-center border-lg pa-4">
                    <v-container class="d-flex flex-row justify-center align-center w-100 h-25">
                        <v-icon class="text-colortext1 ma-2" size="64">mdi-bash</v-icon>
                        <h1 class="text-colortext1 font-weight-bold">Assembler(Intel) & Bash</h1>
                    </v-container>
                </v-col>

                <v-col xs="6" sm="4" md="4" lg="4" xl="2" class="rounded-be-xl d-flex flex-column align-center border-lg pa-4">
                    <v-container class="d-flex flex-row justify-center align-center w-100 h-25">
                        <v-icon class="text-colortext1 ma-2" size="64">mdi-language-python</v-icon>
                        <h1 class="text-colortext1 font-weight-bold">Python</h1>
                    </v-container>
                </v-col>

            </v-row>

            <h2>Frameworks</h2>
            <v-row class="my-2">
                <v-col cols="6" class="bg-red rounded-s-xl">
                    Vue
                </v-col>
                <v-col cols="6" class="bg-yellow">
                    React native
                </v-col>
            </v-row>
        </v-col>
    </Section>

    <Section ref="projects" class="bg-background h-25 w-100  ma-0 px-6" style="min-height: 100vh;">
        <v-col style="padding-top: 106px;">
            <h1>Projects</h1>
        </v-col>
    </Section>

</template>

<style scoped>
    .background-image-container {
        background-image: url('../../assets/coding-bg.jfif');
        background-size: cover;
        background-position: center;
    }
    .background-image-container.dark {
        background-image: url('../../assets/bg-dark2.jpg');
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
    .nav-bar-item :hover {
        color: rgb(255, 136, 0);
        transition: background-color color 0.2s ease;
    }
    b {
        color: rgb(255, 136, 0);
        transition: background-color color 0.2s ease;
    }
</style>

<script setup>
    import { ref } from 'vue';
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

    const about = ref(null);
    const education = ref(null);
    const skills = ref(null);
    const banner = ref(null);
    const projects = ref(null);

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
        }
    };

    var showBanner = ref(false);

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
    });

</script>