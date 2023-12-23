import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-upload-imagem',
  templateUrl: './upload-imagem.component.html',
  styleUrls: ['./upload-imagem.component.scss']
})
export class UploadImagemComponent implements OnInit {

  @Input() public referenciaFormulario?: AbstractControl;
  @Input() public classeCssContainer: string = '';
  @Input() public imagemPrevisualizacao?: string;
  @Input() public classeCssImagemPrevisualizacao: string = '';
  @Output() public aoAtualizarImagem: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public trocarArquivo(event: any): void {
    if (event.target.files && event.target.files.length) {
      const [arquivo] = event.target.files;

      const fileReader = new FileReader();
      fileReader.readAsDataURL(arquivo);
      fileReader.onloadend = () => {
        this.imagemPrevisualizacao = fileReader.result as string;
        this.referenciaFormulario?.setValue(arquivo);
        this.referenciaFormulario?.markAsDirty();
        this.aoAtualizarImagem.emit(this.imagemPrevisualizacao);
      }
    }
  }
}
