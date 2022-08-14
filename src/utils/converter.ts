import Papa from "papaparse";

const convertToJson = (str: string) => {
    const rawData: any[] = Papa.parse(str).data;
    const rows: any[] = rawData.slice(0, rawData.length-1);
    const headers: string[] = rows[0].filter((r: string) => !!r);
    rows.shift();
    const list:any[] = rows.map((row: any) => {
        const values: string[] = row;
        const data: any = headers.reduce((obj: any, header: string, i: number) => {
            obj[header.trim()] = values[i].trim();
            return obj;
        }, {})
        return data;
    })
    return list;
}

export const handleParse = (fileName: string) => {
    const path: string = `../../data/${fileName}.csv`;
    return fetch(path)
    .then(res => res.text())
    .then(data => convertToJson(data));
}