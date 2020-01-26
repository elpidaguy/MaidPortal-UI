import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'display-filter',
  templateUrl: './display-filter.component.html',
  styleUrls: ['./display-filter.component.scss'],
})
export class DisplayFilterComponent implements OnInit {
  form: FormGroup;
  options: { label: string; value: string }[];
  @Input() displayStrategy?: number;
  @Output() displayFilterChange = new EventEmitter<string>();
  dispalySizeOptions = [10, 15, 20];
  // dispalySizeOptions = [15, 30, 45, 60, 75];
  constructor(
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
      // this.options = this.getOptions();
      this.setForm();
  }

  private setForm() {
      this.form = this.formBuilder.group({
          display: this.displayStrategy,
      });
  }

  protected displayFilterChanged() {
      const sortStrategy = this.form.get('display').value;
      this.displayFilterChange.emit(sortStrategy);
  }
}
