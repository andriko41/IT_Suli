CREATE TABLE lakcimek (
    lakcim_id INT GENERATED ALWAYS AS IDENTITY,
    varos VARCHAR(40),
    utca VARCHAR(40),
    hazszam VARCHAR(15),
    PRIMARY KEY(lakcim_id)
) 
INSERT INTO lakcimek (lakcim_id, varos, utca, hazszam)
VALUES (DEFAULT, 'erdovaros', 'barlangutca', '8')
) 


CREATE TABLE felhasznalok (
    felhl_id INT GENERATED ALWAYS AS IDENTITY,
    nev VARCHAR(40),
    telszam VARCHAR(15),
    szuldatum TIMESTAMP,
    nem VARCHAR(15),
    lakcim_id INT,
    PRIMARY KEY(felhl_id),
    CONSTRAINT fk_lakcim_id FOREIGN KEY(lakcim_id) REFERENCES lakcimek(lakcim_id)
)
INSERT INTO felhasznalok (felhl_id, nev, telszam, szuldatum, nem, lakcim_id)
VALUES (DEFAULT, 'barlangipok', '111333888', '2020-04-04', 'no', 4)


create table csoportok (
    csop_id INT GENERATED ALWAYS AS IDENTITY,
    csopnev VARCHAR(40),
    PRIMARY KEY(csop_id)
)
insert into csoportok (csop_id, csopnev)
values (DEFAULT,'gyujtogetes')


CREATE TABLE csoportoktagjai (
	csop_id int NOT NULL,
	felhl_id int NOT NULL,
	szerepkor int,
	PRIMARY KEY  (csop_id, felhl_id),
	CONSTRAINT fk_felhl_id FOREIGN KEY(felhl_id) REFERENCES felhasznalok(felhl_id),
	 CONSTRAINT fk_csop_id FOREIGN KEY(csop_id) REFERENCES csoportok(csop_id)
	)
drop table csoportoktagjai
insert into csoportoktagjai (csop_id, felhl_id, szerepkor)
values (4,1,'3')
--[guru-1, seged-2 tag-3]

CREATE TABLE baratok (
	felhl_id1 int,
	felhl_id2 int,
	PRIMARY KEY(felhl_id1),
	CONSTRAINT fk_felhl_id1 FOREIGN KEY(felhl_id1) REFERENCES felhasznalok(felhl_id),
	CONSTRAINT fk_felhl_id2 FOREIGN KEY(felhl_id2) REFERENCES felhasznalok(felhl_id)
)
insert into baratok (felhl_id1, felhl_id2)
values (4,3)


CREATE TABLE posztok (
	felhl_id int,
	csop_id int,
	idopont TIMESTAMP,
	leiras VARCHAR(255),
	PRIMARY KEY(felhl_id),
	CONSTRAINT fk_felhl_id FOREIGN KEY(felhl_id) REFERENCES felhasznalok(felhl_id),
	CONSTRAINT fk_csop_id FOREIGN KEY(csop_id) REFERENCES csoportok(csop_id)
	)
insert into posztok (felhl_id, csop_id, idopont, leiras)
values (3,4,'2022-05-09','baltazar lett a gyujtogeto guru')	




select felhl_id, nev
FROM felhasznalok JOIN lakcimek ON felhasznalok.lakcim_id = lakcimek.lakcim_id
where varos='erdovaros'


select csopnev, count(csoportoktagjai.csop_id) as tagok
from csoportoktagjai JOIN csoportok ON csoportoktagjai.csop_id = csoportok.csop_id
group by csopnev

--grouped by csopid, order by idopont vagy desc es limit
select csop_id, idopont
from posztok

select count(*)
from baratok 
where felhl_id2 <> felhl_id1

CREATE TABLE lakcimek (
    lakcim_id INT GENERATED ALWAYS AS IDENTITY,
    varos VARCHAR(40),
    utca VARCHAR(40),
    hazszam VARCHAR(15),
    PRIMARY KEY(lakcim_id)
) 
INSERT INTO lakcimek (lakcim_id, varos, utca, hazszam)
VALUES (DEFAULT, 'erdovaros', 'barlangutca', '8')
) 


CREATE TABLE felhasznalok (
    felhl_id INT GENERATED ALWAYS AS IDENTITY,
    nev VARCHAR(40),
    telszam VARCHAR(15),
    szuldatum TIMESTAMP,
    nem VARCHAR(15),
    lakcim_id INT,
    PRIMARY KEY(felhl_id),
    CONSTRAINT fk_lakcim_id FOREIGN KEY(lakcim_id) REFERENCES lakcimek(lakcim_id)
)
INSERT INTO felhasznalok (felhl_id, nev, telszam, szuldatum, nem, lakcim_id)
VALUES (DEFAULT, 'barlangipok', '111333888', '2020-04-04', 'no', 4)


create table csoportok (
    csop_id INT GENERATED ALWAYS AS IDENTITY,
    csopnev VARCHAR(40),
    PRIMARY KEY(csop_id)
)
insert into csoportok (csop_id, csopnev)
values (DEFAULT,'gyujtogetes')


CREATE TABLE csoportoktagjai (
	csop_id int NOT NULL,
	felhl_id int NOT NULL,
	szerepkor int,
	PRIMARY KEY  (csop_id, felhl_id),
	CONSTRAINT fk_felhl_id FOREIGN KEY(felhl_id) REFERENCES felhasznalok(felhl_id),
	 CONSTRAINT fk_csop_id FOREIGN KEY(csop_id) REFERENCES csoportok(csop_id)
	)
drop table csoportoktagjai
insert into csoportoktagjai (csop_id, felhl_id, szerepkor)
values (4,1,'3')
--[guru-1, seged-2 tag-3]

CREATE TABLE baratok (
	felhl_id1 int,
	felhl_id2 int,
	PRIMARY KEY(felhl_id1),
	CONSTRAINT fk_felhl_id1 FOREIGN KEY(felhl_id1) REFERENCES felhasznalok(felhl_id),
	CONSTRAINT fk_felhl_id2 FOREIGN KEY(felhl_id2) REFERENCES felhasznalok(felhl_id)
)
insert into baratok (felhl_id1, felhl_id2)
values (4,3)


CREATE TABLE posztok (
	felhl_id int,
	csop_id int,
	idopont TIMESTAMP,
	leiras VARCHAR(255),
	PRIMARY KEY(felhl_id),
	CONSTRAINT fk_felhl_id FOREIGN KEY(felhl_id) REFERENCES felhasznalok(felhl_id),
	CONSTRAINT fk_csop_id FOREIGN KEY(csop_id) REFERENCES csoportok(csop_id)
	)
insert into posztok (felhl_id, csop_id, idopont, leiras)
values (3,4,'2022-05-09','baltazar lett a gyujtogeto guru')	




select felhl_id, nev
FROM felhasznalok JOIN lakcimek ON felhasznalok.lakcim_id = lakcimek.lakcim_id
where varos='erdovaros'


select csopnev, count(csoportoktagjai.csop_id) as tagok
from csoportoktagjai JOIN csoportok ON csoportoktagjai.csop_id = csoportok.csop_id
group by csopnev

--grouped by csopid, order by idopont vagy desc es limit
select csop_id, idopont
from posztok

select count(*)
from baratok 
where felhl_id2 <> felhl_id1

CREATE TABLE lakcimek (
    lakcim_id INT GENERATED ALWAYS AS IDENTITY,
    varos VARCHAR(40),
    utca VARCHAR(40),
    hazszam VARCHAR(15),
    PRIMARY KEY(lakcim_id)
) 
INSERT INTO lakcimek (lakcim_id, varos, utca, hazszam)
VALUES (DEFAULT, 'erdovaros', 'barlangutca', '8')
) 


CREATE TABLE felhasznalok (
    felhl_id INT GENERATED ALWAYS AS IDENTITY,
    nev VARCHAR(40),
    telszam VARCHAR(15),
    szuldatum TIMESTAMP,
    nem VARCHAR(15),
    lakcim_id INT,
    PRIMARY KEY(felhl_id),
    CONSTRAINT fk_lakcim_id FOREIGN KEY(lakcim_id) REFERENCES lakcimek(lakcim_id)
)
INSERT INTO felhasznalok (felhl_id, nev, telszam, szuldatum, nem, lakcim_id)
VALUES (DEFAULT, 'barlangipok', '111333888', '2020-04-04', 'no', 4)


create table csoportok (
    csop_id INT GENERATED ALWAYS AS IDENTITY,
    csopnev VARCHAR(40),
    PRIMARY KEY(csop_id)
)
insert into csoportok (csop_id, csopnev)
values (DEFAULT,'gyujtogetes')


CREATE TABLE csoportoktagjai (
	csop_id int NOT NULL,
	felhl_id int NOT NULL,
	szerepkor int,
	PRIMARY KEY  (csop_id, felhl_id),
	CONSTRAINT fk_felhl_id FOREIGN KEY(felhl_id) REFERENCES felhasznalok(felhl_id),
	 CONSTRAINT fk_csop_id FOREIGN KEY(csop_id) REFERENCES csoportok(csop_id)
	)
drop table csoportoktagjai
insert into csoportoktagjai (csop_id, felhl_id, szerepkor)
values (4,1,'3')
--[guru-1, seged-2 tag-3]

CREATE TABLE baratok (
	felhl_id1 int,
	felhl_id2 int,
	PRIMARY KEY(felhl_id1),
	CONSTRAINT fk_felhl_id1 FOREIGN KEY(felhl_id1) REFERENCES felhasznalok(felhl_id),
	CONSTRAINT fk_felhl_id2 FOREIGN KEY(felhl_id2) REFERENCES felhasznalok(felhl_id)
)
insert into baratok (felhl_id1, felhl_id2)
values (4,3)


CREATE TABLE posztok (
	felhl_id int,
	csop_id int,
	idopont TIMESTAMP,
	leiras VARCHAR(255),
	PRIMARY KEY(felhl_id),
	CONSTRAINT fk_felhl_id FOREIGN KEY(felhl_id) REFERENCES felhasznalok(felhl_id),
	CONSTRAINT fk_csop_id FOREIGN KEY(csop_id) REFERENCES csoportok(csop_id)
	)
insert into posztok (felhl_id, csop_id, idopont, leiras)
values (3,4,'2022-05-09','baltazar lett a gyujtogeto guru')	




select felhl_id, nev
FROM felhasznalok JOIN lakcimek ON felhasznalok.lakcim_id = lakcimek.lakcim_id
where varos='erdovaros'


select csopnev, count(csoportoktagjai.csop_id) as tagok
from csoportoktagjai JOIN csoportok ON csoportoktagjai.csop_id = csoportok.csop_id
group by csopnev

--grouped by csopid, order by idopont vagy desc es limit
select csop_id, idopont
from posztok

select count(*)
from baratok 
where felhl_id2 <> felhl_id1


SELECT b1.*
FROM baratok b1
LEFT JOIN baratok b2 ON b1.felhl_id1 = b2.felhl_id2 AND b1.felhl_id2 = b2.felhl_id1
WHERE b2.felhl_id1 IS NULL  
   OR b1.felhl_id1 < b1.felhl_id2;