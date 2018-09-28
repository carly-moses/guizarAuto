"use strict";

const contact = {
    template: `
        <section>
            <h1>CONTACT US</h1>
            <form>
                <input type="text" placeholder="*Name">
                <input type="text" placeholder="*Email">
                <input type="text" placeholder="Subject">
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </form>
            <img src="images/mysterious.jpg" alt="Car in Darkness">
        </section>
    `
}

angular
    .module("app")
    .component("contact", contact);