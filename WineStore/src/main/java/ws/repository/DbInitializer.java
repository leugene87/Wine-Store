package ws.repository;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import ws.model.Role;
import ws.model.RoleName;
import ws.model.User;
import ws.model.Wine;


/**
 * This component will only execute (and get instantiated) if the
 * property wine.db.recreate is set to true in the
 * application.properties file
 */

@Component
@ConditionalOnProperty(name = "wine.db.initialize", havingValue = "true")
public class DbInitializer implements CommandLineRunner {
    private RoleRepository roleRepository;
    private UserRepository userRepository;
    private WineRepository wineRepository;
    @Autowired
	PasswordEncoder encoder;

    public DbInitializer(RoleRepository roleRepository, ws.repository.UserRepository userRepository, WineRepository wineRepository) {
		super();
		this.roleRepository = roleRepository;
		this.userRepository = userRepository;
		this.wineRepository = wineRepository;
	}

	@Override
    public void run(String... args) {
        // Remove all existing entities
        this.roleRepository.deleteAll();
        this.userRepository.deleteAll();
        this.wineRepository.deleteAll();
        
        // Populate roles Table with default data
        Role admRole = new Role(RoleName.ROLE_ADMIN);
        Role userRole = new Role(RoleName.ROLE_USER);
        Set<Role> adminRoles = new HashSet<>();
        Set<Role> userRoles = new HashSet<>();  
        roleRepository.save(admRole);
        roleRepository.save(userRole);

        // Populate user_roles Table with default data
        userRoles.add(userRole); 
        adminRoles.add(admRole);

        // Populate users table with default data
        User admin = new User("Admin", "admin", "admin@gmail.com", encoder.encode("7777"));
        admin.setRoles(adminRoles);
        User user = new User("User", "user", "user@gmail.com", encoder.encode("1111"));
        user.setRoles(userRoles);
        this.userRepository.save(admin);
        this.userRepository.save(user);
        
        // Populate wines table with default data
        Wine defaultWine = new Wine(null, "Default Wine", 9.99, 0.7, 100);
        this.wineRepository.save(defaultWine);

        System.out.println("database Initialized");

    }
}