import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styles: ``
})
export class ProductPageComponent {

  /**
   * https://gist.github.com/Klerith/db990a1bcdc1683bc4169a520ad0d665
   */

  private fb = inject(FormBuilder);

  public color: string = 'green';

  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.email
      ]
    ],
  });

  // constructor(
  //   private fb: FormBuilder
  // ) { }

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }

}
