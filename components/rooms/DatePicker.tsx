"use client";

import Input from "@/components/ui/Input";
import { getTodayISO } from "@/utils/dateUtils";

interface DatePickerProps {
  value: string;
  onChange: (date: string) => void;
  label?: string;
}

export default function DatePicker({
  value,
  onChange,
  label = "Select Date",
}: DatePickerProps) {
  return (
    <Input
      type="date"
      label={label}
      value={value}
      min={getTodayISO()}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

