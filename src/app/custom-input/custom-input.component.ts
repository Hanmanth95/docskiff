import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-input",
  templateUrl: "./custom-input.component.html",
  styleUrls: ["./custom-input.component.css"],
})
export class CustomInputComponent implements OnInit {
  selectedTexts = ["Hanmanth", "S"];
  itemNameModel: any;
  constructor() {}

  ngOnInit() {}

  deleteItem(item) {
    this.selectedTexts.splice(this.selectedTexts.indexOf(item), 1);
  }

  addText(event) {
    if ((event.keyCode == 13 || event.keyCode == 188) && this.itemNameModel) {
      if (event.keyCode == 188) {
        this.itemNameModel = this.itemNameModel.slice(0, -1);
      }
      this.selectedTexts.push(this.itemNameModel);
      this.itemNameModel = "";
    }
  }
}
