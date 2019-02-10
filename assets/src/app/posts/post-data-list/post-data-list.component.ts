import { Component , OnInit, OnDestroy } from '@angular/core';
// import { Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';

/* Services */
import { PostService } from '../post.service';


@Component({
  selector: 'post-data-list',
  templateUrl: './post-data-list.component.html',
  styleUrls: ['./post-data-list.component.css']
})
export class PostDataListComponent implements OnInit, OnDestroy{

  // posts = [
  //             { title: "Primer post",  content: "Este es mi primer contenido" },
  //             { title: "Segundo post", content: "Este es mi segundo contenido" },
  //             { title: "Tercer post", content: "Este es mi tercer contenido" }
  //           ];
  // @Input() posts : Post[] = [];
      posts : Post[] = [];
      private dataSub: Subscription;

  constructor(public postS: PostService){

  }

  ngOnInit(){
    // this.posts = this.postS.getData();
    this.postS.getData();
    this.dataSub = this.postS.getDataUpdateList()
                                                   .subscribe((data : Post[])=>{
                                                                          this.posts = data;
                                                                          console.log("Data all -->"+ this.posts);
                                                                      });
  }

  ngOnDestroy(){
    this.dataSub.unsubscribe();
  }

}
