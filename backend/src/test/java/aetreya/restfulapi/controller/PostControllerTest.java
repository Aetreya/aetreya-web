package aetreya.restfulapi.controller;

import aetreya.restfulapi.entity.Post;
import aetreya.restfulapi.entity.User;
import aetreya.restfulapi.model.CreatePostRequest;
import aetreya.restfulapi.model.PostResponse;
import aetreya.restfulapi.model.WebResponse;
import aetreya.restfulapi.repository.PostRepository;
import aetreya.restfulapi.repository.UserRepository;
import aetreya.restfulapi.security.BCrypt;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class PostControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        postRepository.deleteAll();
        userRepository.deleteAll();

        User user = new User();
        user.setUsername("test");
        user.setPassword(BCrypt.hashpw("test", BCrypt.gensalt()));
        user.setName("test");
        user.setRole("user");
        user.setToken("test");
        user.setTokenExpiredAt(System.currentTimeMillis() + 10000000);
        userRepository.save(user);
    }

    @Test
    void createPostBadRequest() throws Exception {
        CreatePostRequest request = new CreatePostRequest();
        request.setTitle("");
        request.setBody("");

        mockMvc.perform(
                post("/api/posts")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                        .header("X-API-TOKEN", "test")
        ).andExpectAll(
                status().isBadRequest()
        ).andDo(result -> {
            WebResponse<String> response = objectMapper.readValue(result.getResponse().getContentAsString(), new TypeReference<>() {
            });
            assertNotNull(response.getErrors());
        });
    }

    @Test
    void createPostSuccess() throws Exception {
        CreatePostRequest request = new CreatePostRequest();
        request.setTitle("testing");
        request.setBody("testing");

        mockMvc.perform(
                post("/api/posts")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request))
                        .header("X-API-TOKEN", "test")
        ).andExpectAll(
                status().isOk()
        ).andDo(result -> {
            WebResponse<PostResponse> response = objectMapper.readValue(result.getResponse().getContentAsString(), new TypeReference<>() {
            });
            assertNull(response.getErrors());
            assertEquals("testing", response.getData().getTitle());
            assertEquals("testing", response.getData().getBody());

            assertTrue(postRepository.existsById(response.getData().getId()));
        });
    }

    @Test
    void getAllPostSuccess() throws Exception {
        User user = new User();
        user.setUsername("test");
        user.setName("test");
        user.setPassword(BCrypt.hashpw("test", BCrypt.gensalt()));
        user.setRole("user");
        userRepository.save(user);

        Post post = new Post();
        post.setId(UUID.randomUUID().toString());
        post.setTitle("testing");
        post.setBody("testing");
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        post.setUser(user);
        postRepository.save(post);

        mockMvc.perform(
                get("/api/posts")
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpectAll(
                status().isOk()
        ).andDo(result -> {
            WebResponse<List<PostResponse>> response = objectMapper.readValue(result.getResponse().getContentAsString(), new TypeReference<>() {
            });
            assertNull(response.getErrors());
            assertEquals("testing", response.getData().get(0).getTitle());
            assertEquals("testing", response.getData().get(0).getBody());

            assertTrue(postRepository.existsById(response.getData().get(0).getId()));
        });
    }

    @Test
    void getSinglePostSuccess() throws Exception {
        User user = new User();
        user.setUsername("test");
        user.setName("test");
        user.setPassword(BCrypt.hashpw("test", BCrypt.gensalt()));
        user.setRole("user");
        userRepository.save(user);

        Post post = new Post();
        post.setId(UUID.randomUUID().toString());
        post.setTitle("testing");
        post.setBody("testing");
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        post.setUser(user);
        postRepository.save(post);

        mockMvc.perform(
                get("/api/posts/" + post.getId())
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
        ).andExpectAll(
                status().isOk()
        ).andDo(result -> {
            WebResponse<PostResponse> response = objectMapper.readValue(result.getResponse().getContentAsString(), new TypeReference<>() {
            });
            assertNull(response.getErrors());
            assertEquals("testing", response.getData().getTitle());
            assertEquals("testing", response.getData().getBody());

            assertTrue(postRepository.existsById(response.getData().getId()));
        });
    }
}