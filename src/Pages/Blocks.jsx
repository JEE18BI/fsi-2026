import React from "react";

const ComingSoon = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Coming Soon</h1>

            <div style={styles.divider}></div>

            <p style={styles.subtitle}>
                We’re preparing something exceptional. Stay tuned.
            </p>

            <p style={styles.footer}>
                Fletcher Sharpe Invitational
            </p>
        </div>
    );
};

const styles = {
    container: {
        height: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
    },
    title: {
        fontSize: "64px",
        color: "#00843D", // green
        letterSpacing: "2px",
        marginBottom: "10px",
    },
    divider: {
        width: "80px",
        height: "3px",
        backgroundColor: "#FFCD00", // gold
        margin: "20px 0",
    },
    subtitle: {
        fontSize: "20px",
        color: "#0C0C0C",
        maxWidth: "500px",
        lineHeight: "1.6",
    },
    footer: {
        marginTop: "30px",
        fontSize: "14px",
        color: "#666",
        letterSpacing: "1px",
    },
};

export default ComingSoon;