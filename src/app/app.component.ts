import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-3">Custom Pipes Demo</h1>
      </div>
    </div>
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Cusomt Pipe Type</th>
        <th>Example</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Cusom UpperCase Pipe</td>
        <td> {{upperCaseText | customUpperCase}}<br></td>
      </tr>
      <tr>
        <td>Custom LowerCase Pipe</td>
        <td> {{loweCaseText | customLowerCase}}<br></td>
      </tr>
      <tr>
        <td>SummaryCase Pipe</td>
        <td> {{summaryText | SummaryPipe}}<br></td>
      </tr>
      </tbody>
    </table>
  `

})
export class AppComponent {
  upperCaseText = 'LoReM iPsUm';
  loweCaseText = 'LoReM iPsUm';
  summaryText = 'Lorem ipsum dolor sit amet, munere consequat ut mei, case verear ius et. Mea cu debet iudico discere, sit ea assum dissentiet. Usu ei nulla homero insolens, ex mel esse quot abhorreant. No modus erant euismod his.';
}
