"use strict";

const finance = {
    template: `
        <section>
            <section class="contact_heading">
                <img class="approved" src="images/approved.jpg" alt="Finance form with the stamp of APPROVAL">
                <h4>Apply today for our great financing options.</h4>
                <h4>Prequalify for the vehicle you want.</h4>
            </section>
            
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