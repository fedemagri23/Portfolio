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
                <v-container class="bg-primary w-100 h-50 rounded-t-lg d-flex flex-row align-center pa-12">
                    <v-container class="bg-tertiary rounded-circle" style="min-width: 96px; min-height: 96px; max-width: 96px; max-height: 96px;"/>
                    <v-container>
                        <h1 class="text-colortext font-weight-medium">Hey! I'am Federico Magri</h1>
                        <h3 class="text-colortext font-weight-light"><b><u>Computer Engineering</u></b> student from Argentina</h3>
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
            <h1 style="font-size: 3rem;">About me</h1>
            
        </v-col>
    </Section>

    <Section ref="education" class="bg-background w-100 ma-0 px-6" style="min-height: 100vh;">
        <v-col style="padding-top: 106px;">
            <h1 style="font-size: 3rem;">Education</h1>
            <v-row class="my-2">

                <v-col xs="12" sm="12" md="4" lg="4" xl="4" class="rounded-ts-xl d-flex flex-column align-center border-lg pa-4">
                    <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                        <v-icon class="text-colortext1 ma-2" size="64">mdi-school-outline</v-icon>
                        <h1 class="text-colortext1 font-weight-bold">Secondary school</h1>
                    </v-container>
                    <v-container 
                        @click="goToLink('https://lasalleflorida.edu.ar/')"
                        class="bg-secondary w-100 border-md rounded d-flex flex-row justify-center align-center cursor-pointer"
                    >
                        <h1>Institution: La Salle florida</h1>
                        <v-icon class="text-colortext1 mx-2" size="28">mdi-open-in-new</v-icon>
                    </v-container>
                    <v-container class="w-100 px-1 pt-6">
                        <h2 class="font-weight-medium">Title: <b>Electronic technician</b> </h2>
                        <h2 class="font-weight-medium">Start date: January 2015</h2>
                        <h2 class="font-weight-medium">Estimated end date: December 2021</h2>
                    </v-container>
                </v-col>

                <v-col xs="12" sm="12" md="4" lg="4" xl="4" class="d-flex flex-column align-center border-lg pa-4">
                    <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                        <v-icon class="text-colortext1 ma-2" size="64">mdi-earth</v-icon>
                        <h1 class="text-colortext1 font-weight-bold">English</h1>
                    </v-container>
                    <a href="StatementOfResult.pdf" download style="text-decoration: none; width: 100%;">
                        <v-container
                            class="bg-secondary w-100 border-md rounded d-flex flex-row justify-center align-center cursor-pointer"
                        >
                            <h1>First Certificate in English</h1>
                            <v-icon class="text-colortext1 mx-2" size="28">mdi-download</v-icon>
                        </v-container>
                    </a>
                    
                </v-col>
                
                <v-col xs="12" sm="12" md="4" lg="4" xl="4" class="rounded-be-xl d-flex flex-column align-center border-lg pa-4">
                    <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                        <v-icon class="text-colortext1 ma-2" size="64">mdi-certificate-outline</v-icon>
                        <h1 class="text-colortext1 font-weight-bold">university</h1>
                    </v-container>
                    <v-container 
                        @click="goToLink('https://www.itba.edu.ar/')"
                        class="bg-secondary w-100 border-md rounded d-flex flex-row justify-center align-center cursor-pointer"
                    >
                        <h1>Institution: ITBA</h1>
                        <v-icon class="text-colortext1 mx-2" size="28">mdi-open-in-new</v-icon>
                    </v-container>
                    <v-container class="w-100 px-1 pt-6">
                        <h2 class="font-weight-medium">Degree: <b>Computer engineering</b> </h2>
                        <h2 class="font-weight-medium">Start date: March 2022</h2>
                        <h2 class="font-weight-medium">Estimated end date: July 2027</h2>
                        <br>
                        <h3 class="font-weight-medium">More: I have a university scholarship because I excelled in technical secondary school</h3>
                    </v-container>
                </v-col>
                
            </v-row>
        </v-col>
    </Section>

    <Section ref="skills" class="bg-background h-50 w-100 ma-0 px-6" style="min-height: 100vh;">
        <v-col style="padding-top: 106px;">

            <transition name="slide">
                <div v-if="showSkillNav" class="d-flex flex-row align-center justify-center py-2 px-6 w-50" style="position: fixed; top: 10vh; right: 0; z-index: 9999;">
                    <v-container @click="scrollToSection('languages')" class="nav-bar-item bg-primary rounded-lg mx-3 my-1 pa-2 elevation-4 cursor-pointer d-flex justify-center align-center">
                        <h3>Programming languages</h3>
                    </v-container>
                    <v-container @click="scrollToSection('frameworks')" class="nav-bar-item bg-primary rounded-lg mx-3 my-1 pa-2 elevation-4 cursor-pointer d-flex justify-center align-center">
                        <h3>Frameworks</h3>
                    </v-container>
                    <v-container @click="scrollToSection('knowledge')" class="nav-bar-item bg-primary rounded-lg mx-3 my-1 pa-2 elevation-4 cursor-pointer d-flex justify-center align-center">
                        <h3>Other knowledge</h3>
                    </v-container>
                </div>
            </transition>

            <h1 style="font-size: 3rem;" class="mb-4">My skills</h1>

            <Section ref="languages" class="w-100 ma-0 px-0" style="padding-top: 106px">
                <h2>Programming languages</h2>
                <v-row class="my-2">

                    <v-col xs="6" sm="6" md="4" lg="4" xl="2" class="rounded-ts-xl d-flex flex-column align-center border-lg pa-4">
                        <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
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
                        <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
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
                        <br>
                        <p class="font-weight-medium">
                            Taking advantage of all of the above, I usually use the algorithmic strategies of <b>divide & conquer</b>, backtracking, greedy and dynamic programming 
                            to structure the different data structures that the language offers.
                        </p>
                        <br>
                        <p class="font-weight-medium">
                            Lastly, I use the following libraries: <b>Metaphone</b> (fuzzy text search) and <b>Lucene</b> (index for text search requests).
                        </p>
                    </v-col>

                    <v-col xs="6" sm="6" md="4" lg="4" xl="2" class="d-flex flex-column align-center border-lg pa-4">
                        <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                            <v-icon class="text-colortext1 ma-2" size="64">mdi-language-ruby</v-icon>
                            <h1 class="text-colortext1 font-weight-bold">Ruby</h1>
                        </v-container>
                    </v-col>

                    <v-col xs="6" sm="6" md="4" lg="4" xl="2" class="d-flex flex-column align-center border-lg pa-4">
                        <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                            <v-icon class="text-colortext1 ma-2" size="64">mdi-language-javascript</v-icon>
                            <h1 class="text-colortext1 font-weight-bold">JavaScript</h1>
                        </v-container>
                    </v-col>

                    <v-col xs="6" sm="6" md="4" lg="4" xl="2" class="d-flex flex-column align-center border-lg pa-4">
                        <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                            <v-icon class="text-colortext1 ma-2" size="64">mdi-bash</v-icon>
                            <h1 class="text-colortext1 font-weight-bold">Assembler(Intel) & Bash</h1>
                        </v-container>
                    </v-col>

                    <v-col xs="6" sm="6" md="4" lg="4" xl="2" class="rounded-be-xl d-flex flex-column align-center border-lg pa-4">
                        <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                            <v-icon class="text-colortext1 ma-2" size="64">mdi-language-python</v-icon>
                            <h1 class="text-colortext1 font-weight-bold">Python</h1>
                        </v-container>
                    </v-col>

                </v-row>
            </Section>
            
            <Section ref="frameworks" class="w-100 ma-0 px-0" style="padding-top: 106px">
                <h2>Frameworks</h2>
                <v-row class="my-2">

                    <v-col cols="6" class="rounded-ts-xl d-flex flex-column align-center border-lg pa-4">
                        <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                            <v-icon class="text-colortext1 ma-2" size="64">mdi-vuejs</v-icon>
                            <h1 class="text-colortext1 font-weight-bold">Vue</h1>
                        </v-container>
                        <p class="font-weight-medium">

                        </p>
                        <br>

                    </v-col>

                    <v-col cols="6" class="rounded-be-xl d-flex flex-column align-center border-lg pa-4">
                        <v-container class="d-flex flex-row justify-center align-center w-100" style="height: 128px;">
                            <v-icon class="text-colortext1 ma-2" size="64">mdi-react</v-icon>
                            <h1 class="text-colortext1 font-weight-bold">React Native</h1>
                        </v-container>
                        <p class="font-weight-medium">

                        </p>
                        <br>
                    </v-col>

                </v-row>
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
    b {
        color: rgb(255, 136, 0);
        transition: background-color color 0.2s ease;
    }
</style>

<script setup>
    import { ref } from 'vue';
import Header from '../Header.vue';

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

        if (window.scrollY >= 2.85*window.innerHeight){
            showSkillNav.value = true;
        } else {
            showSkillNav.value = false;
        }
    });

    const goToLink = (link) => {
        window.open(link, '_blank');
    };

</script>