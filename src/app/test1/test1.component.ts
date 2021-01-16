import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
declare var  $ : any ;

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {


  form: FormGroup;
  submitted: false;
  ajayhobbies: any = [];
  user : string = 'Select';
   items = [];
   

  constructor( private fb : FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      'name': ["" , [Validators.required, Validators.minLength(2)] ],
      'lname': ["", Validators.required],
      'dob': [null],
      'phoneno':["",[Validators.required ,Validators.pattern('^[0-9]{5}$')]],
      'gender':[null],
      'check':[null],

      'addresstype':[],
      'country':[],
      'state':[],
      'city':[],
      'addmenu':[]


     
      
      

    });
    $("#btn12").click(function(){
      prompt("hello");
       });
       

   
    
  }


  onCheckboxChange(e) {
    let index = this.ajayhobbies.indexOf(e.target.value);
    if(index == -1)
    {
      this.ajayhobbies.push(e.target.value);
    }else{
      this.ajayhobbies.splice(index,1);
    }
  }

  

 
   additem(){ 
       
      const value =$('#addmenu').val();
       if ((value || '').trim()){
        this.items.push(value);
        //$('#addmenu').val('');
      }
   }
   remove(event){
     alert("hello");
       const indexDrink = this.items.indexOf(event ); 
       if (indexDrink >= 0)  
       { 
       this.items.splice(indexDrink,1); 
       } 
   }
    


  get name(){
    return this.form.get('name');
  }
  get lname(){
    return this.form.get('lname');
  }

  onSubmit(){
  console.log(this.form.value) ; 
  console.log(this.ajayhobbies);
  
}
}
