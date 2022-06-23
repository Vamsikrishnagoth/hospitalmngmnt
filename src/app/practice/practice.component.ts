import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public arr = ['foo', 'bar', 'baz','foo', 'bar', 'baz','foo', 'bar', 'baz','foo', 'bar', 'baz','foo', 'bar', 'baz','foo', 'bar', 'baz','foo', 'bar', 'baz','foo', 'bar', 'baz','foo', 'bar', 'baz'];
  @ViewChild('panel', { read: ElementRef }) public panel: ElementRef<any>;

  public onPreviousSearchPosition(): void {
    this.panel.nativeElement.scrollTop -= 20;
  }

  public onNextSearchPosition(): void {
    this.panel.nativeElement.scrollTop += 20;
  }
}
