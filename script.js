// Current date - http://stackoverflow.com/a/4929629/412329
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;





const saveFormAsTextFile = () => {
    let content = [];
    if (window.location.pathname.includes("homecare")){
        content = [
            "##INI=ERX",
            "1," + document.getElementById("med-id").value,
            "2," + document.getElementById("drug-name").value,
            "52,UCLH configured",
            "112,Homecare Medication",
            "190,No",
            "196,Yes",
            "800,",
            "820,",
            "825,1",
            "826," + document.getElementById("disp-unit").value,
            "830,0",
            "840,",
            "850,0",
            "860,",
            "874,",
            "875,",
            "876,",
            "877,",
            "878,",
            "879,",
            "880,",
            "890,",
            "891,",
            "895,",
            "896,",
            "1102," + document.getElementById("op-name").value,
            "1300,BNFc",
            "1300,BNF",
            "1300,UCLH Neonatal Monographs",
            "1300,Medusa",
            "1305,1002732",
            "1305,",
            "1305,1002731",
            "1305,",
            "1310,https://bnfc.nice.org.uk/drug/",
            "1310,https://bnf.nice.org.uk/drug/",
            "1310,https://my.uclh.nhs.uk/Interact/Pages/Section/SubFullOne.aspx?subsection=8086",
            "1310,https://medusa.wales.nhs.uk/?ID=a19f785a2b51d55da73b12bcb16325e73381",
            "2000,No",
            "3001,40814924",
            "3002,40814924",
            "3050,No",
            "3051,No",
            "3070,No",
            "3071,No",
            "4120,Blueteq Drug",
            "4130,Homecare",
            "6015,Units",
            "7030,Units",
            "7035,Units",
            "7046,Units",
            "7050,Units",
            "9650,Yes",
            "11545,Urgent/Complex medication (UCLH to dispense)",
            "24120,BNFc",
            "24120,BNF",
            "24120,UCLH Neonatal Monographs",
            "24120,Medusa",
            "24125,1002732",
            "24125,",
            "24125,1002731",
            "24125,",
            "24130,https://bnfc.nice.org.uk/drug/",
            "24130,https://bnf.nice.org.uk/drug/",
            "24130,https://my.uclh.nhs.uk/Interact/Pages/Section/SubFullOne.aspx?subsection=8086",
            "24130,https://medusa.wales.nhs.uk/?ID=a19f785a2b51d55da73b12bcb16325e73381",
            "48200,Yes",
          ].join("\n");
    } else if (window.location.pathname.includes("radiopharm")){
        content = [
            "##INI=ERX",
            "1," + document.getElementById("med-id").value,
            "2," + document.getElementById("drug-name").value,
            "52,UCLH configured",
            "130,Non-Scheduled Medication",
            "160,Yes",
            "830,0",
            "850,0",
            "1100," + document.getElementById("drug-name").value,
            "1110,200902",
            "1115," + document.getElementById("drug-name").value,
            "3060,No",
            "3070,No",
            "7030,MBq",
            "7035,MBq",
            "7040,1",
            "7046,MBq",
            "7047,1",
            "7048,Nearest",
            "7050,MBq",
            "7055,Intravenous",
            "7057,Yes",
            "7215,No Label",
            "9650,Yes",
            "11030,0",
            "11400,200902",
            "11410,Intravenous",
            "11921,Days",
            "11926,Days",
            "24140,No",
            "24160,Radiology Medications",
            "24200,Inpatient ",
            "24210,4080200001",
            "34525,1051000014",
            "34525,1051000015",
            "34525,1051000012",
            "34525,1051000013",
            "34526,Recommended",
            "34526,Recommended",
            "34526,Recommended",
            "34526,Recommended"
        ].join("\n");
    } else {
        console.log("error")
    }

    console.log(content);
  const a = document.createElement("a");
  const file = new Blob([content], { type: "text/plain" });
  const filename = document.getElementById("med-id").value;

  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
};





// Header and Footer

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
             <!-- Logo -->
                 <a href="index.html" class="logo">
                     <span class="symbol"><img src="images/logo.svg" alt="" /></span><span class="title">MedBuilder</span>
                 </a>

             <!-- Nav -->
                 <nav>
                     <ul>
                         <li><a href="#menu">Menu</a></li>
                     </ul>
                 </nav>     
      `;
  }
}




class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
        <footer>            
          {*footer code goes here *}         
        </footer>     
      `;
  }
}

customElements.define("main-header", Header);
customElements.define("main-footer", Footer);
