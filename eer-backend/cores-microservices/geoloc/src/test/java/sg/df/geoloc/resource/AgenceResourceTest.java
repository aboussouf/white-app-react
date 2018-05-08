package sg.df.geoloc.resource;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import sg.df.geoloc.dto.AgenceDTO;
import sg.df.geoloc.service.AgenceService;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@WebMvcTest(value =AgenceResource.class, secure = false)
public class AgenceResourceTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private AgenceService agenceService;

    @Ignore
    @Test
    public void saveAgenceTest() throws Exception {
        //Given
        ObjectMapper objectMapper = new ObjectMapper();
        AgenceDTO agenceDTO = new AgenceDTO() ;
        agenceDTO.setCodeAgence("codeAgence");
        agenceDTO.setLibelleAgence("libelleAgence");
        String jsonInString = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(agenceDTO);
        objectMapper.configure(SerializationFeature.INDENT_OUTPUT, true);
        Mockito.when(agenceService.save(Mockito.any(AgenceDTO.class))).thenReturn(agenceDTO);
        //When
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/agence")
                .accept(MediaType.APPLICATION_JSON).content(jsonInString)
                .contentType(MediaType.APPLICATION_JSON);
        //Then
        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
        MockHttpServletResponse response = result.getResponse();
        assertEquals(HttpStatus.CREATED.value(), response.getStatus());

    }

}
