package cl.profesebaraya.medicionplantas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.profesebaraya.medicionplantas.entities.Medicion;
import cl.profesebaraya.medicionplantas.repositories.MedicionesRepository;

@Service
public class MedicionesServiceImpl implements MedicionesService {

	private MedicionesRepository medRepo;

	@Autowired
	public MedicionesServiceImpl(MedicionesRepository medRepo) {
		this.medRepo = medRepo;
	}
	@Override
	public Medicion save(Medicion m) {
		// TODO Auto-generated method stub
		return medRepo.save(m);
	}

	@Override
	public List<Medicion> getAll() {
		// TODO Auto-generated method stub
		return medRepo.findAll();
	}

}
