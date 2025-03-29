package com.sre.admin;

import org.springframework.web.bind.annotation.RestController;

//import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;


@CrossOrigin(origins = "http://localhost:5173") // Adjust based on Vite port
@RestController
//@CrossOrigin("http://localhost:3000/")
public class JobController {
    @Autowired
    private JobService jobService;

    @GetMapping("jobs")
    public List<Job> getAllJobs() {
        return jobService.readJobs();
    }

    @GetMapping("jobs/{id}")
    public Job getJobById(@PathVariable Long id) {
        return jobService.getJobById(id);
    }

    @PostMapping("/jobs")
    public String createJob(@RequestBody Job job) {
        return jobService.createJob(job);
    }

    @DeleteMapping("jobs/{id}")
    public String deleteJob(@PathVariable Long id){
        return jobService.deleteJob(id) ? "Deleted" : "Failed";
    }
    
    @PutMapping("jobs/{id}")
    public String updateById(@PathVariable Long id, @RequestBody Job job) {
        return jobService.updateJob(id,job);
    }

}
