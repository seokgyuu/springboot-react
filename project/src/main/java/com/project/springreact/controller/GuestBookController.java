package com.project.springreact.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = "http://localhost:3000")
public class GuestBookController {

    private final GuestBookService service;

    public GuestBookController(GuestBookService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<GuestBookVo>> getEntries() {
        List<GuestBookVo> entries = service.getAllEntries();
        System.out.println("가져온 엔트리 목록: " + entries);
        return ResponseEntity.ok(entries);
    }

    @PostMapping
    public ResponseEntity<String> addEntry(@RequestBody GuestBookVo newEntry) {
        System.out.println("새로운 엔트리: " + newEntry);
        if (newEntry.getName() == null || newEntry.getName().trim().isEmpty() ||
            newEntry.getMessage() == null || newEntry.getMessage().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("이름과 메시지를 모두 입력해주세요.");
        }
        service.addEntry(newEntry);
        System.out.println("엔트리 추가 성공: " + newEntry);
        return ResponseEntity.ok("방명록이 추가되었습니다.");
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<String> deleteEntry(@PathVariable("name") String name) {
        System.out.println("삭제 요청: " + name);
        service.deleteEntryByName(name);
        System.out.println("엔트리 삭제 성공: " + name);
        return ResponseEntity.ok("삭제되었습니다");
    }
}
