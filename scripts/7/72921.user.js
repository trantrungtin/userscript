﻿// ==UserScript==
// @name           Billy-Rex
// @namespace      http://userscripts.org/users/142200
// @description    Persönliche AAO
// @include        http://nowhere.at.all/
// @version        2010-03-30
// ==/UserScript==

# AAO-Datei
#   zur Nutzung im AAO-Script von Sawos
#   s. http://userscripts.org/scripts/show/50002
#
# Version Sawos 2010-03-10
#
# leere Zeilen und Zeilen, die mit # beginnen, werden nicht berücksichtigt,
# Zeilen, die mit === beginnen, leiten einen neuen Abschnitt ein
# innerhalb der Abschnitte gilt immer "Key<TAB>Value" , wobei beliebig viele 
# Tabs erlaubt sind - aber NUR Tabs, keine Leerzeichen!
#

===Einsatzklassen

Auffahrunfall			F1+GW-Öl
Baum auf Auto			TH1+GW-Öl
Baum auf Dach			TH2+DL
Baum auf Straße			RW/LF
Brand in Autohaus		F4
Brand in Briefkasten		F1
Brand in Druckerei		F4
Brand in KFZ-Werkstatt		F3+TLF,GW-Öl
Brand in Lackfabrik		F4|GW-G,GW-M
Brand in Schule			F4
Brand in Spedition		F3+RW,TLF,DL,GW-L2|GW-G,GW-M
Brand in Sporthalle		F4+GW-L2
Brand in Zugdepot		F3+DL,GW-S
Brand im Baumarkt		F4+RW
Brand im Sägewerk		F4+GW-L2
Brand im Supermarkt		F2+DL,LF
Brennende Bäume			F1
Brennende S-Bahn		F2+GW-S
Brennende Telefonzelle		F1
Brennender LKW			F1
Brennender Müllwagen		F1
Brennender PKW			F1
Brennender Sicherungskasten	F1
Brennendes Gras			F1
Chemieunfall (an Schule)	GSG
Chlorgas Alarm (Schwimmbad)	GSG+GW-A
Container Brand			F1
Dachstuhlbrand			F2+DL
Fahrstuhl - Türöffnung		TH1
Feldbrand			F1
Fettbrand in Pommesbude		F2+LF,TLF
Feuer im Altenheim		F4
Feuer im Laubhaufen		F1
Gartenlaubenbrand		F1
Gastronomiebrand		F2+DL,LF
Gewerbebrand			F4+RW
Kellerbrand			F2
Keller unter Wasser		LF/RW
Kinobrand			F4+TLF
Kleiner Waldbrand		F1
Motorrad-Brand			F1
Mülleimer Brand			F1
Ölspur				F1+GW-Öl
Person im Fluss			LF,GW-T
Scheunenbrand			F3+GW-L2
Schornsteinbrand		F2+DL
Schuppenbrand			F1
Silobrand			F3+DL
Sperrmüllbrand			F1
Strohballen Brand		F1+GW-L2
Traktorbrand			F1
Verkehrsunfall			TH2+GW-Öl
Wohnblockbrand			F4
Wohnungsbrand			F2
Wohnwagenbrand			F1
Brand auf Weihnachtsmarkt	F2
Brand-Weihnachtsbaum in Kirche	F3
# 29.03.2010
Trocknerbrand			F1
Brand in Reifenlager		F4+GW-L2|GW-M,GW-G
Brand im Casino			F5+TLF
# 26.04.2010
PKW in Fluss			TH2
Brennendes Gebüsch		F1
Kaminbrand			F2+DL
Mähdrescherbrand		LF+TLF
Kioskbrand			F1
Brand in Schloss		F2
Garagenbrand			F2


===Fahrzeugzuordnung

NEUNEU		LF
undef		LF
F1		LF
F2		LF,LF
F3		LF,LF,LF/TLF,ELW
F4		LF,LF,LF/TLF,DL,ELW,GW-A
F5		LF,LF,LF,LF,LF/TLF,DL,ELW,GW-A
TH1		RW
TH2		RW,LF
GSG		LF,LF,LF,LF/TLF,RW,ELW,GW-M,GW-G

===Fahrzeugklassen

RTW			RTW
LF 10/6			LF
LF 20/16		LF
LF 8			LF
Kleinlöschfahrzeug	LF
TLF 20/40 - SL		TLF
DLA (K) 23/12		DL
ELW 1			ELW
LF 16-TS		TS
RW			RW
GW-A			GW-A
GW-L2 - Wasser		GW-L2
GW-Öl			GW-Öl
GW-Schiene		GW-S
GW-Taucher		GW-T
GW-Gefahrgut		GW-G
GW-Messtechnik		GW-M

===Ende
#