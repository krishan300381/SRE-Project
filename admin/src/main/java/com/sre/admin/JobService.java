package com.sre.admin;

import java.util.List;

public interface JobService {
    String createJob(Job job);
    Job getJobById(Long id);
    List<Job> readJobs();
    boolean deleteJob(Long id);
    String updateJob(Long id, Job job);
}
