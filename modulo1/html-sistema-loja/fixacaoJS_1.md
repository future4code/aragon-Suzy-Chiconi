~~~javascrit
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
const salario = 2000
let valorUnitarioCarro = valorTotalVendas / qtdeCarrosVendidos
let comissao = (valorUnitarioCarro * 5 / 100) + qtdeCarrosVendidos * 100
let totalMes = salario + comissao
return totalMes
}
~~~
