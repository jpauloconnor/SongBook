
import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;
    
    @HostListener('click') toggleOpen(){
        //If it's set to true, change to false.
        this.isOpen = !this.isOpen;
    }
}