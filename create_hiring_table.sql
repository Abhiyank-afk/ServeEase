USE serveease_db;

CREATE TABLE hiring_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    worker_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    service_type VARCHAR(50) NOT NULL,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'accepted', 'completed') DEFAULT 'pending'
);
