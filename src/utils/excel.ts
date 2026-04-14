import * as XLSX from "xlsx";

type SheetData = {
  name: string;
  rows: Record<string, unknown>[];
};

type ExcelData = {
  sheetNames: string[];
  sheets: SheetData[];
};

export async function fetchXlsAsJson(url: string): Promise<ExcelData> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`No se pudo descargar el archivo: ${response.status} ${response.statusText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const workbook = XLSX.read(arrayBuffer, { type: "array" });
  const sheetNames = workbook.SheetNames;

  const sheets = sheetNames.map((name) => ({
    name,
    rows: XLSX.utils.sheet_to_json(workbook.Sheets[name], { defval: "" }) as Record<string, unknown>[],
  }));

  return { sheetNames, sheets };
}
