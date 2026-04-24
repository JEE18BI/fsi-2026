import React, { useState } from "react";

// Auto-load images (supports JPG uppercase too)
const images = import.meta.glob("../assets/FSI/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
    eager: true,
});

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const imageList = Object.values(images).map((file) => file.default);

    return (
        <div style={styles.page}>
            {/* Header */}
            <h1 style={styles.title}>FSI Gallery</h1>

            {/* Paragraphs */}
            <p style={styles.text}>
                This gallery captures moments, details, and perspectives that matter.
                Each image reflects a story — sometimes loud, sometimes quiet, but always intentional.
            </p>

            <p style={styles.text}>
                Click on any image to view it in full size and download it. Take your time exploring —
                the small details are usually the most interesting ones.
            </p>

            {/* Grid */}
            <div style={styles.grid}>
                {imageList.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`gallery-${index}`}
                        style={styles.image}
                        onClick={() => setSelectedImage(src)}

                        loading="lazy"

                    />
                    ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div style={styles.modal} onClick={() => setSelectedImage(null)}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} style={styles.modalImage} />

                        <a
                            href={selectedImage}
                            download
                            style={styles.downloadBtn}
                        >
                            Download
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;

// 🎨 Styles
const styles = {
    page: {
        padding: "40px 20px",
        paddingTop: "100px",
        maxWidth: "1200px",
        margin: "auto",
        fontFamily: "sans-serif",
    },
    title: {
        fontSize: "32px",
        marginBottom: "10px",
        color:"#00843DFF"
    },
    text: {
        fontSize: "16px",
        color: "#555",
        marginBottom: "10px",
        lineHeight: "1.6",
    },
    grid: {
        marginTop: "30px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "15px",
    },
    image: {
        width: "100%",
        borderRadius: "14px",
        cursor: "pointer",
        transition: "transform 0.3s ease",
    },
    modal: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modalContent: {
        position: "relative",
        maxWidth: "90%",
        maxHeight: "90%",
    },
    modalImage: {
        width: "100%",
        maxHeight: "80vh",
        borderRadius: "12px",
    },
    downloadBtn: {
        display: "inline-block",
        marginTop: "10px",
        padding: "10px 20px",
        background: "#fff",
        color: "#000",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
    },
};