package com.project.springreact.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.project.springreact.repository.GuestBookRepository;
import com.project.springreact.vo.GuestBookVo;

@Service
public class GuestBookService {

	private final GuestBookRepository repository;
	
	public GuestBookService(GuestBookRepository repository) {
		this.repository = repository;
	}
	
	public List<GuestBookVo> getAllEntries(){
		return repository.findAll();
	}
	
	public GuestBookVo addEntry(GuestBookVo entry) {
		return repository.save(entry);
	}
	
	public void deleteEntryByName(String name) {
		repository.deleteById(name);
	}
}
