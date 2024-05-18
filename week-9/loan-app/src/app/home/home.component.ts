import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loanAmt: number = 0;
  interestRate: number = 0;
  years: number = 0;
  monthlyPayment: string;

  totalPayments: number = 0;
  theInterestRate: number = 0;
  interest: number = 0;
  principal: number = 0;
  x: number = 0;

  totalInterestPaid: string;

  constructor() {}

  ngOnInit(): void {}

  calculateEntry() {
    //Calculate Monthly Payment
    console.log('Loan Amt: ' + this.loanAmt);

    this.principal = this.loanAmt;

    this.interest = this.interestRate / 100 / 12;

    this.totalPayments = this.years * 12;

    console.log(`interest: ${this.interest}`);

    this.x = Math.pow(1 + this.interest, this.totalPayments);
    console.log(`x: ${this.x}`);

    this.monthlyPayment = (
      (this.principal * this.x * this.interest) /
      (this.x - 1)
    ).toFixed(2);

    //Calculate Interest Paid
    console.log(`principal: ${this.principal}`);
    console.log(`interest rate: ${this.interestRate}`);

    this.theInterestRate = this.interestRate / 100;
    console.log(`the interest rate: ${this.theInterestRate}`);

    console.log(`years: ${this.years}`);
    console.log(`total Payments: ${this.totalPayments}`);

    this.totalInterestPaid = (
      this.principal *
      this.theInterestRate *
      this.years
    ).toFixed(2);
  }
}
