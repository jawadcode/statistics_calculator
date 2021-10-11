const numbers_span = document.querySelector('.numbers_value');
const mean_span = document.querySelector('.mean_value');
const variance_span = document.querySelector('.variance_value');
const sd_span = document.querySelector('.sd_value');

const sum_x = document.querySelector('.sum_x');
const sum_means = document.querySelector('.sum_means');

const table_body = document.querySelector('.values_table_body');
const form = document.querySelector('.form');
const table_values = [[], []];
form.addEventListener('submit', ev => {
  const x = parseFloat(ev.target['form_value'].value);
  ev.target['form_value'].value = '';
  table_values[0].push(x);
  table_values[1].push(x * x);
  updateTable();
  updateStats();
});

function updateTable() {
  const last = table_values[1].length - 1;
  const row = document.createElement('tr');
  const index = document.createElement('td');
  index.innerText = last;
  const x = document.createElement('td');
  x.innerText = table_values[0][last];
  const x2 = document.createElement('td');
  x2.innerText = table_values[1][last];

  row.append(index, x, x2);
  table_body.append(row);
}

function updateStats() {
  const n = table_values[0].length;
  const sumx = table_values[0].reduce((prev, curr) => prev + curr);
  const summeans = table_values[1].reduce((prev, curr) => prev + curr);

  const mean = sumx / n;
  const variance = summeans / n - mean * mean;
  const sd = Math.sqrt(variance);

  sum_x.innerText = sumx;
  sum_means.innerText = summeans;
  numbers_span.innerText = n;
  mean_span.innerText = mean;
  variance_span.innerText = variance;
  sd_span.innerText = sd;
}
