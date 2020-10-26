import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-meta-info',
  templateUrl: './meta-info.component.html',
  styleUrls: ['./meta-info.component.scss']
})
export class MetaInfoComponent implements OnInit {

  public metaForm: FormGroup;
  public name = new FormControl('', [Validators.required]);
  public description = new FormControl('');

  constructor(
    private fb: FormBuilder,
    private editorService: EditorService
  ) { }

  ngOnInit(): void {
    this.metaForm = this.fb.group({
      name: this.name,
      description: this.description
    })
    this.metaForm.valueChanges.pipe(debounceTime(400)).subscribe(() => {
      const { name, description } = this.metaForm.value;
      this.editorService.setDemoMeta({
        name,
        desc: description
      })
    })
  }

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return '示例名称为必填项'
    }
  }

}
