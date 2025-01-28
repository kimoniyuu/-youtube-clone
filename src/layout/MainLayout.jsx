import Nav from '../components/Nav/Nav.jsx';
import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Content from '../components/Contents/Content.jsx';
function MainLayout() {
    return (
        <section id='main-layout'>
            <Nav></Nav>
            <Sidebar></Sidebar>
            <Content></Content>
        </section>
    )
}

export default MainLayout;