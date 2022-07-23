import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  @Input() set color(valor: string) {
    this.setColor()
    this._color = valor;
  }
  @Input() set mensaje(valor: string) {
    this.setMensaje()
    this._mensaje = valor;
  }

  @Input() set valido(valor: boolean) {
   if(valor) {
    this.htmlElement.nativeElement.classList.add('hidden')
   }
   else{
    this.htmlElement.nativeElement.classList.remove('hidden')
   }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('constructor directive');
    console.log(this.el);
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    //1.-Forma de hacerlo facil pero dificil de mantener
    // if (changes['mensaje']) {
    //   const mensaje = changes['mensaje'].currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    // console.log(changes);
  }

  ngOnInit(): void {
    
    // this.setColor();
    // this.setMensaje();
    this.setStyle();
    console.log('ngOnInit directive');
  }
  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;

  }
  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
