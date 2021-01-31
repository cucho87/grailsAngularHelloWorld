package helloworld

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/api/getPeople"(controller: "Helloworld", action:"getPeople", method: "GET")
        "/api/getPerson/$id"(controller: "Helloworld", action:"getPersonById", method: "GET")
        "/api/getPersonByName"(controller: "Helloworld", action:"getPersonByName", method: "GET")
        "/api/person"(controller: "Helloworld", action:"savePerson", method: "POST")

        "/"(controller: "Helloworld", action:"index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
