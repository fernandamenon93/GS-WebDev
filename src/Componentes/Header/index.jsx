import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="header">
		  <div className="logo">
			<h1>EcoRide</h1>
		  </div>
		  <nav className="nav">
			<ul>
			  <li><Link to="/">Home</Link></li>
			  <li><Link to="/Funcionalidades">Funcionalidades</Link></li>
			  <li><Link to="/Beneficios">Benefícios</Link></li>
			  <li><Link to="/comunidade">Comunidade</Link></li>
			  <li><Link to="/contato">Contato</Link></li>
			</ul>
		  </nav>
		</header>
	  );
}

export default Header;
