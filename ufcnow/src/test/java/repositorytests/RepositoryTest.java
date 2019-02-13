package repositorytests;

import static org.junit.Assert.assertTrue;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
//import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.qa.spring.application.UFCApplication;
import com.qa.spring.application.model.UFCDataModelFighter;
import com.qa.spring.application.repository.UFCFighterRepository;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = UFCApplication.class)
//@SpringBootTest(classes = { UFCApplication.class })
@DataJpaTest
public class RepositoryTest {

	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private UFCFighterRepository myRepository;

	@Test
	public void retrieveByIdTest() {
		UFCDataModelFighter model1 = new UFCDataModelFighter("Daniel", "Cormier", "Lafayette | Louisiana", "Daniel Cormier is an American mixed martial artist and former Olympic wrestler. He is reigning champion of the heavyweight division. He is the #1 ranked pound-for-pound fighter in the UFC.", "Heavyweight", "Date of Birth - 20/03/1979", "Style - Wrestling");
		entityManager.persist(model1);
		entityManager.flush();
		assertTrue(myRepository.findById(model1.getfighter_id()).isPresent());
	}
}