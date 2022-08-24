import Hst from "./Hst.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";
import incomeTax from "./incomeTax.js";

$("#income").keypress(function(event){
    var key = (event.keyCode ? event.keyCode : event.which);
    if(key == '13')
    {
        document.getElementById('deducted').focus();
    }
});

$("#deducted").keypress(function(event){
    var key = (event.keyCode ? event.keyCode : event.which);
    if(key == '13')
    {
        const nDeducted = parseInt($("#deducted").val());
        const nAmount = parseInt($("#income").val());
        if(nAmount < 0)
        {
            $("#success").html("");
            $("#error").html("Amount can't be negative!");//error message for User for negative number
        }
        else if(nDeducted < 0)
        {
            $("#success").html("");
            $("#error").html("Deducted Amount can't be negative!");
        }
        else
        {
            const oIT = new incomeTax();
            const oTotaltax = parseInt(oIT.calculateIncomeTax(nAmount)) + parseInt(oIT.calculateFederalTax(nAmount));
            const oOwing = oTotaltax - nDeducted;
            
            if(nAmount > 20000)
            {
                $("#total").html(oTotaltax);
                $("#owing").html(oOwing);
                $("#error").html("");
                $("#success").html("Success!");
            }
            else
            {
                $("#success").html("");
                $("#error").html(oIT.calculateIncomeTax(nAmount));//error message for user for amount less than 20,0000
            }
        }
    }
});

$(document).ready(()=>{
    $("#calculateOntarioTax").click((evt)=>{
        evt.preventDefault();
        const nAmount = $("#income").val();
        const oIT = new incomeTax();
        $("#ontarioTax").html(oIT.calculateIncomeTax(nAmount));
    });

    $("#calculateFederalTax").click((evt)=>{
        evt.preventDefault();
        const nAmount = $("#income").val();
        const oIT = new incomeTax();
        $("#federalTax  ").html(oIT.calculateFederalTax(nAmount));
    });
});
