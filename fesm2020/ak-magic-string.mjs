import * as i0 from '@angular/core';
import { Injectable, Component, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';

class MagicStringService {
}
MagicStringService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MagicStringService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MagicStringService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MagicStringService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MagicStringService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class MagicStringComponent {
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

class MagicStringModule {
}
MagicStringModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MagicStringModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MagicStringModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: MagicStringModule, declarations: [MagicStringComponent], exports: [MagicStringComponent] });
MagicStringModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MagicStringModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MagicStringModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MagicStringComponent
                    ],
                    imports: [],
                    exports: [
                        MagicStringComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of magic-string
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MagicStringComponent, MagicStringModule, MagicStringService };
//# sourceMappingURL=ak-magic-string.mjs.map
