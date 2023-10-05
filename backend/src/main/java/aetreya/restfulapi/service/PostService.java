package aetreya.restfulapi.service;

import aetreya.restfulapi.entity.Post;
import aetreya.restfulapi.entity.User;
import aetreya.restfulapi.model.CreatePostRequest;
import aetreya.restfulapi.model.PostResponse;
import aetreya.restfulapi.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private ValidationService validationService;

    @Transactional
    public PostResponse create(User user, CreatePostRequest request) {
        validationService.validate(request);

        Post post = new Post();
        post.setId(UUID.randomUUID().toString());
        post.setTitle(request.getTitle());
        post.setBody(request.getBody());
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        post.setUser(user);

        postRepository.save(post);

        return toPostResponse(post);
    };

    @Transactional(readOnly = true)
    public List<PostResponse> getAll() {
        List<Post> posts = postRepository.findAll();

        List<PostResponse> postResponses = posts.stream()
                .map(this::toPostResponse)
                .collect(Collectors.toList());

        return postResponses;
    }

    @Transactional(readOnly = true)
    public PostResponse getById(String id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));

        return toPostResponse(post);
    }

    private PostResponse toPostResponse(Post post) {
        PostResponse postResponse = new PostResponse();
        postResponse.setId(post.getId());
        postResponse.setTitle(post.getTitle());
        postResponse.setBody(post.getBody());
        postResponse.setCreatedAt(post.getCreatedAt());
        postResponse.setUpdatedAt(post.getUpdatedAt());
        postResponse.setUsername(post.getUser().getUsername());

        return postResponse;
    }
}
