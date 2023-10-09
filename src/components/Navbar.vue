<template>
    <div >
        
        <v-app-bar color="#01959a" style="border-radius:15px, item-align: center">
            <v-app-bar-title> Nexus University</v-app-bar-title>
            <v-spacer></v-spacer>

            <div style=" padding: 15px">
                <v-btn to="/" color="#fff" > Get started</v-btn>
            </div>

            <div style=" padding: 15px;">
                <v-btn to="/signup" color="black" dark> Sign Up</v-btn>
            </div>
            <div style=" padding: 15px;">
                <v-btn to="/register" color="white" dark> Register</v-btn>
            </div>
            <div style=" padding: 15px;">
                <v-btn to="/students" color="white" dark> Students</v-btn>
            </div>
        </v-app-bar>
        
    </div>
</template>