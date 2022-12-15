import { Component } from "@angular/core";

@Component({
    selector: "ap-photo",
    templateUrl: "photo.component.html"
})

export class PhotoComponent {
    url: string = "https://www.quanticdespert.com/wp-content/uploads/2020/01/lion-3576045_1280.jpg";
    description: string = "Leão";
}