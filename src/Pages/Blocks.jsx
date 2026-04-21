import "./Blocks.css";

function Blocks() {
    return (
        <section className="blocks-section">

            <h1 className="blocks-title">Block Allocation</h1>

            <div className="blocks-wrapper">

                {/* GREEN BLOCK */}
                <div className="block-card green">
                    <h2>Green Block</h2>

                    <div className="block-list">

                        <div className="block-row">
                            <span>Edward Wilson</span>
                            <span>2534</span>
                        </div>
                        <div className="block-row">
                            <span>Josh Winter</span>
                            <span>2274</span>
                        </div>
                        <div className="block-row">
                            <span>Addison Matthews</span>
                            <span>2240</span>
                        </div>



                        <div className="block-row">
                            <span>Nathan Bullen</span>
                            <span>2160</span>
                        </div>
                        <div className="block-row">
                            <span>Michael Lauer</span>
                            <span>2065</span>
                        </div>
                        <div className="block-row">
                            <span>James Duggan</span>
                            <span>2007</span>
                        </div>
                        <div className="block-row">
                            <span>James Mason</span>
                            <span>1501</span>
                        </div>


                    </div>
                </div>


                {/* GOLD BLOCK */}
                <div className="block-card gold">
                    <h2>Gold Block</h2>

                    <div className="block-list">



                        <div className="block-row">
                            <span>Levi Franks</span>
                            <span>2463</span>
                        </div>
                        <div className="block-row">
                            <span>Felix Gelman-White</span>
                            <span>2244</span>
                        </div>


                        <div className="block-row">
                            <span>Paul Kaiser</span>
                            <span>2232</span>
                        </div>

                        <div className="block-row">
                            <span>Jason Hodgett</span>
                            <span>2089</span>
                        </div>



                        <div className="block-row">
                            <span>Luke Francis</span>
                            <span>2032</span>
                        </div>
                        <div className="block-row">
                            <span>Mattie Clarkson</span>
                            <span>1987</span>
                        </div>

                        <div className="block-row">
                            <span>Casey De-Vene</span>
                            <span>1849</span>
                        </div>



                    </div>
                </div>

            </div>

        </section>
    );
}

export default Blocks;