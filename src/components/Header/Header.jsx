import Navbar from '../Navbar/Navbar.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx'
import './Header.css'

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
            nisi vel est maximus ornare sed a sem. Phasellus malesuada neque vel
            orci hendrerit pharetra. Nulla vitae tortor et dolor rutrum
            pharetra. Phasellus tincidunt non nibh in viverra. Vivamus porttitor
            ac sapien vel laoreet. Nullam vitae lorem urna. Mauris non mi
            hendrerit, fringilla turpis sed, sollicitudin dolor. Ut lacinia
            turpis ac tellus elementum lobortis. Nulla facilisi. Aenean sagittis
            porta lectus ac consequat. Cras ac nisl lacus.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  )
}

export default Header
