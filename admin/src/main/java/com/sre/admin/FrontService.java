package com.sre.admin;


import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class FrontService {
    @Autowired
    private DBC conection;

    public List<ListItem> getListItems(String sql) {
        List<Map<String, Object>> results = conection.executeQuery(sql);

        return results.stream()
            .map(row -> new ListItem(
                (String) row.get("newstag"),   // Assuming "A" is the column name for String field
                ((Number) row.get("id")).longValue() // Ensuring correct type casting
            ))
            .collect(Collectors.toList());
    }

    public List<List<ListItem>> getFront(){
        List<ListItem> t1=getListItems("select id,newstag from job_db");
        List<List<ListItem>>a=new ArrayList<>();
        a.add(t1);
        return a;
    }
}
