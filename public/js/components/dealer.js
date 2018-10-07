"use strict";

const dealer = {
    template:`
        <section class="dealer">
            <h1> DEALER SERVICES</h1>
            <p class="dealer_p">Let G.A.S. add a little real gas to the fire with our dealership solutions</p>
            <section class="services">
                <img src="images/arial.jpg" src="Aerial view of a car lot">
                <section class="container">
                    <h2>INVENTORY ACQUISITIONS & LIQUIDATION</h2>
                    <p>We utilize industry leading tools, along with our extensive network to either acquire or liquidate dealership inventory.  In today's fast paced market you may not have enough time to focus on both managing inventory or managing the sales desk and leads. We want you to sell more cars! You focus on dealership day to day operations and let us handle your inventory needs.</p>
                </section>
                <img src="images/handshake.jpg" alt="Shaking on a deal">
                <section class="container">
                    <h2>SALES & MANAGEMENT TRAINING</h2>
                    <p>What happens when you combine old school selling strategies with new age technology?  SUCCESS! 
                    Let G.A.S. train your managers and sales staff to optimize leads, validate price with 3rd party data, and most importantly gain volume while holding gross.</p>
                </section>
                <img src="images/ashburn.jpg" alt="Semi hauling vehicles">
                <section class="container">
                    <h2>TRANSPORTATION SERVICE</h2>
                    <p>Let G.A.S. solve all of your transportation needs! Local or across the country we have you covered.</p>
                </section>
            </section>
        </section>
    `
}

angular
    .module("app")
    .component("dealer", dealer);