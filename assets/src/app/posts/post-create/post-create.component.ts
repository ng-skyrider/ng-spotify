import { Component } from '@angular/core';
// import { EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

/*Services*/
import { PostService } from '../post.service';


// import { Post } from '../post.model';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
  // @Output() postCreated = new EventEmitter();
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public PostS : PostService){

  }

  onSubmit(form: NgForm){
    if(form.invalid){ return; }
    // const data : Post ={
    //    title: form.value.title,
    //    content: form.value.content
    //  };
     // this.postCreated.emit(data);
     this.PostS.addData( form.value.title, form.value.content );
     form.resetForm();
     console.log(form);
   }
}
