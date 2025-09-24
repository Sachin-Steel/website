import React from "react";
import "./App.css";

function App() {
    return (
        <div className="app">
            {/* Header */}
            <header className="header fade-in">
                <div>
                    <h1 className="company-name">Sachin Steel</h1>
                    <p className="gst">GST No: 27XXXXXXXXXXXX</p>
                </div>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#products">Products</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* About Section */}
            <section id="about" className="fade-in">
                <h2>About Us</h2>
                <p>
                    Sachin Steel is a trusted name in the steel industry, providing high
                    quality alloy, carbon, and special steels to meet the needs of
                    engineering, automotive, and industrial applications. We ensure
                    reliability, durability, and customer satisfaction in every product we
                    deliver.
                </p>
                <div className="about-images">
                    <img src="https://via.placeholder.com/300x200" alt="Factory" />
                    <img src="https://via.placeholder.com/300x200" alt="Products" />
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="fade-in">
                <h2>Our Products</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="src/assets/SAE4140.jpg" alt="4140 Round Bar" />
                        <h3>SAE/AISI 4140</h3>
                        <p>
                            Chromium-Molybdenum alloy steel with high strength & toughness.
                            Used in shafts, gears, and oil & gas components.
                        </p>
                    </div>
                    <div className="product-card">
                        <img src="src/assets/En8.jpg" alt="EN8" />
                        <h3>EN8 / C45</h3>
                        <p>
                            Medium carbon steel with good tensile strength. Ideal for studs,
                            bolts, and automotive parts.
                        </p>
                    </div>
                    <div className="product-card">
                        <img src="src/assets/En24.jpg" alt="EN24" />
                        <h3>EN24 / AISI 4340</h3>
                        <p>
                            High-strength alloy steel. Widely used for gears, shafts,
                            automotive & aerospace components.
                        </p>
                    </div>
                    <div className="product-card">
                        <img src="src/assets/En47.jpg" alt="EN47" />
                        <h3>EN47</h3>
                        <p>
                            Silicon-manganese spring steel. Perfect for springs, blades, and
                            wear-resistant parts.
                        </p>
                    </div>
                    <div className="product-card">
                        <img src="src/assets/En353.jpg" alt="EN353" />
                        <h3>EN353</h3>
                        <p>
                            Case-hardening alloy steel. Used in gears, shafts, and high-wear
                            applications.
                        </p>
                    </div>
                    <div className="product-card">
                        <img src="src/assets/SAE8620.jpg" alt="SAE 8620" />
                        <h3>SAE 8620</h3>
                        <p>
                            Case-hardening steel with toughness and wear resistance. Commonly
                            used in gear manufacturing.
                        </p>
                    </div>
                    <div className="product-card">
                        <img src="src/assets/En9.jpg" alt="C55 / EN9" />
                        <h3>C55 / EN9</h3>
                        <p>
                            Medium carbon steel with high hardness. Ideal for gears, cams, and
                            machine parts.
                        </p>
                    </div>
                    <div className="product-card">
                        <img src="src/assets/20MnCr5.jpg" alt="20MnCr5" />
                        <h3>20MnCr5</h3>
                        <p>
                            Case-hardening steel with excellent toughness and strength. Used
                            in gears and shafts.
                        </p>
                    </div>
                    <div className="product-card">
                        <img src="src/assets/En36C.jpg" alt="36C" />
                        <h3>36C</h3>
                        <p>
                            Medium carbon steel for structural and mechanical applications
                            where strength is needed.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="footer">
                <h2>Contact Us</h2>
                <p>
                    📍 Address: Mumbai, Maharashtra, India <br />
                    📧 Email: info@sachinsteel.com <br />
                    📞 Phone: +91-9876543210
                </p>
                <a
                    href="https://wa.me/919876543210"
                    className="whatsapp-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    💬 Chat on WhatsApp
                </a>
            </footer>
        </div>
    );
}

export default App;
