import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatNumberDecimal } from "@/hooks/formatMoney";

export function ResultsCalcItems(props: any) {
  return (
    <Table>
      <TableCaption>A list of your recent calculator.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name Items</TableHead>
          <TableHead>Price Avg 24H</TableHead>
          <TableHead>Amount of items</TableHead>
          <TableHead className="text-right">Total Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.data.map((data: any, index: any) => {
          const resultPercent =
            (Number(data.percent) / 100) *
            (Number(data.average) * Number(data.numItems));

          const resultAll =
            Number(data.average) * Number(data.numItems) - resultPercent;

          return (
            <TableRow key={index}>
              <TableCell className="font-medium">{data.name}</TableCell>
              <TableCell>{data.average}</TableCell>
              <TableCell>{data.numItems}</TableCell>
              <TableCell className="text-right">
                {formatNumberDecimal(resultAll)}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {formatNumberDecimal(props.totalHasil)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
