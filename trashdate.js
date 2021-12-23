// The data
// Gögnin
var temp_JSON = {
    // List of neighbourhoods
    // Listi af svæðum
    svaedi_1: { 
        // List of all the streets in this neighbourhood
        // Listi yfir allar götur í þessu hverfi
        streets: ["Brún",
"Hrísar",
"Vallholt",
"Fellshlíð",
"Vellir",
"Stafn",
"Narfastaðir",
"Lyngbrekka",
"Daðastaðir",
"Kárhóll",
"Sólbakki",
"Langholt",
"Smáragrund",
"Lautavegur",
"Hólabrekka",
"Hólabraut",
"Hella",
"Hólavegur",
"Hamraborg",
"Hólar",
"Lautir",
"Langholt",
"Kjarni",
"Laugabrekka",
"Laugaskóli",
"Gerði",
"Víðihlíð",
"Hvítafell",
"Birkifell",
"Tröð",
"Laugafell",
"Selás",
"Laugaból",
"Breiðanes",
"Hjalli",
"Laugaberg",
"Stóru Laugar",
"Lækjarás",
"Laugagerði",
"Öndólfsstaðir",
"Akrar",
"Halldórsstaðir",
"Hamrar",
"Glaumbær",
"Grundargil",
"Kattholt",
"Vallakot",
"Einarsstaðir",
"Hlíðarholt",
"Jaðar",
"Breiðamýri",
"Kvígindisdalur",
"Helgastaðir",
"Pálmholt",
"Hólkot",
"Sýrnes",
"Fagranes",
"Fagraneskot",
"Helluland",
"Norðurhlíð",
"Grímshús",
"Múli 1",
"Fellsmúli",
"Múli 2",
"Kraunastaðir",
"Aðalból",
"Búvellir",
"Grenjaðarstaður",
"Hvoll",
"Staðarhóll",
"Staðarhraun",
"Brúar",
"Kasthvammur",
"Árhvammur",
"Árhólar",
"Þverá",
"Auðnir",
"Laxárvirkjun",
"Presthvammur",
"Brúnahlíð",
"Klambrasel",
],
        gray_dates: [
            // List over dates for when the gray trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar tunnur fyrir almennt rusl eru tæmdar fyrir þetta hverfi
            new Date(2022,0,4),new Date(2022,0,25),new Date(2022,1,15),new Date(2022,2,8),  new Date(2022,2,29), new Date(2022,3,26),  new Date(2022,4,10), 
            new Date(2022,4,31),  new Date(2022,5,21),new Date(2022,6,12), new Date(2022,7,2), new Date(2022,7,23), new Date(2022,8,13), new Date(2022,9,4),
            new Date(2022,9,25), new Date(2022,10,15),new Date(2022,11,6), new Date(2022,11,27)],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
            new Date(2022,0,4),new Date(2022,1,15),  new Date(2022,2,29),  new Date(2022,4,10), new Date(2022,5,21), new Date(2022,7,2), new Date(2022,8,13),
            new Date(2022,9,25),new Date(2022,11,6)]
	green_dates: [
            new Date(2022,0,25),new Date(2022,2,8), new Date(2022,3,26), new Date(2022,4,31),,new Date(2022,6,12), new Date(2022,7,23), new Date(2022,9,4), 
	    new Date(2022,10,15), new Date(2022,11,27)]
    },
    svaedi_2: {
        streets: ["Brekka",
"Brekkukot",
"Hraun",
"Miðhvammur",
"Heiðargarður",
"Ysti Hvammur",
"Lækjarhvammur",
"Fornhagi",
"Hagi",
"Ytra Fjall",
"Fjallsgerði",
"Syðra Fjall",
"Hraunbær",
"Hólmavað",
"Hafralækur",
"Hraungerði",
"Byrgisholt",
"Þingeyjarskóli",
"Ásgarður",
"Hólabak",
"Álftanes",
"Nes Aðaldal",
"Straumnes",
"Laxárnes",
"Árnes",
"Hlégarður",
"Víðigerði",
"Iðjugerði",
"Garður",
"Hjarðarból",
"Jarlstaðir",
"Hjarðarhagi",
"Tjörn",
"Lynghóll",
"Knútsstaðir",
"Árbót",
"Kjölur",
"Núpar",
"Hraunkot",
"Sílalækur",
"Berg",
"Sandur",
"Húsabakki",
"Rauðaskriða",
"Bergstaðir",
"Jódísarstaðir",
"Vað",], 
        gray_dates: [
            // List over dates for when the gray trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar tunnur fyrir almennt rusl eru tæmdar fyrir þetta hverfi
            new Date(2022,0,5),new Date(2022,0,26),new Date(2022,1,16),new Date(2022,2,9),  new Date(2022,2,30), new Date(2022,3,27),  new Date(2022,4,11), 
            new Date(2022,5,01),  new Date(2022,5,22),new Date(2022,6,13), new Date(2022,7,3), new Date(2022,7,24), new Date(2022,8,14), new Date(2022,9,5),
            new Date(2022,9,26), new Date(2022,10,16),new Date(2022,11,7), new Date(2022,11,28)],
        blue_dates: [
            // List over dates for when the blue trash bin will be emptied for this neighbourhood
            // Listi yfir allar dagsetningar þegar blátunnur eru tæmdar fyrir þetta hverfi
            new Date(2022,0,5),new Date(2022,1,16),  new Date(2022,2,30),  new Date(2022,4,11), new Date(2022,5,22), new Date(2022,7,3), new Date(2022,8,14),
            new Date(2022,9,26),new Date(2022,11,7)]
	green_dates: [
            new Date(2022,0,26),new Date(2022,2,9), new Date(2022,3,27), new Date(2022,5,01),,new Date(2022,6,13), new Date(2022,7,24), new Date(2022,9,5), 
	    new Date(2022,10,16), new Date(2022,11,28)]
    },
    svaedi_3: {
        streets: ["Ófeigsstaðir",
"Rangá",
"Engihlíð",
"Geirbjarnarstaðir",
"Syðri Leikskálaá",
"Árteigur",
"Fitjar",
"Granastaðir",
"Ártún",
"Nípá",
"Björg",
"Torfunes",
"Háls",
"Kvíaból",
"Arnþórsgerði",
"Hnjúkur",
"Hrafnsstaðir",
"Hlíð",
"Lækjarfell",
"Fellssel",
"Árland",
"Hjaltastaðir",
"Halldórsstaðir",
"Landamót",
"Fellsendi",
"Staðarfell",
"Fagrafell",
"Fremstafell",
"Lækjamót",
"Landamótasel",
"Kross",
"Vatnsendi",
"Arnstapi",
"Stórutjarnir",
"Tjarnarland",
"Brekkutún",
"Kambsstaðir",
"Sigríðarstaðir",
"Birningsstaðir"
], 
        gray_dates: [
            new Date(2020,11,29),new Date(2021,0,12),new Date(2021,0,26),new Date(2021,1,9),  new Date(2021,1,23), new Date(2021,2,9),  new Date(2021,2,23),
            new Date(2021,3,6),  new Date(2021,3,20),new Date(2021,4,4), new Date(2021,4,18), new Date(2021,5,1),  new Date(2021,5,15), new Date(2021,5,29),
            new Date(2021,6,13), new Date(2021,6,27),new Date(2021,7,10),new Date(2021,7,24), new Date(2021,8,7),  new Date(2021,8,21), 
            new Date(2021,9,5),  new Date(2021,9,19),new Date(2021,10,2),new Date(2021,10,16),new Date(2021,10,30),new Date(2021,11,14),new Date(2021,11,28)],
        blue_dates: [
            new Date(2021,0,22),new Date(2021,1,19),new Date(2021,2,19),new Date(2021,3,16),new Date(2021,4,14),
            new Date(2021,5,11),new Date(2021,6,9),new Date(2021,7,6),new Date(2021,8,3),new Date(2021,9,1), new Date(2021,9,29),
            new Date(2021,10,26),new Date(2021,11,23)]
    },
    svaedi_4: {
        streets: ["Fornhólar",
"Háls",
"Sólvangur",
"Sólgarður",
"Hallgilsstaðir",
"Merki",
"Veisa",
"Böðvarsnes",
"Böðvarsgarður",
"Þverá",
"Ingjaldsstaðir",
"Heiðarbraut",
"Rauðá",
"Fosshóll",
"Fljótsbakki",
"Úlfsbær",
"Lyngholt",
"Arndísarstaðir",
"Kálfborgará",
"Lundarbrekka",
"Rauðafell",
"Bjarnastaðir",
"Stóratunga",
"Víðiker",
"Engidalur",
"Svartárkot",
"Halldórsstaðir Bárðardal",
"Engi",
"Mýri",
"Lækjarvellir",
"Stóruvellir",
"Sandhaugar",
"Hlíðarendi",
"Eyjardalsá",
"Hvarf",
"Öxará",
"Hrifla",
"Ljósavatn",
"Hjarðarholt",
"Draflastaðir",
"Dæli",
"Vatnsleysa",
"Árbakki",
"Lyngvellir",
"Hrísgerði",
"Vaglir",
"Nes Fnjóskadal",
"Hróarsstaðir",
"Vaglaskógur",
"Vaglir",
"Lerkihlíð",
"Lundur",
"Veturliðastaðir",
"Selá",
"Steinkirkja",
"Brúnagerði",
"Illugastaðir",
"Reykir",], 
        gray_dates: [
            new Date(2021,0,5), new Date(2021,0,19),new Date(2021,1,2), new Date(2021,1,16), new Date(2021,2,2), new Date(2021,2,16), new Date(2021,2,30),
            new Date(2021,3,13),new Date(2021,3,27),new Date(2021,4,11),new Date(2021,4,25), new Date(2021,5,8), new Date(2021,5,22),
            new Date(2021,6,6), new Date(2021,6,20),new Date(2021,7,3), new Date(2021,7,17), new Date(2021,7,31),new Date(2021,8,14), new Date(2021,8,28),
            new Date(2021,9,12),new Date(2021,9,26),new Date(2021,10,9),new Date(2021,10,23),new Date(2021,11,7),new Date(2021,11,21)],
        blue_dates: [
            new Date(2021,0,21),new Date(2021,1,18),new Date(2021,2,18),new Date(2021,3,16),new Date(2021,4,13),
            new Date(2021,5,10),new Date(2021,6,8),new Date(2021,7,5),new Date(2021,8,2),  
			new Date(2021,8,30), new Date(2021,9,31),
            new Date(2021,10,25),new Date(2021,11,23)]
    },
    svaedi_5: {
        streets: ["Geirastaðir",
"Vagnbrekka",
"Vindbelgur",
"Ytri Neslönd",
"Borg",
"Syðri Neslönd",
"Stiklur",
"Grímsstaðir",
"Hella",
"Víðihlíð",
"Reykjahlíð",
"Helluhraun",
"Hlíðavegur",
"Skútahraun",
"Birkihraun",
"Lynghraun",
"Múlavegur",
"Klappahraun",
"Sólgarðar",
"Hólmar",
"Hraunborg",
"Björk",
"Vogar",
"Hraunteigur",
"Hraunberg",
"Bergholt",
"Stuðlar",
"Arnarnes",
"Víkurnes",
"Stekkholt",
"Geiteyjarströnd",
"Völuskrín",
"Kálfaströnd",
"Garður",
"Grænavatn",
"Dagmálaborg",
"Skjólbrekka",
"Skútustaðir",
"Sel Hótel",
"Tjarnarbrekka",
"Álftagerði",
"Haganes",
"Sjónarhóll",
"Gautlönd",
"Litlastönd",
"Heiði",
"Baldurheimur",
"Þórólfshvoll",
"Arnarvatn",
"Helluvað",
"Laxárbakki"
], 
        gray_dates: [
            new Date(2020,11,30),new Date(2021,0,13),new Date(2021,0,27),new Date(2021,1,10), new Date(2021,1,24),new Date(2021,2,10), new Date(2021,2,24),
            new Date(2021,3,7),  new Date(2021,3,21),new Date(2021,4,5), new Date(2021,4,19), new Date(2021,5,2), new Date(2021,5,16), new Date(2021,5,30),  
            new Date(2021,6,14), new Date(2021,6,28),new Date(2021,7,11),new Date(2021,7,25), new Date(2021,8,8), new Date(2021,8,22),
            new Date(2021,9,6),  new Date(2021,9,20),new Date(2021,10,3),new Date(2021,10,17),new Date(2021,11,1),new Date(2021,11,15),new Date(2021,11,29)],
        blue_dates: [
            new Date(2021,0,7), new Date(2021,0,28), new Date(2021,1,25),new Date(2021,2,25),new Date(2021,3,24),
            new Date(2021,4,21),new Date(2021,5,18), new Date(2021,6,15),new Date(2021,7,12),new Date(2021,8,9),
            new Date(2021,9,7),new Date(2021,10,4),new Date(2021,11,2)]
    },
}


// Define global vaiables
var address     
var dates_list
var current_date
var months = ["janúar", "febrúar", "mars", "apríl", "maí", "júní", "júlí", "ágúst", "september", "október", "nóvember", "desember"]
var first

function get_dates_for_address(){
    // Get all html elements and address and validate address
    current_date = (new Date())-86400000
    raw_address = document.getElementById("address").value
	textforhousesdiv = document.getElementById("textforhouse")
	textforhousesdiv.innerHTML = "<h5>"+raw_address+" - Næsta losun:</h5>"
    address = raw_address.replace(/\d+/g,'');
    address = address.trim()
    dates_gray_list = document.getElementById("dates_gray_list")
    dates_gray_list.innerHTML = ""
    dates_blue_list = document.getElementById("dates_blue_list")
    dates_blue_list.innerHTML = ""
    address = address.toLowerCase()
	textforhousesdiv.classList.add("marginbot")

    for(neighbourhood in temp_JSON){
        // Loop through the neighbourhoods
        for(street in temp_JSON[neighbourhood].streets){
            // Loop through streets
            if(address === temp_JSON[neighbourhood].streets[street]){
                // Check if address matches the street
				first = 0
                for(date in temp_JSON[neighbourhood].gray_dates){
                    // Loop through all dates for the address
                    if(temp_JSON[neighbourhood].gray_dates[date] > current_date){
                        // If date is in the future then list it
						first += 1
                        let day = temp_JSON[neighbourhood].gray_dates[date].getDate()                    
                        let month = (temp_JSON[neighbourhood].gray_dates[date].getMonth())
						if(first === 1){
							textforhousesdiv.innerHTML += '<br/><h5 class="graydatebox">Næsta losun á grátunnum<br/>'+day+'. '+months[month]+'</h5>'
						}else{
							dates_gray_list.innerHTML += "<li>"+day+". "+months[month]+""
						}
                    }
                }
				first = 0
                for(date in temp_JSON[neighbourhood].blue_dates){
                    // Loop through all dates for the address
                    if(temp_JSON[neighbourhood].blue_dates[date] > current_date){
                        // If date is in the future then list it
						first += 1
                        let day = temp_JSON[neighbourhood].blue_dates[date].getDate()                    
                        let month = (temp_JSON[neighbourhood].blue_dates[date].getMonth())
						if(first === 1){
							textforhousesdiv.innerHTML += '<h5 class="bluedatebox">Næsta losun á blátunnum<br/>'+day+'. '+months[month]+'</h5><br/>'
						}else{
							dates_blue_list.innerHTML += "<li>"+day+". "+months[month]+""
						}
                    }
                }
                return
            }
        }
    }
}
