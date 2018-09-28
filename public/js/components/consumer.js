"use strict";

const consumer = {
    template:`
        <section class="consumer">
            <h1> DIRECT CONSUMER SERVICES</h1>
           
            <section class="services">
                <img src="images/lot.jpg" alt="Full car lot.">
                <section class="container">
                    <h2>BUY YOUR NEXT AUTOMOBILE</h2>
                    <p>We source the vehicles you want! Don't waste another minute searching, driving, and bargaining.  We do all of that for you! Let G.A.S. bring the auction directly to you. Why settle for less when you can get an amazing deal, what you really want, and without doing the work?</p>
                </section>
                <p> FORM IMAGE -- FIND NEW! </p>
                <section class="container">
                    <h2>FINANCING</h2>
                    <p>Good credit or bad...
                    WE CAN HELP!!!
                    We want you to get the lowest APR possible allowing you to either:
                    Save money
                    or
                    Get a more expensive car for the same monthly budget.</p>
                </section>
                <p>Find a new image??? </p>
                <img src="images/sale.jpg" alt="FOR SALE sign on your car!">
                <section class="container">
                    <h2>SELL YOUR CAR</h2>
                    <p>Let G.A.S. sell your current car or lease FAST! 
                    We have several dealers and individual buyers accross the country to assist you in getting your current car sold.
                    </p>
                </section>
            </section>
        </section>
    `
}

angular
    .module("app")
    .component("consumer", consumer);