import Topbar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import TablaProductos from './TablaProductos'


function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <Topbar />
                <ContentRowTop />
            </div>
            <TablaProductos />
            <Footer />
        </div>

    )
}

export default ContentWrapper;