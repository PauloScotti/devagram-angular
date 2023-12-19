import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-upload-imagem',
  standalone: true,
  imports: [],
  templateUrl: './upload-imagem.component.html',
  styleUrl: './upload-imagem.component.scss'
})
export class UploadImagemComponent {
  @Input() public referenciaFormulario?: AbstractControl;
  @Input() public classeCssContainer?: string;
  @Input() public imagemPrevisulizacao?: string;
  @Input() public classeImagemPrevisulizacao?: string = '';
  @Output() public aoAtualizarImage: EventEmitter<string> = new EventEmitter;

  public trocarArquivo(event: any): void {
    if(event.target.files && event.target.files.length){
      const [arquivo] = event.target.files;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(arquivo);
      fileReader.onloadend = () => {
        this.imagemPrevisulizacao = fileReader.result as string;
        this.referenciaFormulario?.setValue(arquivo);
        this.referenciaFormulario?.markAsDirty();
        this.aoAtualizarImage.emit(this.imagemPrevisulizacao);
      }
    }
  }
}
