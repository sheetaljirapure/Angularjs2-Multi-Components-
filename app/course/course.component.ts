import{Component} from'angular2/core';

@Component({
    selector:'course-copm',
    templateUrl : `course/course.tpl.html`,
    styleUrls:['course/course.style.css']
})
 

export class mainComponent{                                                    
    title:string;
    msg:string;
    click=  function(){
    alert("Hello  this angular 2");
    };
    read={};
    courses=[
    {id:1, name:"Angular 2", cost:250 , duration: "24 hrs"},
    {id:2, name:"Angular 2", cost:350 , duration: "24 hrs"},
    {id:3, name:"Angular 2", cost:250 , duration: "24 hrs"},
    {id:4, name:"Angular 2", cost:250 , duration: "24 hrs"},
    {id:5, name:"Angular 2", cost:250 , duration: "24 hrs"}
    ];

    course =['Angular2','Java','JavaScript','Type Script'];
    constructor(){
        this.title="Welcome to endurekha";
        this.msg="this the paragraph msg";
        this.read ={
         id :1,
         name: "Angular",
         cost: 123,
         duration:"24"   
        };
   };
}