function dias2periodo(diasBrutos) {
  let anos = parseInt(diasBrutos / 365, 10);

  const meses_restantes = diasBrutos - (anos * 365);
  let meses = parseInt(meses_restantes / 30, 10);

  const dias = meses_restantes - (meses * 30);

  // if (meses === 12) {
  //   meses = meses - 12;
  //   anos = anos + 1;
  // }

  return {
    anos,
    meses,
    dias
  };
}

function periodo2dias(intervalo = 0) {
  const diasTotal = intervalo.reduce((acc, { dias }) => dias + acc, 0);
  const dias2meses = parseInt(diasTotal / 30, 10);
  const dias = diasTotal - (dias2meses * 30);

  const mesesTotal = intervalo.reduce((acc, { meses }) => meses + acc, 0) + dias2meses;
  const meses2anos = parseInt(mesesTotal / 12, 10);
  const meses = mesesTotal - (meses2anos * 12);

  const anos = intervalo.reduce((acc, { anos }) => anos + acc, 0) + meses2anos;
  const total = (anos * 365) + (meses * 30) + dias

  return { dias: total };
}

console.log(dias2periodo(363));