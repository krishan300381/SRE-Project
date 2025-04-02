package com.sre.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.List;
import java.util.Map;

@Component
public class DBC {
    
    @Autowired
    private final JdbcTemplate jdbcTemplate;
    
    public DBC(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    // Generic method to execute SELECT queries
    public List<Map<String, Object>> executeQuery(String sql) {
        return jdbcTemplate.queryForList(sql);
    }

    // Generic method for INSERT, UPDATE, DELETE queries
    public int updateQuery(String sql, Object... params) {
        return jdbcTemplate.update(sql, params);
    }
}