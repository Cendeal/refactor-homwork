function printOwing(invoice) {
    let outstanding = 0;

    // calculate outstanding
    for (const o of invoice.borderSpacing) {
        outstanding += o.amount;
    }

    // record due date
    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

    printBanner()
    printDetail(invoice,outstanding)
}
function printBanner(){
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
}

function printDetail(invoice,outstanding){
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}
