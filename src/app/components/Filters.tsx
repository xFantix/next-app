import Input from '@/components/Input';
import Select from '@/components/Select';

export default function Filters() {
  return (
    <div className="flex gap-4">
      <Input placeholder="Search" />
      <Select
        options={[]}
        placeholder="Sort by"
      />
      <Select
        options={[]}
        placeholder="Category"
      />
    </div>
  );
}
