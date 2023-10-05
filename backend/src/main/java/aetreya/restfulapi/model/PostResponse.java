package aetreya.restfulapi.model;

import aetreya.restfulapi.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostResponse {

    private String id;

    private String title;

    private String body;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    private String username;
}
