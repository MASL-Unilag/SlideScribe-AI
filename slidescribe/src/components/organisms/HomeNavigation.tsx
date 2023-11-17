// import logo from './assets/logo.svg';







function Navigation() {
    return (
        <nav className="flex gap-4 items-center flex-shrink-0">
        <ul>
            <li className="h-6">
                {/* <img src={logo} alt="Slides Logo" /> */}
            </li>

            <li>
                <a href="">
                    Slidescribe
                </a>
            </li>

            <li>
                <a href="">
                    Home
                </a>
            </li>

            <li>
                <a href="">
                    About Us
                </a>
            </li>

            <li>
                <button>
                    <a href="">
                        Login
                    </a>
                </button>
            </li>

            <li>
                <button>
                    <a href="">
                        Get started for free
                    </a>
                </button>
            </li>

        </ul>
        </nav>
    )
}

export default Navigation