import Sidebar from "../containers/Layout/sidebar/Sidebar";
import Topbar from "../containers/Layout/topbar/Topbar";
import Layout from "../containers/Layout/index";
import MainWrapper from '../containers/App/MainWrapper';


function Home() {
    return (
        <div>
            <MainWrapper>
                <Layout>
                    <div>
                        <Topbar />
                    </div>
                    <div>
                        <Sidebar />
                    </div>
                    <div>
                        {/* <h1>Home</h1> */}
                    </div>
                </Layout>
            </MainWrapper>
        </div>
    )
};

export default Home;