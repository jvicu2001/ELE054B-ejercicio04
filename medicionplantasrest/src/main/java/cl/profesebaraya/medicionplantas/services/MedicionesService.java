package cl.profesebaraya.medicionplantas.services;

import java.util.List;

import cl.profesebaraya.medicionplantas.entities.Medicion;

public interface MedicionesService {

	Medicion save(Medicion m);
	List<Medicion> getAll();
}
