package com.category.fans.repository

import com.category.fans.domain.GuitarCourseSchedule
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GuitarCourseScheduleRepository extends JpaRepository<GuitarCourseSchedule,Long>{

}
