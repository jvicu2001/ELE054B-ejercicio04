package cl.profesebaraya.medicionplantas.services;

import cl.profesebaraya.medicionplantas.entities.Medicion;
import cl.profesebaraya.medicionplantas.repositories.MedicionesRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito.*;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


class MedicionesServiceImplTest {

    @Mock
    private MedicionesRepository medRepoMock;

    private MedicionesService medicionesService;
    @BeforeEach
    void init() {
        MockitoAnnotations.openMocks(this);
        this.medicionesService = new MedicionesServiceImpl(medRepoMock);
    }

    /**
     * Probar medición si es que se guarda un
     * dato correctamente
     */
    @Test
    void saveOk() {
        Medicion medFake = new Medicion();
        when(medRepoMock.save(any(Medicion.class)))
                .thenReturn(medFake);

        Medicion medResult = medicionesService.save(medFake);

        assertEquals(medFake, medResult);
    }

    /**
     *
     */
    @Test
    void getAllOk() {
        List<Medicion> medFake = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            medFake.add(new Medicion());

        }
        when(medRepoMock.findAll())
                .thenReturn(medFake);

        List<Medicion> medResult = medicionesService.getAll();

        assertNotNull(medResult);
        assertEquals(5, medResult.size());
    }

}