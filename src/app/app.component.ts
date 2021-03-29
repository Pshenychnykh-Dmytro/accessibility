import { Component } from '@angular/core';

import { ListItem } from './list-item.model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "accessibilityApp";
  selectedItem: ListItem = { text: "", value: "" };
  selectedListItem = "default";
  list = ["item1", "item2", "item3", "item4"];
  items: ListItem[] = [
    {
      text: "option1",
      value: "1",
    },
    {
      text: "option2",
      value: "2",
    },
    {
      text: "option3",
      value: "3",
    },
    {
      text: "option4",
      value: "4",
    },
  ];
}
