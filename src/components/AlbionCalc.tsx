"use client";

import { XCircle } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

const AlbionCalc = () => {
  const { toast } = useToast();
  const [fields, setFields] = useState<any[]>([]);
  const [resultsTotal, setResultsTotal] = useState<any>([]);

  const handleAddField = () => {
    setFields([
      ...fields,
      { name: "", average: "", numItems: "", percent: "" },
    ]);
  };

  const handleDeleteField = (index: any) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleInputChange = (
    index: number,
    property: keyof typeof fields[0],
    value: any
  ) => {
    const updatedFields = [...fields];
    updatedFields[index][property] = value;
    setFields(updatedFields);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const result = fields.map((e) => {
      const resultPercent =
        (Number(e.percent) / 100) * (Number(e.average) * Number(e.numItems));

      const resultAll = Number(e.average) * Number(e.numItems) - resultPercent;

      return resultAll;
    });

    const totalHasil = result
      .reduce((acc: any, value: any) => acc + parseFloat(value), 0)
      .toLocaleString("EN-en");

    toast({
      description: totalHasil,
    });
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* <div className="grid w-full items-center gap-1.5">
        <Label className="text-xl font-bold">Item 1</Label>
        <div className="flex justify-between gap-5 items-end">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="item1">Name item</Label>
            <Input
              type="text"
              id="item1"
              placeholder="Add your item"
              // value={field.name}
              onChange={(e) => handleInputChange(0, "name", e.target.value)}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="item1">Avg.24h</Label>
            <Input type="number" id="item1" placeholder="Add your item" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="item1">Number of items</Label>
            <Input type="number" id="item1" placeholder="Add your item" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="item1">Percent</Label>
            <Input type="number" id="item1" placeholder="%" className="w-20" />
          </div>
        </div>
      </div> */}

      {fields.map((field: any, index: any) => (
        <div key={index} className="grid w-full items-center gap-1.5">
          <Label className="text-xl font-bold">Item {index + 1}</Label>
          <div className="flex justify-between gap-5 items-end">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="item1">Name item</Label>
              <Input
                type="text"
                placeholder="Add your item"
                // value={field.name}
                onChange={(e) =>
                  handleInputChange(index, "name", e.target.value)
                }
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="item1">Avg.24h</Label>
              <Input
                type="number"
                placeholder="Add your item"
                onChange={(e) =>
                  handleInputChange(index, "average", e.target.value)
                }
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="item1">Number of items</Label>
              <Input
                type="number"
                placeholder="Add your item"
                onChange={(e) =>
                  handleInputChange(index, "numItems", e.target.value)
                }
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="item1">Percent</Label>
              <Input
                type="number"
                placeholder="%"
                className="w-20"
                onChange={(e) =>
                  handleInputChange(index, "percent", e.target.value)
                }
              />
            </div>
            <Button
              size="icon"
              className="p-2"
              onClick={() => handleDeleteField(index)}
            >
              <XCircle />
            </Button>
          </div>
        </div>
      ))}

      <Button onClick={() => handleAddField()}>Add Field</Button>

      <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
    </div>
  );
};

export default AlbionCalc;
