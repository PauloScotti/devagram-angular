import { Component, Input } from '@angular/core';
import { AbstractControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-publico',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-publico.component.html',
  styleUrl: './input-publico.component.scss'
})
export class InputPublicoComponent {
  @Input() public referenciaFormulario?: AbstractControl;
  @Input() public imagem?: string;
  @Input() public tipo?: string;
  @Input() public placeholder?: string;

  public aoModificarCampo(event: any): void {
    this.referenciaFormulario?.setValue(event);
    this.referenciaFormulario?.markAsDirty();
    console.log(event);
  }

  public obterMensagemErro(): string {
    if(!this.referenciaFormulario?.errors) {
      return '';
    }

    if(this.referenciaFormulario?.errors['required']) {
      return 'Campo obrigatório';
    }

    return 'Problemas no preenchimento';
  }
}
