// import React from "react";
// import Products from "../data";
// import Navbar from "./Navbar";

// function Fashion() {
//   return (
//     <>
//       <Navbar />
//       <div>
//         {Products.filter((p) => p.category === "fashion").map((p) => (
//           <div className="card" style={{ width: "18rem" }} key={p.id}>
//             <img src={p.image_url} className="card-img-top" alt="product image" width={50} height={300}/>
//             <div className="card-body">
//               <h5 className="card-title">{p.name}</h5>
//               <p className="card-text">{p.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Fashion;
import React from "react";
import Products from "../data";
import Navbar from "./Navbar";

function Fashion() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {Products.filter((p) => p.category === "fashion").map((p) => (
            <div className="col-md-3 mb-4" key={p.id}>
              <div className="card">
                <img src={p.image_url} className="card-img-top" alt="product image"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <h2>${p.price}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Fashion;


