<template>
    <v-col class="background-image-container bg-background h-screen w-100 d-flex justify-center flex-column ma-0">

        <v-col class="d-flex flex-row justify-center align-center">
            <v-contianer class="bg-primary d-flex flex-row align-center justify-center rounded-xl py-1 px-6 elevation-4">
                <h2 class="font-weight-bold text-colortext ma-2">Introduction</h2>
                <h2 class="font-weight-bold text-colortext ma-2">Education</h2>
                <h2 class="font-weight-bold text-colortext ma-2">Skills</h2>
            </v-contianer>
            <v-spacer/>
            <v-container class="bg-primary rounded-circle mx-4 my-1 pa-1 elevation-4 d-flex justify-center align-center" style="height: 64px; width: 64px;">
                <v-icon class="text-colortext1">mdi-gmail</v-icon>
            </v-container>
            <v-container class="bg-primary rounded-circle mx-4 my-1 pa-1 elevation-4 d-flex justify-center align-center" style="height: 64px; width: 64px;">
                <v-icon class="text-colortext1">mdi-linkedin</v-icon>
            </v-container>
            <v-container class="bg-primary rounded-circle mx-4 my-1 pa-1 elevation-4 d-flex justify-center align-center" style="height: 64px; width: 64px;">
                <v-icon class="text-colortext1">mdi-book-account</v-icon>
            </v-container>
        </v-col>

        <v-container class="d-flex flex-column justify-center align-center h-100 w-100">
            <v-container class="d-flex flex-column align-center h-50 w-66 rounded-lg elevation-4 pa-0" style="max-width: 760px">
                <v-container class="bg-primary w-100 h-50 rounded-t-lg d-flex flex-row align-center">
                    <v-container class="bg-tertiary rounded-circle" style="min-width: 96px; min-height: 96px; max-width: 96px; max-height: 96px;"/>
                    <v-container>
                        <h1 class="text-colortext font-weight-medium">Hey! I'am Federico Magri</h1>
                        <h3 class="text-colortext font-weight-light"><b><u>Software Engineering</u></b> student from Argentina</h3>
                    </v-container>
                </v-container>
                <v-container class="opacity-90 bg-tertiary d-flex flex-column justify-center align-center h-100 w-100 rounded-lg pa-0">
                    <v-container class="d-flex flex-row justify-center align-center pa-0" style="height: 48px;">
                        <v-btn class="w-25 h-100 bg-primary rounded-xl mx-4 text-capitalize elevation-2" style="max-width: 162px;">
                            See portfolio
                        </v-btn>
                        <v-btn class="w-25 h-100 bg-primary rounded-xl mx-4 text-capitalize elevation-2" style="max-width: 162px;">
                            let's talk! ▶
                        </v-btn>
                    </v-container>
                </v-container>
            </v-container>   
        </v-container>

        
    </v-col>

    <v-col class="bg-blue h-screen w-100 ma-0">

    </v-col>
</template>

<style scoped>
    .background-image-container {
        background-image: url('../../assets/coding-bg.jfif');
        background-size: cover;
        background-position: center;
    }
</style>

<script setup>

</script>