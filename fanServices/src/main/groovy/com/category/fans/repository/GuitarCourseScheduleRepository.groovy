package com.category.fans.repository

import com.category.fans.domain.GuitarCourseSchedule
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GuitarCourseScheduleRepository extends JpaRepository<GuitarCourseSchedule,Long>{

    List<GuitarCourseSchedule> findByPublish( String truth )
    List<GuitarCourseSchedule> findByYearAndSubject( String year, String subject )
    List<GuitarCourseSchedule> findByYearAndSubjectAllIgnoreCase( String year, String subject )
}
