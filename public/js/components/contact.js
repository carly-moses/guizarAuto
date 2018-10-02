"use strict";

const contact = {
    template: `
        <section>
            <section class="contact_heading">
                <img src="images/mysterious.jpg" alt="Car in Darkness">
                <h1 class="contact_title">CONTACT US</h1>
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
    .component("contact", contact);