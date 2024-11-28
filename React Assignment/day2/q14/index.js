let { useState } = React;

const App = () => {
  // State to track the active page
  const [activePage, setActivePage] = useState("Home");

  // Sample product data
  const products = [
    { id: 1, name: "Smartphone", price: "$499", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Laptop", price: "$899", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Smartwatch", price: "$299", image: "https://via.placeholder.com/150" },
  ];

  // Function to render content based on the active page
  const renderContent = () => {
    switch (activePage) {
      case "Home":
        return <h1 style={styles.pageContent}>Welcome to Home</h1>;
      case "product":
        return (
          <div style={styles.productContainer}>
            {products.map((product) => (
              <div key={product.id} style={styles.productCard}>
                <img src={product.image} alt={product.name} style={styles.productImage} />
                <h2 style={styles.productName}>{product.name}</h2>
                <p style={styles.productPrice}>{product.price}</p>
              </div>
            ))}
          </div>
        );
      case "Contact":
        return <h1 style={styles.pageContent}>Contact Us</h1>;
      default:
        return <h1 style={styles.pageContent}>404 Page Not Found</h1>;
    }
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <button
          style={activePage === "Home" ? styles.activeLink : styles.link}
          onClick={() => setActivePage("Home")}
        >
          Home
        </button>
        <button
          style={activePage === "About" ? styles.activeLink : styles.link}
          onClick={() => setActivePage("product")}
        >
         Product
        </button>
        <button 
          style={activePage === "Contact" ? styles.activeLink : styles.link}
          onClick={() => setActivePage("Contact")}
        >
          Contact
        </button>
      </nav>

      {/* Dynamic Content */}
      <div style={styles.content}>{renderContent()}</div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  link: {
    padding: "10px 20px",
    backgroundColor: "#ddd",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  activeLink: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  content: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginTop: "10px",
  },
  productContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  productImage: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  productName: {
    fontSize: "18px",
    margin: "10px 0",
  },
  productPrice: {
    fontSize: "16px",
    color: "#888",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
