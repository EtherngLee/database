import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridLayoutComponent } from './grid-layout.component';

describe('GridLayoutComponent', () => {
  let component: GridLayoutComponent;
  let fixture: ComponentFixture<GridLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
