import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MagicStringComponent implements OnInit {
    private changeDetectorRef;
    content: ElementRef<any>;
    orinalContenet: string;
    controlledContent: string;
    constructor(changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    marktext(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MagicStringComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MagicStringComponent, "ak-magic-string", never, {}, {}, never, [".text"], false, never>;
}
