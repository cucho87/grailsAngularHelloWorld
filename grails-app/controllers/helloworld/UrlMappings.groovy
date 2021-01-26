package helloworld

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        get "/api/getFirstInfo"(controller: "Helloworld", action:"getInfo")
        get "/api/getSecondInfo"(controller: "Helloworld", action:"getSecondInfo")

        "/"(controller: "Helloworld", action:"index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
