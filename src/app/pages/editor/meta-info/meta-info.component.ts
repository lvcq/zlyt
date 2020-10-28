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
  public demoId = new FormControl({
    value: '',
    disabled: true
  }, []);

  constructor(
    private fb: FormBuilder,
    private editorService: EditorService
  ) { }

  ngOnInit(): void {
    this.metaForm = this.fb.group({
      demoId: this.demoId,
      name: this.name,
      description: this.description
    })
    this.metaForm.valueChanges.pipe(debounceTime(400)).subscribe(() => {
      const { name, description } = this.metaForm.value;
      this.editorService.setDemoMeta({
        name,
        desc: description
      })
    });
    this.demoIdMonitor();
  }

  private demoIdMonitor() {
    this.editorService.demoMeta$.subscribe(meta => {
      if (!meta) {
        this.demoId.setValue('');
        this.name.setValue('');
        this.description.setValue('');
        return;
      }
      if (Reflect.has(meta, 'id') && this.demoId.value !== meta.id) {
        this.demoId.setValue(meta.id);
      }
      if (Reflect.has(meta, 'name') && this.name.value !== meta.name) {
        this.name.setValue(meta.name);
      }
      if (Reflect.has(meta, 'desc') && this.description.value !== meta.desc) {
        this.description.setValue(meta.desc);
      }
    })
  }

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return '示例名称为必填项'
    }
  }

}
