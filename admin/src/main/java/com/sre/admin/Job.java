package com.sre.admin;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Job{
    
    private Long id;
    private String department;
    private int vac_num;
    private String newstag;
    private List<String> postKey;//t3
    private List<String> posts;//t4
    private List<String> linkKey;//5
    private List<String> links;//t6
    private List<String> dateKey;
    private List<String> dates;
}