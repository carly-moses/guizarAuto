"use strict";

const home = {
    template:`
        <section class="home">
            <img class="home_img" src="images/home.jpg">
            <section class="container">
            <h1>Guizar Automotive Solutions</h1>
            <p>G.A.S. is the industry leading solution specialist in the automobile industry.</p>
            <p>Regardless of whether you are a dealership or the automobile buying consumer, G.A.S. is ready to serve you. </p>
            </section>
        </section>
    `
}

angular
    .module("app")
    .component("home", home);