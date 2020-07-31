import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-meta-info',
  templateUrl: './meta-info.component.html',
  styleUrls: ['./meta-info.component.scss']
})
export class MetaInfoComponent implements OnInit {

  public metaForm:FormGroup;
  public name=new FormControl('',[Validators.required]);
  public description = new FormControl('');
  
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.metaForm = this.fb.group({
      name:this.name,
      description:this.description
    })
  }

  getNameErrorMessage(){
    if(this.name.hasError('required')){
      return '示例名称为必填项'
    }
  }

}
