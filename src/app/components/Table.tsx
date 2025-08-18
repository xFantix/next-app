import { DataTable } from '@/components/DataTable';
import Filters from './Filters';

export default function Table() {
  return (
    <div className="flex flex-col gap-4">
      <Filters />
      <DataTable columns={[]} data={[]} />
    </div>
  );
}
