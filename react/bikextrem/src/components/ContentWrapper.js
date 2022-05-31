import Topbar from './TopBar'
import ContentRowTop from './ContentRowTop'
import Footer from './Footer'
import Tabla from './Tabla'


function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <Topbar />
                <ContentRowTop />
            </div>
            <Tabla />
            <Footer />
        </div>

    )
}

export default ContentWrapper;