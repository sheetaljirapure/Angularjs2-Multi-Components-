import{Component} from'angular2/core';
import{CourseComponent} from'./course/course.component';

@Component({
    selector:'main-app',
    directives: `[CourseComponent]`, 
    template:`<h1>{{title}}</h1>
    <p>{{msg}}</p>
    <button (click)="click()">Click Me    </button>
    <h4 *ngFor ="#v of course">{{v}}</h4>
    <ul>
        <li *ngFor="#f of course">{{f}}</li>

    </ul>`
    
})

export class mainComponent{                                                    
    title:string;
    msg:string;
    click=  function(){
    alert("Hello  this angular 2");
    };

    course =['Angular2','Java','JavaScript','Type Script'];
    constructor(){
        this.title="Welcome to My first App";
        this.msg="this the paragraph msg" 
   };
}