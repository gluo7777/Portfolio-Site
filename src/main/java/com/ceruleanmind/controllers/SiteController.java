package com.ceruleanmind.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SiteController {
	
	@GetMapping("/")
	public String cover() {
		return "redirect:/home";
	}
	
	@GetMapping(path = {"/home","/projects","/apps","/ideas","/contact","/examples"})
	public String pages(HttpServletRequest request, Model model) {
		StringBuffer requestURL = request.getRequestURL();
		int start = requestURL.lastIndexOf("/") + 1;
		if(start < requestURL.length()) {
			String pageName = requestURL.substring(start);
			model.addAttribute(pageName+"Active", true);
		}
		return "index";
	}
}
