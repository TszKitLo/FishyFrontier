import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul className="list-group list-group-flush rounded">
      <li className="list-group-item d-none d-lg-block">
        <h5 className="mt-1 mb-2">User X</h5>
        <div className="d-flex flex-wrap flex-column my-2 ">
          <Link to="/view-inventory"
            className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-4"
            replace
          >
             View Inventory 
          </Link>
          <Link to="/manage-inventory"
            className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-4"
            replace
          >
             Manage Inventory 
          </Link>
          <Link to="/order"
            className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-4"
          >
             Order 
          </Link>
          <Link to="/picking-list"
            className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-4"
          >
             Picking List 
          </Link>
          <Link to="/setting"
            className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-4"
          >
             Setting 
          </Link>

          <button className="btn btn-sm btn-outline-dark rounded-pill me-2 mb-4">Sign Out</button>
 
        </div>
      </li>
    
    </ul>
  );
}

export default SideBar;