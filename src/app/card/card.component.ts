
import { Component, HostListener, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { SiginService } from '../services/sigin.service';
import { FileUploadService } from '../Books/file-upload.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  allBooksdata: any
  getAllBooksData: any
  show: any
  constructor(private services: SiginService, private servicess: FileUploadService, private elementRef: ElementRef) { }
  ngOnInit(): void {
    this.elementRef.nativeElement.querySelector('#price').addEventListener('keyup', (event: KeyboardEvent) => {

      // Execute your logic here.
      const temp2 = (event.target as HTMLTextAreaElement).value
      this.servicess.getAllBooksData().subscribe((result) => {
        this.getAllBooksData = result
        // this.checkdata=result.body
        // console.log(this.getAllBooksData);


        this.getAllBooksData.forEach((value: any, key: any) => {
          //console.log(temp2==value.isbn_number);
          if (temp2 == value.isbn_number) {
            // console.log("correct id");
            const marks2 = value.marks2;
            this.allBooksdata = value
            this.show = true;
            //console.log(this.allBooksdata);
          } else {
            //console.log("incorrect id");
          }
        })

      })
    })

    this.elementRef.nativeElement.querySelector('#price').addEventListener('keydown', (event: KeyboardEvent) => {
      // Check for allowed keys on keydown
      if (event.key === 'Delete' || event.key === 'Backspace') {
        this.reset()
        this.show = false;
        this.allBooksdata = null;
      }
    });
  }


  reset() {
    this.show = false;
  }
}

