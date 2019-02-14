package ws.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "wines")
public class Wine {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
	
    @NotBlank
	private String wineName;
    
    @NotNull
	private double price;
    
    @NotNull
	private double volume;
    
    @NotNull
	private int qty;
	
    public Wine() {}
    


	public int getQty() {
		return qty;
	}



	public void setQty(int qty) {
		this.qty = qty;
	}



	public Wine(Long id, @NotBlank String wineName, @NotNull double price, @NotNull double volume, @NotBlank int qty) {
		super();
		this.id = id;
		this.wineName = wineName;
		this.price = price;
		this.volume = volume;
		this.qty = qty;
	}



	public String getName() {
		return wineName;
	}

	public void setName(String wineName) {
		this.wineName = wineName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public double getVolume() {
		return volume;
	}

	public void setVolume(double volume) {
		this.volume = volume;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
}
