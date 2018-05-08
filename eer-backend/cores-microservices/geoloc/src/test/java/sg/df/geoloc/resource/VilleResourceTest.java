package sg.df.geoloc.resource;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import sg.df.geoloc.service.AgenceService;
import sg.df.geoloc.service.VilleService;

import static junit.framework.TestCase.assertTrue;

@RunWith(SpringRunner.class)
@WebMvcTest(value =AgenceResource.class, secure = false)
public class VilleResourceTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private AgenceService agenceService;
    @MockBean
    private VilleService villeService;
    @Test
    public void saveVilleTest()
    {
        assertTrue(true);
    }

}
