-- Create Database MonstersDb if it does not exist
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'MonstersDb')
BEGIN
    CREATE DATABASE MonstersDb;
END;

-- Use the MonstersDb database
USE MonstersDb;

-- Create the 'Monsters' table with an auto-increment primary key if it does not exist
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'Monsters')
BEGIN
    CREATE TABLE Monsters (
      Id INT PRIMARY KEY IDENTITY(1,1),
      Name VARCHAR(50),
      Personality VARCHAR(50)
    );
END;

-- Create the 'Habitats' table with an auto-increment primary key if it does not exist
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'Habitats')
BEGIN
    CREATE TABLE Habitats (
      Id INT PRIMARY KEY IDENTITY(1,1),
      Name VARCHAR(50),
      Climate VARCHAR(50),
      Temperature INT
    );
END;

-- Create the 'Lives' table with foreign keys referencing 'Monsters' and 'Habitats' if it does not exist
IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'Lives')
BEGIN
    CREATE TABLE Lives (
      Id INT PRIMARY KEY IDENTITY(1,1),
      Monster varchar(50),
      Habitat varchar(50)
    );
END;

-- Insert data if tables exist
INSERT INTO Monsters (Name, Personality)
VALUES
('Fluffy', 'aggressive'),
('Noodles', 'impatient'),
('Rusty', 'passionate');

INSERT INTO Habitats (Name, Climate, Temperature)
VALUES
('desert', 'dry', 100),
('forest', 'hunted', 70),
('mountain', 'icy', 30);

INSERT INTO Lives (Monster, Habitat)
VALUES
('Fluffy', 'desert'),
('Noodles', 'forest'),
('Rusty', 'mountain');
