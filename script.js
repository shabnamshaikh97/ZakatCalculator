document.getElementById('zakatForm').addEventListener('submit',function(event){
    event.preventDefault();
    var goldValue=parseFloat(document.getElementById('goldValue').value);
    var silverValue=parseFloat(document.getElementById('silverValue').value);
    var cashAmount=parseFloat(document.getElementById('cashAmount').value);
    const currentgoldAmount=7125;
    const currentsilverAmount=88;
    var goldAmount=goldValue*currentgoldAmount;
    var silverAmount=silverValue*currentsilverAmount;
    var totalZakat=(goldAmount+silverAmount+cashAmount)*0.025;
    document.getElementById('result').innerHTML='<h2>Zakat Amount<h2><p>Total Zakat to pay:'+totalZakat.toFixed(2)+'Rupees</p>';

});