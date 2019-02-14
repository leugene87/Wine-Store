package ws.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ws.model.Wine;

public interface WineRepository extends JpaRepository<Wine, Long> {

    Optional<Wine> findByWineName(String wineName);
    Boolean existsByWineName(String wineName);
    Boolean existsByPrice(int price);
}
