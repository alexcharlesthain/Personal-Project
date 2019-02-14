let Cost, Postage, Grand_Total;

function tally()
{
Cost = 0;
if (document.orderform.Item1.checked) { Cost = Cost + 15.00; }
if (document.orderform.Item2.checked) { Cost = Cost + 30.00; }
if (document.orderform.Item3.checked) { Cost = Cost + 5.00; }
if (document.orderform.Item4.checked) { Cost = Cost + 8.50; }
if (document.orderform.Item5.checked) { Cost = Cost + 25.00; }
if (document.orderform.Item6.checked) { Cost = Cost + 2.00; }
if (document.orderform.Item7.checked) { Cost = Cost + 12.50; }
if (document.orderform.Item8.checked) { Cost = Cost + 22.50; }
if (document.orderform.Item9.checked) {  Cost = Cost + 6.50; }
if (document.orderform.Item10.checked) {  Cost = Cost + 7.50; }
if (document.orderform.Item11.checked) {  Cost = Cost + 7.50; }
if (document.orderform.Item12.checked) {  Cost = Cost + 5.00; }
if (document.orderform.Item13.checked) {  Cost = Cost + 5.00; }
if (document.orderform.Item14.checked) {  Cost = Cost + 18.50; }
if (document.orderform.Item15.checked) {  Cost = Cost + 10.00; }
if (document.orderform.Item16.checked) {  Cost = Cost + 25.00; }
if (document.orderform.Item17.checked) {  Cost = Cost + 20.00; }
if (document.orderform.Item18.checked) {  Cost = Cost + 30.00; }
if (document.orderform.Item19.checked) {  Cost = Cost + 30.00; }
if (document.orderform.Item20.checked) {  Cost = Cost + 20.00; }

Postage = (Cost * 0.07);

Cost = pound(Cost);
Postage = pound(Postage);
Grand_Total = parseFloat(Cost) + parseFloat(Postage);
Grand_Total = pound(Grand_Total);

document.orderform.Total.value = "£" + Cost;
document.orderform.Postage.value = "£" + Postage;
document.orderform.GrandTotal.value = "£" + Grand_Total;
}

function pound (amount)
{
amount = parseInt(amount * 100);
amount = parseFloat(amount/100);
if (((amount) == Math.floor(amount)) && ((amount - Math.floor (amount)) == 0))
{
    amount = amount + ".00"
    return amount;
}
if ( ((amount * 10) - Math.floor(amount * 10)) == 0)
{
    amount = amount + "0";
    return amount;
}
if ( ((amount * 100) - Math.floor(amount * 100)) == 0)
{
    amount = amount;
    return amount;
}
return amount;
}
