import styles from './header.module.css';

function Header(){
    return(
      <div className={styles.background}>
        <nav className={styles.nav}>
  <h2 className={styles.navh2}>Wilker<span className={styles.navspan}>Guimarães</span></h2>
  <div class="collapse navbar-collapse" id="NavBar">
    <ul className={styles.navulli}>
      <li class="nav-item active">
        <a className={styles.navullia} href="#">Home </a>
      </li>
      <li class="nav-item">
        <a className={styles.navullia} href="#">Sobre Mim</a>
      </li>
      <li class="nav-item">
        <a className={styles.navullia} href="#">Projetos</a>
      </li>
      <li class="nav-item">
        <a className={styles.navullia} href="#">Clientes</a>
      </li>
      <li class="nav-item">
        <a className={styles.navullia} href="#">Contato</a>
      </li>
    </ul>
  </div>
</nav>
</div>
    )
}

export default Header