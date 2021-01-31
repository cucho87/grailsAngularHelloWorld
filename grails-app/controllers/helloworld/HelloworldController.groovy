package helloworld

import grails.converters.JSON

class HelloworldController {

    PersonService personService

    def index() { 
        //render "Hello World!"
        render(view: "index")
    }

    def getPeople(){
        List persons = personService.getListPeople();
        render persons as JSON
    }

    def getPersonByName(){
        String name = params["name"]
        List<Person> resp = personService.findPersonByName(name)
        render resp as JSON
    }

    def getPersonById(){
        Long id = Long.parseLong(params["id"])
        render personService.findById(id) as JSON
    }

    def savePerson() {
        def name = params["name"];
        def age = Long.parseLong(params["age"]);
        Person newPerson = personService.saveNewPerson(name, age)
        render newPerson as JSON
    }
}