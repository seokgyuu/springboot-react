package com.project.springreact.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.springreact.service.GuestBookService;
import com.project.springreact.vo.GuestBookVo;

@RestController
@RequestMapping("/api/guestbook")
public class GuestBookController {
	
	private final GuestBookService service;
	
	public GuestBookController(GuestBookService service) {
		this.service = service;
	}
	
	//방명록 조회 요청
	@GetMapping
	public ResponseEntity<List<GuestBookVo>> getEntries(){
		List<GuestBookVo> entries = service.getAllEntries();
		return ResponseEntity.ok(entries);
		
	}
	
	//방명록 추가
	@PostMapping
	public ResponseEntity<String> addEntry(@RequestBody GuestBookVo newEntry){
		if(newEntry.getName().isEmpty() || newEntry.getMessage().isEmpty()) {
			return ResponseEntity.badRequest().body("이름과 메세지를 모두 입력해주세요");
		}
		service.addEntry(newEntry);
		return ResponseEntity.ok("방명록이 추가되었습니다");
	}
	
	//방명록 삭제
	@DeleteMapping("/{name}")
	public ResponseEntity<String> deleteEntry(@PathVariable String name){
		service.deleteEntryByName(name);
		return ResponseEntity.ok("삭제되었습니다");
		
	}

}
