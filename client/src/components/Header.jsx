import logo from './assets/pm.png';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-2'>
        <div className="container">
            <a href="/" className="navbar-brand">
                <div className="d-flex">
                    <img src={logo} h={60} w={60} alt="Logo" className="mr-2" />
                    <div>Project Management</div>
                </div>
            </a>
        </div>
    </nav>
  )
}
