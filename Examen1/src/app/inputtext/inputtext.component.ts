import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'input-text',
    templateUrl: './inputtext.component.html',
    standalone: true,
    imports: [FormsModule, InputTextModule]
})
export class InputTextBasicDemo {
    value: string = '';
}