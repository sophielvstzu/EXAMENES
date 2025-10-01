import { Component } from '@angular/core';
import { ImageBasicDemo } from '../image/image.component';
import { CardAdvancedDemo } from '../card/card.component';
import { MenubarCommandDemo } from '../menubar/menubar.component';
import { InputTextBasicDemo } from '../inputtext/inputtext.component';
import { ButtonBasicDemo } from '../button/button.component';
import { AccordionBasicDemo } from '../accordion-basic-demo/accordion-basic-demo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageBasicDemo, CardAdvancedDemo, MenubarCommandDemo, InputTextBasicDemo, ButtonBasicDemo, AccordionBasicDemo],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
