package helloworld

import grails.gorm.services.Query
import groovy.transform.CompileStatic
import org.springframework.stereotype.Service


@CompileStatic
@grails.gorm.services.Service(Person)
@Service
interface PersonRepository {

    List<Person> findAll();

    @Query("select distinct ${p} from ${Person p} where p.name = ${pName}")
    List<Person> findByName(String pName);

    Person findById(Long id)

    Person save(Person pNewPerson)
}