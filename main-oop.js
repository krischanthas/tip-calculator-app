class Calculator  {
    constructor(bill, tipPercent, partySize) {
        this.bill = bill;
        this.tipPercent = tipPercent;
        this.partySize = partySize;
    }

    reset = () => {
        this.bill = 0;
        this.tipPercent = null;
        this.partySize = 1;
    }

    split = () => {
        const totalTipPerPerson = ((this.bill * this.tipPercent) / this.partySize).toFixed(2);
        const totalPerPerson = ((this.bill * (1 + this.tipPercent)) / this.partySize).toFixed(2);
    }
}