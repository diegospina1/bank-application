import {Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  altImageSlider: string = 'Imagen slider';
  slides = [
    {image: 'slider/largecap-stocks.png', text: this.altImageSlider},
    {image: 'slider/beneficios.jpg', text: this.altImageSlider},
    {image: 'slider/beneficios-empresariales.jpg', text: this.altImageSlider},
    {image: 'slider/money.jpg', text: this.altImageSlider},
    {image: 'slider/tarjeta-credito.png', text: this.altImageSlider},
  ];

  @ViewChildren('image') images!: QueryList<ElementRef>;
  imagesArray: Array<ElementRef> = [];
  slideIndex: number = 0;

  constructor(private render: Renderer2) {}

  ngAfterViewInit() {
    this.imagesArray = this.images.toArray();
    this.imagesArray.forEach((image: ElementRef) => {
      console.log(image.nativeElement);
    })
    this.initializeSlider();
  }

  private initializeSlider(){
    if (this.imagesArray.length > 0){
      this.imagesArray[this.slideIndex].nativeElement.classList.remove('hidden');
    }
  }

  private showSlide(){
    this.resetIfOutOfBounds();

    this.imagesArray.forEach((image: ElementRef) => {
      image.nativeElement.classList.add('hidden');
    });

    this.imagesArray[this.slideIndex].nativeElement.classList.remove('hidden');
  }

  private resetIfOutOfBounds(){
    if (this.slideIndex >= this.imagesArray.length){
      this.slideIndex = 0;
    }
    if(this.slideIndex < 0){
      this.slideIndex = this.imagesArray.length - 1;
    }
  }

  prevSlide() {
    this.slideIndex--;
    this.showSlide();
  }

  nextSlide() {
    this.slideIndex++;
    this.showSlide();
  }
}
