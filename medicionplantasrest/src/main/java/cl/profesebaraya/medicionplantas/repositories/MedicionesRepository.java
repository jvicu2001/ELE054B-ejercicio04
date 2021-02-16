package cl.profesebaraya.medicionplantas.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import cl.profesebaraya.medicionplantas.entities.Medicion;

public interface MedicionesRepository extends MongoRepository<Medicion, String> {

}
