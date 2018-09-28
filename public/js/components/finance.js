"use strict";

const finance = {
    template: `
        <section>
            <img src="images/approved.jpg" alt="Finance form with the stamp of APPROVAL">
            <h1>Apply today for our great financing options.
            Prequalify for the vehicle you want.</h1>
            <form>
                <input type="text" placeholder="*Name">
                <input type="text" placeholder="*Email">
                <input type="text" placeholder="Subject">
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </form>
        </section>
    `
}

angular
    .module("app")
    .component("finance", finance);