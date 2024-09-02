import React, { useState, useEffect, useRef }  from 'react';
import Slider from 'react-slider';
import Bredcamb from "./components/Bredcamb";
import Categories from "./components/Categories";
import Link from 'next/link';

function Shop() {
    const [value, setValue] = useState([0, 500]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [showLatest, setShowLatest] = useState(false);
  const [showReference, setShowReference] = useState(false);

  // Refs to track dropdowns
  const dropdownRefLatest = useRef(null);
  const dropdownRefReference = useRef(null);

  // Click outside handling
  const handleClickOutside = (event) => {
    // Close the "Latest" dropdown if clicking outside
    if (dropdownRefLatest.current && !dropdownRefLatest.current.contains(event.target)) {
      setShowLatest(false);
    }
    // Close the "Reference" dropdown if clicking outside
    if (dropdownRefReference.current && !dropdownRefReference.current.contains(event.target)) {
      setShowReference(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <Bredcamb page="Shop" />
      <div className="site-section"><div className="container">
        
      <div className="row mb-5">
  <div className="col-md-9 order-2">
    <div className="row">
      <div className="col-md-12 mb-5">
        <div className="float-md-left mb-4">
          <h2 className="text-black h5">Shop All</h2>
        </div>
        
    <div className="d-flex">
      <div className="dropdown mr-1 ml-md-auto" ref={dropdownRefLatest}>
        <button
          type="button"
          className="btn btn-secondary btn-sm dropdown-toggle"
          onClick={() => setShowLatest(!showLatest)}
        >
          Latest
        </button>
        {showLatest && (
          <div className="dropdown-menu">
            <Link className="dropdown-item" href="#">
              Men
            </Link>
            <Link className="dropdown-item" href="#">
              Women
            </Link>
            <Link className="dropdown-item" href="#">
              Children
            </Link>
          </div>
        )}
      </div>
      <div className="btn-group" ref={dropdownRefReference}>
        <button
          type="button"
          className="btn btn-secondary btn-sm dropdown-toggle"
          onClick={() => setShowReference(!showReference)}
        >
          Reference
        </button>
        {showReference && (
          <div className="dropdown-menu">
            <Link className="dropdown-item" href="#">
              Relevance
            </Link>
            <Link className="dropdown-item" href="#">
              Name, A to Z
            </Link>
            <Link className="dropdown-item" href="#">
              Name, Z to A
            </Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" href="#">
              Price, low to high
            </Link>
            <Link className="dropdown-item" href="#">
              Price, high to low
            </Link>
          </div>
        )}
      </div>
      <style jsx>{`
        .dropdown-menu {
          display: block;
          position: absolute;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        .dropdown-menu a {
          display: block;
          padding: 8px 16px;
          color: #333;
          text-decoration: none;
        }
        .dropdown-menu a:hover {
          background-color: #f8f9fa;
        }
        .dropdown-divider {
          height: 1px;
          background-color: #e9ecef;
          margin: 8px 0;
        }
        .btn-secondary {
          background-color: #6c757d;
          border: 1px solid #6c757d;
          color: white;
        }
        .btn-secondary:hover {
          background-color: #5a6268;
        }
        .btn-sm {
          padding: 0.25rem 0.5rem;
          font-size: 0.875rem;
        }
        .btn-group {
          position: relative;
        }
      `}</style>
    </div>
      </div>
    </div>
    <div className="row mb-5">
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/cloth_1.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Tank Top</Link>
            </h3>
            <p className="mb-0">Finding perfect t-shirt</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/shoe_1.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Corater</Link>
            </h3>
            <p className="mb-0">Finding perfect products</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/cloth_2.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Polo Shirt</Link>
            </h3>
            <p className="mb-0">Finding perfect products</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/cloth_3.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">T-Shirt Mockup</Link>
            </h3>
            <p className="mb-0">Finding perfect products</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/shoe_1.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Corater</Link>
            </h3>
            <p className="mb-0">Finding perfect products</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/cloth_1.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Tank Top</Link>
            </h3>
            <p className="mb-0">Finding perfect t-shirt</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/shoe_1.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Corater</Link>
            </h3>
            <p className="mb-0">Finding perfect products</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/cloth_2.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Polo Shirt</Link>
            </h3>
            <p className="mb-0">Finding perfect products</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/cloth_3.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">T-Shirt Mockup</Link>
            </h3>
            <p className="mb-0">Finding perfect products</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/shoe_1.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Corater</Link>
            </h3>
            <p className="mb-0">Finding perfect products</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/cloth_1.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Tank Top</Link>
            </h3>
            <p className="mb-0">Finding perfect t-shirt</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4" >
        <div className="block-4 text-center border">
          <figure className="block-4-image">
            <Link href="/shopsingle">
              <img
                src="assets/images/cloth_2.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </Link>
          </figure>
          <div className="block-4-text p-4">
            <h3>
              <Link href="/shopsingle">Polo Shirt</Link>
            </h3>
            <p className="mb-0">Finding perfect products</p>
            <p className="text-primary font-weight-bold">$50</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row" >
      <div className="col-md-12 text-center">
        <div className="site-block-27">
          <ul>
            <li>
              <Link href="#">&lt;</Link>
            </li>
            <li className="active">
              <span>1</span>
            </li>
            <li>
              <Link href="#">2</Link>
            </li>
            <li>
              <Link href="#">3</Link>
            </li>
            <li>
              <Link href="#">4</Link>
            </li>
            <li>
              <Link href="#">5</Link>
            </li>
            <li>
              <Link href="#">&gt;</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-3 order-1 mb-5 mb-md-0">
    <div className="border p-4 rounded mb-4">
      <h3 className="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
      <ul className="list-unstyled mb-0">
        <li className="mb-1">
          <Link href="#" className="d-flex">
            <span>Men</span> <span className="text-black ml-auto">(2,220)</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link href="#" className="d-flex">
            <span>Women</span>{" "}
            <span className="text-black ml-auto">(2,550)</span>
          </Link>
        </li>
        <li className="mb-1">
          <Link href="#" className="d-flex">
            <span>Children</span>{" "}
            <span className="text-black ml-auto">(2,124)</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className="border p-4 rounded mb-4">
      <div className="mb-4">
        <h3 className="mb-3 h6 text-uppercase text-black d-block">
          Filter by Price
        </h3>
        {/* <div id="slider-range" className="border-primary" /> */}
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={500}
        renderTrack={(props, state) => <div {...props} className="track" />}
        renderThumb={(props, state) => <div {...props} className="thumb" />}
      />
      <br></br>
        <p>Selected range: ${value[0]} - ${value[1]}</p>

      <style jsx>{`
        .track {
          
          height: 10px;
          border-radius: 5px;
              border: 1px solid #7971ea;
        }
        .thumb {
          background-color: #7971ea;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          cursor: pointer;
              top: -4px;
        }
      `}</style>
      </div>
      <div className="mb-4">
        <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
        <label htmlFor="s_sm" className="d-flex">
          <input type="checkbox" id="s_sm" className="mr-2 mt-1" />{" "}
          <span className="text-black">Small (2,319)</span>
        </label>
        <label htmlFor="s_md" className="d-flex">
          <input type="checkbox" id="s_md" className="mr-2 mt-1" />{" "}
          <span className="text-black">Medium (1,282)</span>
        </label>
        <label htmlFor="s_lg" className="d-flex">
          <input type="checkbox" id="s_lg" className="mr-2 mt-1" />{" "}
          <span className="text-black">Large (1,392)</span>
        </label>
      </div>
      <div className="mb-4">
        <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
        <Link href="#" className="d-flex color-item align-items-center">
          <span className="bg-danger color d-inline-block rounded-circle mr-2" />{" "}
          <span className="text-black">Red (2,429)</span>
        </Link>
        <Link href="#" className="d-flex color-item align-items-center">
          <span className="bg-success color d-inline-block rounded-circle mr-2" />{" "}
          <span className="text-black">Green (2,298)</span>
        </Link>
        <Link href="#" className="d-flex color-item align-items-center">
          <span className="bg-info color d-inline-block rounded-circle mr-2" />{" "}
          <span className="text-black">Blue (1,075)</span>
        </Link>
        <Link href="#" className="d-flex color-item align-items-center">
          <span className="bg-primary color d-inline-block rounded-circle mr-2" />{" "}
          <span className="text-black">Purple (1,075)</span>
        </Link>
      </div>
    </div>
  </div>
</div>
</div></div>
      <h2 className="text-center text-dark">Categories</h2>

      <Categories />
    </>
  );
}

export default Shop;
