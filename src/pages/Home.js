import PetsTable from "../components/PetsTable";

export default function Home() {
  return (
    <div className="card w-50 mb-3 mt-3">
      <div className="card-header">Pets</div>
      <div className="card-body">
        <PetsTable />
      </div>
    </div>
  );
}
