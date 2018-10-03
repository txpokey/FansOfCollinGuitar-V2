package com.category.fans.repository

import com.category.fans.domain.CollegeEvent
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CollegeEventRepository extends JpaRepository<CollegeEvent,Long>{
//    @PersistenceContext
//    private EntityManager entityManager;

}
