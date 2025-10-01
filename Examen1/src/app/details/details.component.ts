import { Component } from '@angular/core';
import { MenubarCommandDemo } from '../menubar/menubar.component';
import { ToastSeverityDemo } from '../toast/toast.component';
import { InputTextBasicDemo } from '../inputtext/inputtext.component';
import { ButtonBasicDemo } from '../button/button.component';
import { ImageBasicDemo } from '../image/image.component';

@Component({
  selector: 'app-details',
  imports: [ToastSeverityDemo, MenubarCommandDemo, InputTextBasicDemo, ButtonBasicDemo, ImageBasicDemo],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

}
