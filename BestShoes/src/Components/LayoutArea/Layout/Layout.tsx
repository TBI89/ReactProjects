import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Links from "../Links/Links";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <header>
                <Header />
            </header>
            <main>
                <Routing />
            </main>
            <aside>
                <Links />
            </aside>
            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default Layout;
