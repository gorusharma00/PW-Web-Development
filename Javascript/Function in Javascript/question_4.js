function calculateTax(income){
    const tax_Rates = {
        '0-100000': 0.02,
        '100001-200000': 0.03,
        '200001-300000': 0.04,
        '300001-400000': 0.05,
        '400001-500000': 0.06,
        '500001': 0.08,
    }

    for(const range in tax_Rates){
        const[start, end] = range.split("-").map(Number);
        if(!end){
            if(income >= start){
                return income * tax_Rates[range]
            }
        }else if(income >= start && income <= end){
            return income * tax_Rates[range];
        }
    }
    return 0;
}

console.log(calculateTax(600000));