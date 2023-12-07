type insertRow = (row: RowElement) => RowID;

type deleteRow = (rowId: RowID) => void;

type updateRow = (rowId: RowID, row: RowElement) => RowID;
