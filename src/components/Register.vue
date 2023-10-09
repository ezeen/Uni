<template>
    <div id="register">
        <v-container>
            <v-container >
                <v-layout column>
                    
                    <v-card
                        class="mx-auto"
                        width="50%"
                    >
                        <v-toolbar
                            color="#01959a"
                            theme="dark"
                        >
                            <v-toolbar-title class="text-h6">
                                User Registration
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                        <v-text-field
                            v-model="first"
                            color="#01959a"
                            label="First Name"
                            variant="underlined"
                        >
                        </v-text-field>
                        <v-text-field
                        v-model="last"
                        color="#01959a"
                        label="Last Name"
                        variant="underlined"></v-text-field>
                        <v-text-field
                            v-model="email"
                            color="#01959a"
                            label="Email"
                            variant="underlined"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="phonenumber"
                            color="#01959a"
                            label="Phone Number"
                            variant="underlined"
                            type="number"
                        >
                        </v-text-field>
                        <v-text-field
                            v-model="password"
                            color="#01959a"
                            label="Password"
                            placeholder="Enter your Password"
                            variant="underlined"
                            type="password"
                        >
                        </v-text-field>
                        <v-checkbox
                            v-model="terms"
                            color="secondary"
                            label="I agree to site terms and conditions"
                        ></v-checkbox>
                    </v-container>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="sucess">
                            Complete Registration
                            <v-icon icon="mdi-chevron-right" end></v-icon>
                        </v-btn>
                    </v-card-actions>
                    </v-card>    
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        first: null,
        last: null,
        email:null,
        password: null,
        phone: null,
        terms: null
    })
}
</script>