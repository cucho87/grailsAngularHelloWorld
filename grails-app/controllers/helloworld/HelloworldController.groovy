package helloworld

import grails.converters.JSON

class HelloworldController {

    def index() { 
        //render "Hello World!"
        render(view: "index")
    }

    def getInfo(){
        render(text: "{'title':'titulo1', 'author':'author1'}", contentType: "application/json");
    }

    def getSecondInfo(){
        def persons = []
        Persona p1 = new Persona(1, 'Alvaro', 34)
        Persona p2 = new Persona(2, 'Carina', 34)
        Persona p3 = new Persona(3, 'Sebastian', 35)
        Persona p4 = new Persona(4, 'Andrea', 28)
        persons.add(p1)
        persons.add(p2)
        persons.add(p3)
        persons.add(p4)
        render persons as JSON
    }
}

class Persona {
    private Number id;
    private String name;
    private Number age;

    Persona(Number pId, String pName, Number pAge){
        this.id = pId;
        this.name = pName; 
        this.age = pAge;
    }

    public Number getId() {
        return this.id;
    }
    public String getName() {
        return this.name;
    }
    public Number getAge() {
        return this.age;
    }

}
