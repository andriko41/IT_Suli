CREATE TABLE felhasznalok (
felhasznaloID INT GENERATED ALWAYS AS IDENTITY,
felhasznalonev VARCHAR(100) NOT NULL,
emailcim VARCHAR(100),
regisztraciodatuma TIMESTAMP,
PRIMARY KEY (felhasznaloID)
);

INSERT INTO felhasznalok (felhasznaloID, felhasznalonev, emailcim, regisztraciodatuma)
VALUES (DEFAULT, 'Torolni Foglak', 'del@ujsag.com', NOW())



CREATE TABLE kategoriak (
kategoriaID INT GENERATED ALWAYS AS IDENTITY,
kategorianev VARCHAR(255) NOT NULL,
PRIMARY KEY (kategoriaID)
);

INSERT INTO kategoriak (kategoriaID, kategorianev)
VALUES (DEFAULT, 'Haboru')


CREATE TABLE cikkek (
cikkID INT GENERATED ALWAYS AS IDENTITY,
cikkcim VARCHAR(100) NOT NULL,
cikkdatum TIMESTAMP,
szerzoID INT,
szoveg VARCHAR(255),
kategoriaID INT,
PRIMARY KEY (cikkID),
CONSTRAINT fk_szerzoID FOREIGN KEY(szerzoID) REFERENCES felhasznalok(felhasznaloID),
CONSTRAINT fk_kategoriaID FOREIGN KEY(kategoriaID) REFERENCES kategoriak(kategoriaID)
);

INSERT INTO cikkek (cikkID, cikkcim, cikkdatum, szerzoid, szoveg, kategoriaid)
VALUES (DEFAULT, 'Ujabb torok ostrom bivalybasznadon', NOW(), 4, 'A tegnap ejjel kirohantunk egy picit a fiuakkal es par ezer torok talalkozott egybol alahhal',4)


CREATE TABLE hozzaszolasok (
hozzaszolasID INT GENERATED ALWAYS AS IDENTITY,
felhasznaloID INT,
cikkID INT,
datum TIMESTAMP,
szoveg VARCHAR(255),
PRIMARY KEY (hozzaszolasID),
CONSTRAINT fk_felhasznaloID FOREIGN KEY(felhasznaloID) REFERENCES felhasznalok(felhasznaloID),
CONSTRAINT fk_cikkID FOREIGN KEY(cikkID) REFERENCES cikkek(cikkID)
);


INSERT INTO hozzaszolasok (hozzaszolasID, felhasznaloID, cikkID, datum, szoveg)
VALUES (DEFAULT, 4,4, NOW(), 'ez a szoveg tele van faj es hitgyulolettel, meg verontassal...... pfujj')

CREATE TABLE kedvencek (
felhasznaloID int NOT NULL,
cikkid int NOT NULL,
PRIMARY KEY  (felhasznaloID, cikkID),
CONSTRAINT fk_felhasznaloID FOREIGN KEY(felhasznaloID) REFERENCES felhasznalok(felhasznaloID),
CONSTRAINT fk_cikkID FOREIGN KEY(cikkID) REFERENCES cikkek(cikkID)
);


INSERT INTO kedvencek (felhasznaloID, cikkid)
VALUES (4, 4)



SELECT kategorianev, count(cikkid)
From cikkek JOIN kategoriak ON cikkek.kategoriaid = kategoriak.kategoriaid
group by kategorianev


UPDATE felhasznalok
SET emailcim = 'sanyika@ujsag.com'
WHERE felhasznaloid = 1

DELETE FROM felhasznalok
WHERE felhasznaloid = 5