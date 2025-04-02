package com.sre.admin;

//import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000") // Adjust based on Vite port
@RestController
public class ClientController {
    @Autowired
    private JobService jobService;
    @Autowired
    private FrontService frontService;
    
    @GetMapping("job/{id}")
    public Job getJobById(@PathVariable Long id) {
        return jobService.getJobById(id);
    }

    @GetMapping("job")
    public List<List<ListItem>> getFront() {
        return frontService.getFront();
    }

}
