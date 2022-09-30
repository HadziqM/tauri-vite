-- Your SQL goes here
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  pass VARCHAR NOT NULL,
  previlage BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  produk VARCHAR NOT NULL UNIQUE,
  variant VARCHAR NOT NULL,
  price INT NOT NULL,
  stock INT NOT NULL,
  bought BIGINT NOT NULL
);
CREATE TABLE history (
  id SERIAL PRIMARY KEY,
  produk VARCHAR NOT NULL,
  quantity INT NOT NULL,
  cash_in BIGINT NOT NULL,
  bought TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT forign_produk
      FOREIGN KEY(produk) 
	  REFERENCES inventory(produk)
);

