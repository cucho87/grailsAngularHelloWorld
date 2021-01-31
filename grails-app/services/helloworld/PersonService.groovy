package helloworld

import grails.gorm.transactions.Transactional
import org.springframework.beans.factory.annotation.Autowired

@Transactional
class PersonService {

    @Autowired
    PersonRepository personRepository

    List getListPeople() {
        List tst = personRepository.findAll()
        return tst;
    }

    List<Person> findPersonByName(String pName){
        println(pName)
        List<Person> tmp = personRepository.findByName(pName)
        return tmp;
    }

    Person findById(Long pId){
        return personRepository.findById(pId)
    }

    Person saveNewPerson(String pName, Long pAge){
        Person newPerson = new Person(name: pName, age: pAge)
        return personRepository.save(newPerson);
    }
}
