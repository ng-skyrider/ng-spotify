import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: "root"})
export class PostService {
  /* Note: import + providers in file module (~.module.ts) or ignore this message. */
  private data: Post[] = [];
  private dataUpdated = new Subject<Post[]>();

  constructor( private httpC: HttpClient ){  }

  getData(){
    // return [...this.data];
      // return this.data;
      this.httpC.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts')
                        .subscribe((data) => {
                                                this.data = data.posts;
                                                this.dataUpdated.next([...this.data]);
                                            });
  }

  getDataUpdateList(){
    return this.dataUpdated.asObservable();
  }

  addData(title: string, content: string){
    const post: Post = {id:null, title: title, content: content};
    this.httpC.post<{ message: string }>('http://localhost:3000/api/posts', post)
                      .subscribe((resData)=>{
                          console.log(resData.message);
                          this.data.push(post);
                          this.dataUpdated.next([...this.data]);
                      });
  }
}
