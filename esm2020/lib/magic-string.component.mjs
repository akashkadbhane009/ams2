import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class MagicStringComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.orinalContenet = '';
        this.controlledContent = '';
    }
    ngOnInit() {
        // this.controlledContent = this.orinalContenet = this.content.nativeElement.textContent;
    }
    ngAfterViewInit() {
        this.controlledContent = this.orinalContenet = this.content.nativeElement.textContent;
    }
    marktext(event) {
        console.log(event.target.value);
        this.controlledContent = this.orinalContenet;
        this.controlledContent = this.orinalContenet.replace(new RegExp(event.target.value, 'g'), match => `<span class="mark">${match}</span>`);
        this.changeDetectorRef.detectChanges();
    }
}
MagicStringComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MagicStringComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
MagicStringComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MagicStringComponent, selector: "ak-magic-string", viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: `

      <input type="text" (keydown.enter)="marktext($event)">
      <div #content [hidden]="true">
        <ng-content select=".text"></ng-content>
      </div>

      <div [innerHTML]="controlledContent"></div>
    `, isInline: true, styles: [".mark{background-color:#ff0}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MagicStringComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ak-magic-string', template: `

      <input type="text" (keydown.enter)="marktext($event)">
      <div #content [hidden]="true">
        <ng-content select=".text"></ng-content>
      </div>

      <div [innerHTML]="controlledContent"></div>
    `, encapsulation: ViewEncapsulation.None, styles: [".mark{background-color:#ff0}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['content']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnaWMtc3RyaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hZ2ljLXN0cmluZy9zcmMvbGliL21hZ2ljLXN0cmluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUUsT0FBTyxFQUFxQixTQUFTLEVBQXNCLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFrQi9HLE1BQU0sT0FBTyxvQkFBb0I7SUFLL0IsWUFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFGeEQsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO0lBQzRCLENBQUM7SUFDNUQsUUFBUTtRQUNOLHlGQUF5RjtJQUUzRixDQUFDO0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUV4RixDQUFDO0lBQ0QsUUFBUSxDQUFDLEtBQVU7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxpQkFBaUIsR0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHNCQUFzQixLQUFLLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QyxDQUFDOztpSEFuQlUsb0JBQW9CO3FHQUFwQixvQkFBb0IsMkpBZHJCOzs7Ozs7OztLQVFUOzJGQU1VLG9CQUFvQjtrQkFoQmhDLFNBQVM7K0JBQ0UsaUJBQWlCLFlBQ2pCOzs7Ozs7OztLQVFULGlCQUllLGlCQUFpQixDQUFDLElBQUk7d0dBR2hCLE9BQU87c0JBQTVCLFNBQVM7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbiAgQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhay1tYWdpYy1zdHJpbmcnLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIChrZXlkb3duLmVudGVyKT1cIm1hcmt0ZXh0KCRldmVudClcIj5cbiAgICAgIDxkaXYgI2NvbnRlbnQgW2hpZGRlbl09XCJ0cnVlXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIi50ZXh0XCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgW2lubmVySFRNTF09XCJjb250cm9sbGVkQ29udGVudFwiPjwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbXG4gICAgICBgLm1hcmsge2JhY2tncm91bmQtY29sb3I6IHllbGxvd31gXG4gICAgXSxcbiAgICBlbmNhcHN1bGF0aW9uIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuICB9KVxuICBleHBvcnQgY2xhc3MgTWFnaWNTdHJpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50ITogRWxlbWVudFJlZjxhbnk+O1xuXG4gICAgb3JpbmFsQ29udGVuZXQ6IHN0cmluZyA9ICcnO1xuICAgIGNvbnRyb2xsZWRDb250ZW50OiBzdHJpbmcgPSAnJztcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgIC8vIHRoaXMuY29udHJvbGxlZENvbnRlbnQgPSB0aGlzLm9yaW5hbENvbnRlbmV0ID0gdGhpcy5jb250ZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG5cbiAgICB9XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5jb250cm9sbGVkQ29udGVudCA9IHRoaXMub3JpbmFsQ29udGVuZXQgPSB0aGlzLmNvbnRlbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcblxuICAgIH1cbiAgICBtYXJrdGV4dChldmVudDogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB0aGlzLmNvbnRyb2xsZWRDb250ZW50ID0gdGhpcy5vcmluYWxDb250ZW5ldDtcbiAgICAgIHRoaXMuY29udHJvbGxlZENvbnRlbnQgPXRoaXMub3JpbmFsQ29udGVuZXQucmVwbGFjZShuZXcgUmVnRXhwKGV2ZW50LnRhcmdldC52YWx1ZSwgJ2cnKSxtYXRjaCA9PiBgPHNwYW4gY2xhc3M9XCJtYXJrXCI+JHttYXRjaH08L3NwYW4+YCk7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cbiJdfQ==