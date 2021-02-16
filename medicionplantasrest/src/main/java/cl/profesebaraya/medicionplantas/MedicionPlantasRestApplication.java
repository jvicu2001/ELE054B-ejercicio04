package cl.profesebaraya.medicionplantas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class MedicionPlantasRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedicionPlantasRestApplication.class, args);
	}

}
