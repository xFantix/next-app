import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  Select as SelectUI,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface SelectProps {
  options: string[];
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Select({
  options,
  className,
  placeholder,
  onChange,
  value,
}: SelectProps) {
  return (
    <SelectUI
      onValueChange={onChange}
      value={value}
    >
      <SelectTrigger
        className={cn('w-56', className)}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(option => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectUI>
  );
}
