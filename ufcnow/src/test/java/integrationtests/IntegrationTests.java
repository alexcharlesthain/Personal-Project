package integrationtests;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;


import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.qa.spring.application.UFCApplication;
import com.qa.spring.application.model.UFCDataModelFighter;
import com.qa.spring.application.model.UFCDataModelShop;
import com.qa.spring.application.repository.UFCFighterRepository;
import com.qa.spring.application.repository.UFCShopRepository;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {UFCApplication.class})
@AutoConfigureMockMvc
public class IntegrationTests {
	
	
	
	@Autowired
	private MockMvc mvc;
	
	@Autowired
	private UFCFighterRepository myrepo;
	
	@Autowired
	private UFCShopRepository shopRepo;
	
	@Before
	public void clearDB() {
		myrepo.deleteAll();
		shopRepo.deleteAll();
	}
	
	
	@Test
	public void findingAndRetrievingFighterFromDatabase() throws Exception {
		myrepo.save(new UFCDataModelFighter("Daniel", "Cormier", "Lafayette | Louisiana", "Daniel Cormier is an American mixed martial artist and former Olympic wrestler. He is reigning champion of the heavyweight division. He is the #1 ranked pound-for-pound fighter in the UFC.", "Heavyweight", "Date of Birth - 20/03/1979", "Style - Wrestling"));
		mvc.perform(get("/api/ufc/getfighters")
			.contentType(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk())
			.andExpect(content()
			.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("$[0].firstName", is("Daniel")));
	}
	
	@Test
	public void findingAndRetrievingProductFromDatabase() throws Exception {
		shopRepo.save(new UFCDataModelShop("Gym Gloves | Full Length", "Keep your hands callous free with these gloves", "Gear", "15.00", "5"));
		mvc.perform(get("/api2/ufc/allProducts")
			.contentType(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk())
			.andExpect(content()
			.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("$[0].title", is("Gym Gloves | Full Length")));
	}
	
	@Test
	public void findingAndRetrievingFighterFromDatabaseById() throws Exception {
		myrepo.save(new UFCDataModelFighter("Daniel", "Cormier", "Lafayette | Louisiana", "Daniel Cormier is an American mixed martial artist and former Olympic wrestler. He is reigning champion of the heavyweight division. He is the #1 ranked pound-for-pound fighter in the UFC.", "Heavyweight", "Date of Birth - 20/03/1979", "Style - Wrestling"));
		mvc.perform(get("/api/ufc/1")
			.contentType(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk())
			.andExpect(content()
			.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("$[0].lastName", is("Cormier")));
	}
	
	@Test
	public void findingAndRetrievingProductFromDatabaseById() throws Exception {
		shopRepo.save(new UFCDataModelShop("Gym Gloves | Full Length", "Keep your hands callous free with these gloves", "Gear", "15.00", "5"));
		mvc.perform(get("/api2/ufc/1")
			.contentType(MediaType.APPLICATION_JSON))
			.andExpect(status().isOk())
			.andExpect(content()
			.contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
			.andExpect(jsonPath("$[0].price", is("15.00")));
	}

}
