package com.sre.admin;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;


@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobRepository jobRepository;
    //List<Job> jobs=new ArrayList<>();

    @Override
    public String createJob(Job job) {
        JobEntity jobEntity = new JobEntity();
        BeanUtils.copyProperties(job, jobEntity);
        jobRepository.save(jobEntity);
        return "Job saved successfully!";
    }

    @Override
    public Job getJobById(Long id) {
        JobEntity jobEntity=jobRepository.findById(id).get();
        Job job=new Job();
        BeanUtils.copyProperties(jobEntity,job);
        return job;
    }

    @Override
public List<Job> readJobs() {
    List<JobEntity> jobsList = jobRepository.findAll();
    List<Job> jobs = new ArrayList<>();

    for (JobEntity jobEntity : jobsList) {
        Job job = new Job();
        
        job.setId(jobEntity.getId());  // Set the actual ID from the database
        job.setDepartment(jobEntity.getDepartment());
        job.setVac_num(jobEntity.getVac_num());
        job.setNewstag(jobEntity.getNewstag());
        job.setPostKey(jobEntity.getPostKey());
        job.setPosts(jobEntity.getPosts());
        job.setLinkKey(jobEntity.getLinkKey());
        job.setLinks(jobEntity.getLinks());
        job.setDateKey(jobEntity.getDateKey());
        job.setDates(jobEntity.getDates());
        
        jobs.add(job);
    }
    return jobs;
}


    @Override
    public boolean deleteJob(Long id) {
        if (jobRepository.existsById(id)) {
            jobRepository.deleteById(id);
            return true;
        }
        return false;
    }


    @Override
    public String updateJob(Long id, Job jobUpdate) {
        JobEntity jobEntity = jobRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Job with ID " + id + " not found"));


        if (jobEntity != null) {
            if (jobUpdate.getDepartment() != null) {
                jobEntity.setDepartment(jobUpdate.getDepartment());
            }
            if (jobUpdate.getVac_num() != 0) { // Assuming 0 means no update
                jobEntity.setVac_num(jobUpdate.getVac_num());
            }
            if (jobUpdate.getNewstag() != null) {
                jobEntity.setNewstag(jobUpdate.getNewstag());
            }
            if (jobUpdate.getPostKey() != null) {
                jobEntity.setPostKey(jobUpdate.getPostKey());
            }
            if (jobUpdate.getPosts() != null) {
                jobEntity.setPosts(jobUpdate.getPosts());
            }
            if (jobUpdate.getLinkKey() != null) {
                jobEntity.setLinkKey(jobUpdate.getLinkKey());
            }
            if (jobUpdate.getLinks() != null) {
                jobEntity.setLinks(jobUpdate.getLinks());
            }
            if (jobUpdate.getDateKey() != null) {
                jobEntity.setDateKey(jobUpdate.getDateKey());
            }
            if (jobUpdate.getDates() != null) {
                jobEntity.setDates(jobUpdate.getDates());
            }

            jobRepository.save(jobEntity);
            return "updated";
        } else {
            throw new EntityNotFoundException("Job with ID " + id + " not found");
        }
    }

}