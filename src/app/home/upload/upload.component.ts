import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  uploadForm: FormGroup;
  ufile: any;

  ngOnInit(): void {
    $('.image-upload-wrap').bind('dragover', function () {
      $('.image-upload-wrap').addClass('image-dropping');
    });
    $('.image-upload-wrap').bind('dragleave', function () {
      $('.image-upload-wrap').removeClass('image-dropping');
    });

    this.uploadForm = this.formBuilder.group({
      ufile: [''],
    });
  }

  uploadFile() {
    $('.file-upload-input').trigger('click');
  }

  uploadImage(input: any) {
    // var f=input.target.files[0]
    // this.uploadForm.get('ufile').setValue(f)
    var reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload = (_event) => {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', reader.result);
      $('.file-upload-content').show();
      $('.image-title').html(input.files[0].name);
    };
    // if (input.files && input.files[0]) {
    //   var reader = new FileReader();

    //   reader.onload = function (e) {
    //     $('.image-upload-wrap').hide();

    //     $('.file-upload-image').attr('src', e.target.result);
    //     $('.file-upload-content').show();

    //     $('.image-title').html(input.files[0].name);
    //   };

    //   reader.readAsDataURL(input.files[0]);
    // }
  }
  onSubmit() {
    alert('uploaded');
  }
}
