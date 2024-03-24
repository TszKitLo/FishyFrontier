import SideBar from "../components/SideBar";

export default function ViewInventory() {
  return (
    <div className="container mt-5 py-4 px-xl-5">
    <div className="row mb-4 mt-lg-3">
      <div className="d-none d-lg-block col-lg-3">
        <div className="border rounded shadow-sm">
          <SideBar />
        </div>
      </div>
    <div className="col-lg-9">
      <div className="d-flex flex-column h-100">
        <div className="row mb-3">
            View Inventory
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
