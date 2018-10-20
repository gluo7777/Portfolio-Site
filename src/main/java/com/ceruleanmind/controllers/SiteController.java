package com.ceruleanmind.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SiteController {
	@GetMapping("/")
	public String cover() {
		return "redirect:/home";
	}
	
	@GetMapping(path = {"/home","/projects","/apps","/ideas","/contact","/examples"})
	public String pages() {
		return "index";
	}
}
