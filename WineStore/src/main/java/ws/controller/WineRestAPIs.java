package ws.controller;

import java.util.List;

import javax.validation.ValidationException;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ws.model.Wine;
import ws.repository.WineRepository;

    /* By default, @CrossOrigin allows all origins, all headers, 
       the HTTP methods specified in the @RequestMapping annotation.*/
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class WineRestAPIs {
    private WineRepository wineRepository;
     
    public WineRestAPIs(WineRepository wineRepository) {
		this.wineRepository = wineRepository;
	}
	
    @GetMapping("/wine/all")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public List<Wine> all() {
        List<Wine> allCategories = this.wineRepository.findAll();
        return allCategories;
    }
    
    @PostMapping("/wine/create")
	@PreAuthorize("hasRole('ADMIN')")
    public List<Wine> save(@RequestBody Wine wine, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new ValidationException();
        }
        // save wine instance to db
        this.wineRepository.save(wine);
        return this.wineRepository.findAll();
    }
    
    @DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
    public void remove(@PathVariable Long id) {
    	System.out.println(id);
        this.wineRepository.deleteById(id);
    }
    
}

