package aetreya.restfulapi.controller;

import aetreya.restfulapi.entity.User;
import aetreya.restfulapi.model.CreatePostRequest;
import aetreya.restfulapi.model.PostResponse;
import aetreya.restfulapi.model.WebResponse;
import aetreya.restfulapi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.List;

@RestController
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping(
            path="/api/posts",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public WebResponse<PostResponse> create(User user, @RequestBody CreatePostRequest request) {
        PostResponse postResponse = postService.create(user, request);
        return WebResponse.<PostResponse>builder().data(postResponse).build();
    }

    @GetMapping(
            path = "/api/posts",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public WebResponse<List<PostResponse>> getAll() {
        List<PostResponse> postResponses = postService.getAll();
        return WebResponse.<List<PostResponse>>builder().data(postResponses).build();
    }

    @GetMapping(
            path = "/api/posts/{id}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public WebResponse<PostResponse> get(@PathVariable String id) {
        PostResponse postResponse = postService.getById(id);
        return WebResponse.<PostResponse>builder().data(postResponse).build();
    }
}
