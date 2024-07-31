import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    posts: any[] = [];
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    getAllPosts(): void {
        this.http.get(this.apiUrl).subscribe(response => {
            this.posts = response;
        });
    }

    createPost(): void {
        const newPost = {
            title: 'New Post',
            body: 'This is a new post',
            userId: 1
        };
        this.http.post(this.apiUrl, newPost).subscribe(response => {
            console.log(response);
        });
    }

    updatePost(): void {
        const updatePost = {
          title: 'Update Post',
          body: 'This is an updated post', 
          userId: 1 
        };
        this.http.put(`${this.apiUrl}/1`, updatedPost).subscribe(response => {
            console.log(response);
        });

        deletePost(): void {
            this.http.delete(`${this.apiUrl}/1`). subscribe(response => {
                console.log(response);
            });
        }
    }
}