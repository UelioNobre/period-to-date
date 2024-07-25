/**
 * Author: Fransuelio Nobre
 * Nickname: Uélio Nobre
 * Email: uelionobre@gmail.com
 * Role: Web developer
 *
 * License: MIT License
 *
 * Copyright (c) 2024 Fransuelio Nobre (Uélio Nobre)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const day2period_day = document.querySelector("#day2period_day");
const period2day_anos = document.querySelector("#period2day_anos");
const period2day_meses = document.querySelector("#period2day_meses");
const period2day_dias = document.querySelector("#period2day_dias");

function renderPeriod({ anos, meses, dias }) {
  period2day_anos.value = anos;
  period2day_meses.value = meses;
  period2day_dias.value = dias;
}

function renderDays() {
  const anos = +period2day_anos.value;
  const meses = +period2day_meses.value;
  const dias = +period2day_dias.value;
  const periodo = [{ anos, meses, dias }];
  const converte = periodo2dias(periodo);
  day2period_day.value = converte.dias;
}

window.onload = () => {
  day2period_day.addEventListener('input', (e) => {
    const period = dias2periodo(+e.target.value);
    renderPeriod(period);
  });

  period2day_dias.addEventListener('input', () => renderDays());
  period2day_meses.addEventListener('input', () => renderDays());
  period2day_anos.addEventListener('input', () => renderDays());
}
