package com.project.springreact.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.springreact.vo.GuestBookVo;


// 인터페이스 선언만으로 구현체를 spring data jpa가 자동 생성
public interface GuestBookRepository extends JpaRepository<GuestBookVo, String> {

}
