package com.sre.admin;

import java.util.List;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "job_db")
public class JobEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String department;
    private int vac_num;
    private String newstag;

    @ElementCollection
    @CollectionTable(name = "job_post_keys", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "post_key")
    @OrderColumn(name = "order_index") // ✅ Ensures order is preserved
    private List<String> postKey;

    @ElementCollection
    @CollectionTable(name = "job_posts", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "post")
    @OrderColumn(name = "order_index") // ✅ Ensures order is preserved
    private List<String> posts;

    @ElementCollection
    @CollectionTable(name = "job_link_keys", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "link_key")
    @OrderColumn(name = "order_index") // ✅ Ensures order is preserved
    private List<String> linkKey;

    @ElementCollection
    @CollectionTable(name = "job_links", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "link")
    @OrderColumn(name = "order_index") // ✅ Ensures order is preserved
    private List<String> links;

    @ElementCollection
    @CollectionTable(name = "job_date_keys", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "date_key")
    @OrderColumn(name = "order_index") // ✅ Ensures order is preserved
    private List<String> dateKey;

    @ElementCollection
    @CollectionTable(name = "job_dates", joinColumns = @JoinColumn(name = "job_id"))
    @Column(name = "date")
    @OrderColumn(name = "order_index") // ✅ Ensures order is preserved
    private List<String> dates;
}
