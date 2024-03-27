import { Component } from '@angular/core';
import { UiFormComponent } from '../../ui-form/ui-form.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UiFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
