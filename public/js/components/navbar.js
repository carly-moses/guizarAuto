"use strict";

const navbar = {
    template: `
    <header>
        <section class="flex_nav">
            <section class="nav_left navbar_link navbar_logo">
                <section class="logo_container">
                    <a href="#!home"><img class="speedometer" src="images/speed.jpg" alt="Car Speedometer"></a>
                </section>
                <a class="logo" href="#!home">G.A.S.</h1>
            </section>

            <section ng-click="$ctrl.openNav()" class="hamburger_nav">
                <i class="material-icons">dehaze</i>
            </section>
        </section>

        <nav class="nav_right nav_items" ng-show="$ctrl.showNav">
            <a ng-click="$ctrl.openNav()" href="#!home">Home</a> 
            <a ng-click="$ctrl.openNav()" href="#!dealer">Dealer Services</a> 
            <a ng-click="$ctrl.openNav()" href="#!consumer">Direct Consumer Services</a> 
            <a ng-click="$ctrl.openNav()" href="#!finance">Get Approved</a> 
            <a ng-click="$ctrl.openNav()" href="#!contact">Contact</a>
        </nav>
    </header>
    `,

    controller: function(){
        const vm = this;

        vm.openNav= () =>{
            console.log("clicking Nav");
            if (vm.showNav === false){
                vm.showNav = true;
            } else {
                vm.showNav = false;
            }
        }
    }
};

angular
    .module("app")
    .component("navbar", navbar);