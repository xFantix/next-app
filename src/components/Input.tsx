import { cn } from '@/lib/utils';
import { Input as InputUI } from './ui/input';

type InputProps = React.ComponentProps<
  typeof InputUI
>;

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    <InputUI
      className={cn('w-56', className)}
      {...props}
    />
  );
}
