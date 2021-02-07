<html>
    <head>
        <asset:stylesheet href="bootstrap.css" />
    </head>
    <body>
        
        <div class="container-fluid" ng-app="myApp">
            <div ng-controller="countryController">
                <h1>{{helloCountryText}}</h1>
                <p ng-repeat='country in countriesList'>{{country.name}} - {{country.lenguage}} - {{country.population}}</p>
            </div>
    
            <hr>
            <first-component></first-component>

            <hr>
            <social-media-component></social-media-component>

            <hr>
            <ethos-component></ethos-component>
        </div>

        <asset:javascript src="/app/lib/angular/angular.js" />
        <asset:javascript src="/app/application.module.js" />

    </body>
</html>