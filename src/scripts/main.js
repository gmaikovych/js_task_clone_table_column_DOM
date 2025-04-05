'use strict';

function cloneColumn() {
  const rows = document.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[1];
    const cellCopy = cell.cloneNode(true);

    rows[i].append(cellCopy);
  }

  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[4];

    rows[i].append(cell);
  }
}

cloneColumn();
