import React from 'react';
import { Input as InputComponent } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function Input({
  lable,
  setCurrency,
  setAmount,
  currencyList,
  amount,
  currency,
}) {
  return (
    <Card className="p-3">
      <form className="flex w-full justify-between flex-col gap-5">
        <div className="flex justify-between">
          {lable && <lable>{lable}</lable>}
        </div>
        <div className="flex gap-2">
          <InputComponent
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="number"
          />

          <Select onChange={(e) => setCurrency(e.target.value)}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Currency" />
            </SelectTrigger>
            <SelectContent>
              {currencyList?.map((currency) => {
                return <SelectItem value={currency}> {currency} </SelectItem>;
              })}
            </SelectContent>
          </Select>

          {/* <Select
          className=" "
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Currency" />
          </SelectTrigger>
          <SelectItem>
            {currencyList?.map((currency) => {
              return <SelectItem value={currency}> {currency} </SelectItem>;
            })}
          </SelectItem>
        </Select> */}

          {/* <select
          className=" "
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          {currencyList?.map((currency) => {
            return <option key={currency}>{currency}</option>;
          })}
        </select> */}
        </div>
      </form>
    </Card>
  );
}

export default Input;
// { lable, setAmount, currencyList, setCurrency, ...rest }
