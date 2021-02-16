package cl.profesebaraya.medicionplantas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.profesebaraya.medicionplantas.entities.Medicion;
import cl.profesebaraya.medicionplantas.services.MedicionesService;

@CrossOrigin(origins= {"*"})
@RestController
@RequestMapping("/mediciones") //http://localhost:8080/mediciones
public class MedicionesRestController {

	@Autowired
	private MedicionesService medService;
	
	@GetMapping("/get")
	public List<Medicion> getAll() {
		return medService.getAll();
	}
	
	@PostMapping("/post")
	public Medicion post(@RequestBody Medicion medicion) {
		return medService.save(medicion);
	}
	
	
}
