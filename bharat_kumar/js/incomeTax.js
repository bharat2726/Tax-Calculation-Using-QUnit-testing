export default class incomeTax{
    
    calculateIncomeTax(amount){
        
        if(amount <= 20000 && amount > 0)
        {
            return "Enter a value greater than 20,000!";
        }
        else if(amount > 20000 && amount <= 40922)
        {
            const baseAmount = 0;
            const percent = 5.05;
            const additionalAmount = 0;

            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else if(amount > 40922 && amount <= 81847)
        {
            const baseAmount = 40922;
            const percent = 9.15;
            const additionalAmount = 2067;
            
            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else if(amount > 81847 && amount <= 150000)
        {
            const baseAmount = 81847;
            const percent = 11.16;
            const additionalAmount = 5811;
            
            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else if(amount > 150000 && amount <= 220000)
        {
            const baseAmount = 150000;
            const percent = 12.16;
            const additionalAmount = 13417;
            
            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else if(amount > 220000)
        {
            const baseAmount = 220000;
            const percent = 13.16;
            const additionalAmount = 21929;
            
            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else
        {
            throw "unimplemented";
        }
    }

    calculateFederalTax(amount){
        if(amount <= 45282 && amount >= 0)
        {
            const baseAmount = 0;
            const percent = 15;
            const additionalAmount = 0;

            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else if(amount > 45282 && amount <= 90563)
        {
            const baseAmount = 45282;
            const percent = 20.5;
            const additionalAmount = 6792;

            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else if(amount > 90563 && amount <= 140388)
        {
            const baseAmount = 90563;
            const percent = 26;
            const additionalAmount = 16075;
            
            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else if(amount > 140388 && amount <= 200000)
        {
            const baseAmount = 140388;
            const percent = 29;
            const additionalAmount = 29029;
            
            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else if(amount > 200000)
        {
            const baseAmount = 200000;
            const percent = 33;
            const additionalAmount = 46317;
            
            return ((((amount-baseAmount)*percent)/100) + additionalAmount).toFixed(2);
        }
        else
        {
            throw "unimplemented";
        }
    }
}