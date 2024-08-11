const apiKey = '23adcb76f2beb9e09312e67f';
const base_Url = ` https://v6.exchangerate-api.com/v6/${apiKey}/pair/`


const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",

    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };


  let dropdown = document.querySelectorAll('.dropdown select');
  let btn = document.querySelector('button');
  let fromCurr = document.querySelector(".from select")
 let toCurr = document.querySelector(".to select")
 let msg = document.querySelector(".msg")



for(let select of dropdown) {
  for(let currCode in countryList){

    let options = document.createElement("option");
    options.innerText = currCode; // <option>PKR</option>
    options.value = currCode;  // <option value="PKR">PKR</option>  

    if(select.name === "from" && currCode === "USD"){
      options.selected = true;
    }else if(select.name === "to" && currCode === "PKR"){
      options.selected = true;
    }
    select.append(options);  // now all options are inside the select from and select to   <select name="from"><option value="PKR">PKR</option><select/> same as to
   

  }
  select.addEventListener("change",(evt)=>{
    // console.log(evt)
    // console.log(evt.target)
    changeflag(evt.target) // in evt.target we have our select from and to in which there are all currency codes
    
  })
}


// chaging flag when ever any other currency code us selected
function changeflag(currOptions){ 
  // here we are getting currency codes  which are keys in object and country codes which are values in object (we are getting both of them with the help of evt.target)
      let currencyCode = currOptions.value  // on select PKR is return the value which is actually a key in object of what ever we select in our case it is PKR
      // console.log(currOptions.value)
      let countryCode = countryList[currencyCode];  
      let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png` //  As we select any currency we will get a country code , we pass this country code into the link so that APi send the flag of that country  and we will change it with our defualt img scre in html
      let img = currOptions.parentElement.querySelector("img");
      img.src = newSrc;
     
      
}


btn.addEventListener("click", async (evt) => {   // with in event listner function we can use any  property or method  available on event object
   evt.preventDefault();  // removing all defualt behaviuors
   let amount = document.querySelector("input") // accessing the input tag were we input the converted value
   let value = amount.value  // what ever value we input inside the input block we get here
  if(value == "" || value < 1){
    value = 1  // The line value = 1 ensures that the variable value, which is being used in your script, is set to 1 
    amount.value = "1"  //The line amount.value = "1" ensures that the value displayed in the input box is set to "1"
  }

console.log(fromCurr.value ,toCurr.value , value )

const Url = `${base_Url}/${fromCurr.value}/${toCurr.value}`  // when call this api fetch data using fetch()  it will return the exhange rate of from currency to , to currency

try{

let repsonse = await fetch(Url)

let data = await repsonse.json()

let rate = data["conversion_rate"]  // here we get the exchange rate of what ever currency user select
// console.log(rate)

let finalAmout = (rate * value).toFixed(2)
msg.innerText = `${value} ${fromCurr.value} = ${finalAmout} ${toCurr.value}`
msg.style.fontWeight = 'bold';

// console.log(finalAmout,"converted rate")

}catch(err){
  console.log("Error : ",err)
}

})

