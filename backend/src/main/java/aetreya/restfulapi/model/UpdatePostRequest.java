package aetreya.restfulapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdatePostRequest {

    @JsonIgnore
    @NotBlank
    @Size(max = 255)
    private String id;

    @Size(max = 255)
    private String title;

    @Size(max = 65000)
    private String body;
}
