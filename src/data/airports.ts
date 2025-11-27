// Comprehensive global airport database
export interface Airport {
  icao: string;
  iata: string;
  name: string;
  city: string;
  country: string;
  location: string;
}

export const airportDatabase: Airport[] = [
  // TURKEY - Complete coverage
  { icao: 'LTAC', iata: 'ESB', name: 'Esenboğa Havalimanı', city: 'Ankara', country: 'Türkiye', location: 'Ankara, Türkiye' },
  { icao: 'LTFM', iata: 'IST', name: 'İstanbul Havalimanı', city: 'İstanbul', country: 'Türkiye', location: 'İstanbul, Türkiye' },
  { icao: 'LTFJ', iata: 'SAW', name: 'Sabiha Gökçen Havalimanı', city: 'İstanbul', country: 'Türkiye', location: 'İstanbul, Türkiye' },
  { icao: 'LTAI', iata: 'AYT', name: 'Antalya Havalimanı', city: 'Antalya', country: 'Türkiye', location: 'Antalya, Türkiye' },
  { icao: 'LTFH', iata: 'ADB', name: 'İzmir Adnan Menderes Havalimanı', city: 'İzmir', country: 'Türkiye', location: 'İzmir, Türkiye' },
  { icao: 'LTCG', iata: 'DLM', name: 'Dalaman Havalimanı', city: 'Dalaman', country: 'Türkiye', location: 'Muğla, Türkiye' },
  { icao: 'LTBS', iata: 'BJV', name: 'Bodrum-Milas Havalimanı', city: 'Bodrum', country: 'Türkiye', location: 'Muğla, Türkiye' },
  { icao: 'LTBR', iata: 'BZI', name: 'Balıkesir Koca Seyit Havalimanı', city: 'Balıkesir', country: 'Türkiye', location: 'Balıkesir, Türkiye' },
  { icao: 'LTFG', iata: 'GZT', name: 'Gaziantep Havalimanı', city: 'Gaziantep', country: 'Türkiye', location: 'Gaziantep, Türkiye' },
  { icao: 'LTCL', iata: 'ASR', name: 'Kayseri Havalimanı', city: 'Kayseri', country: 'Türkiye', location: 'Kayseri, Türkiye' },
  { icao: 'LTAU', iata: 'MLX', name: 'Malatya Havalimanı', city: 'Malatya', country: 'Türkiye', location: 'Malatya, Türkiye' },
  { icao: 'LTCA', iata: 'TZX', name: 'Trabzon Havalimanı', city: 'Trabzon', country: 'Türkiye', location: 'Trabzon, Türkiye' },
  { icao: 'LTCF', iata: 'KYA', name: 'Konya Havalimanı', city: 'Konya', country: 'Türkiye', location: 'Konya, Türkiye' },
  { icao: 'LTCC', iata: 'VAN', name: 'Van Ferit Melen Havalimanı', city: 'Van', country: 'Türkiye', location: 'Van, Türkiye' },
  { icao: 'LTBJ', iata: 'ADA', name: 'Adana Şakirpaşa Havalimanı', city: 'Adana', country: 'Türkiye', location: 'Adana, Türkiye' },
  { icao: 'LTAP', iata: 'DIY', name: 'Diyarbakır Havalimanı', city: 'Diyarbakır', country: 'Türkiye', location: 'Diyarbakır, Türkiye' },
  { icao: 'LTCW', iata: 'EZS', name: 'Elazığ Havalimanı', city: 'Elazığ', country: 'Türkiye', location: 'Elazığ, Türkiye' },

  // FRANCE
  { icao: 'LFPG', iata: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France', location: 'Paris, France' },
  { icao: 'LFPO', iata: 'ORY', name: 'Orly Airport', city: 'Paris', country: 'France', location: 'Paris, France' },
  { icao: 'LFPB', iata: 'LBG', name: 'Le Bourget Airport', city: 'Paris', country: 'France', location: 'Paris, France' },
  { icao: 'LFML', iata: 'MRS', name: 'Marseille Provence Airport', city: 'Marseille', country: 'France', location: 'Marseille, France' },
  { icao: 'LFMN', iata: 'NCE', name: 'Nice Côte d\'Azur Airport', city: 'Nice', country: 'France', location: 'Nice, France' },
  { icao: 'LFLL', iata: 'LYS', name: 'Lyon-Saint Exupéry Airport', city: 'Lyon', country: 'France', location: 'Lyon, France' },
  { icao: 'LFBD', iata: 'BOD', name: 'Bordeaux-Mérignac Airport', city: 'Bordeaux', country: 'France', location: 'Bordeaux, France' },
  { icao: 'LFRS', iata: 'NTE', name: 'Nantes Atlantique Airport', city: 'Nantes', country: 'France', location: 'Nantes, France' },
  { icao: 'LFMD', iata: 'CEQ', name: 'Cannes-Mandelieu Airport', city: 'Cannes', country: 'France', location: 'Cannes, France' },

  // UNITED KINGDOM
  { icao: 'EGLL', iata: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'United Kingdom', location: 'London, UK' },
  { icao: 'EGKK', iata: 'LGW', name: 'Gatwick Airport', city: 'London', country: 'United Kingdom', location: 'London, UK' },
  { icao: 'EGLC', iata: 'LCY', name: 'London City Airport', city: 'London', country: 'United Kingdom', location: 'London, UK' },
  { icao: 'EGSS', iata: 'STN', name: 'Stansted Airport', city: 'London', country: 'United Kingdom', location: 'London, UK' },
  { icao: 'EGCC', iata: 'MAN', name: 'Manchester Airport', city: 'Manchester', country: 'United Kingdom', location: 'Manchester, UK' },
  { icao: 'EGPH', iata: 'EDI', name: 'Edinburgh Airport', city: 'Edinburgh', country: 'United Kingdom', location: 'Edinburgh, UK' },
  { icao: 'EGPF', iata: 'GLA', name: 'Glasgow Airport', city: 'Glasgow', country: 'United Kingdom', location: 'Glasgow, UK' },
  { icao: 'EGGW', iata: 'LTN', name: 'Luton Airport', city: 'London', country: 'United Kingdom', location: 'London, UK' },
  { icao: 'EGJB', iata: 'GCI', name: 'Guernsey Airport', city: 'Guernsey', country: 'United Kingdom', location: 'Guernsey, UK' },

  // GERMANY
  { icao: 'EDDM', iata: 'MUC', name: 'Munich Airport', city: 'Munich', country: 'Germany', location: 'Munich, Germany' },
  { icao: 'EDDF', iata: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany', location: 'Frankfurt, Germany' },
  { icao: 'EDDB', iata: 'BER', name: 'Berlin Brandenburg Airport', city: 'Berlin', country: 'Germany', location: 'Berlin, Germany' },
  { icao: 'EDDH', iata: 'HAM', name: 'Hamburg Airport', city: 'Hamburg', country: 'Germany', location: 'Hamburg, Germany' },
  { icao: 'EDDK', iata: 'CGN', name: 'Cologne Bonn Airport', city: 'Cologne', country: 'Germany', location: 'Cologne, Germany' },
  { icao: 'EDDL', iata: 'DUS', name: 'D��sseldorf Airport', city: 'Düsseldorf', country: 'Germany', location: 'Düsseldorf, Germany' },
  { icao: 'EDDS', iata: 'STR', name: 'Stuttgart Airport', city: 'Stuttgart', country: 'Germany', location: 'Stuttgart, Germany' },
  { icao: 'EDDN', iata: 'NUE', name: 'Nuremberg Airport', city: 'Nuremberg', country: 'Germany', location: 'Nuremberg, Germany' },
  { icao: 'EDDV', iata: 'HAJ', name: 'Hannover Airport', city: 'Hannover', country: 'Germany', location: 'Hannover, Germany' },

  // ITALY
  { icao: 'LIRF', iata: 'FCO', name: 'Fiumicino Airport', city: 'Rome', country: 'Italy', location: 'Rome, Italy' },
  { icao: 'LIMC', iata: 'MXP', name: 'Malpensa Airport', city: 'Milan', country: 'Italy', location: 'Milan, Italy' },
  { icao: 'LIML', iata: 'LIN', name: 'Linate Airport', city: 'Milan', country: 'Italy', location: 'Milan, Italy' },
  { icao: 'LIPZ', iata: 'VCE', name: 'Venice Marco Polo Airport', city: 'Venice', country: 'Italy', location: 'Venice, Italy' },
  { icao: 'LIRN', iata: 'NAP', name: 'Naples Airport', city: 'Naples', country: 'Italy', location: 'Naples, Italy' },
  { icao: 'LIRP', iata: 'PSA', name: 'Pisa Airport', city: 'Pisa', country: 'Italy', location: 'Pisa, Italy' },
  { icao: 'LIPH', iata: 'TRS', name: 'Trieste Airport', city: 'Trieste', country: 'Italy', location: 'Trieste, Italy' },
  { icao: 'LIBR', iata: 'BRI', name: 'Bari Airport', city: 'Bari', country: 'Italy', location: 'Bari, Italy' },
  { icao: 'LIEO', iata: 'OLB', name: 'Olbia Airport', city: 'Olbia', country: 'Italy', location: 'Sardinia, Italy' },

  // SPAIN
  { icao: 'LEMD', iata: 'MAD', name: 'Madrid-Barajas Airport', city: 'Madrid', country: 'Spain', location: 'Madrid, Spain' },
  { icao: 'LEBL', iata: 'BCN', name: 'Barcelona-El Prat Airport', city: 'Barcelona', country: 'Spain', location: 'Barcelona, Spain' },
  { icao: 'LEPA', iata: 'PMI', name: 'Palma de Mallorca Airport', city: 'Palma', country: 'Spain', location: 'Mallorca, Spain' },
  { icao: 'LEAL', iata: 'ALC', name: 'Alicante-Elche Airport', city: 'Alicante', country: 'Spain', location: 'Alicante, Spain' },
  { icao: 'LEMG', iata: 'AGP', name: 'Málaga-Costa del Sol Airport', city: 'Málaga', country: 'Spain', location: 'Málaga, Spain' },
  { icao: 'LEXJ', iata: 'XRY', name: 'Jerez Airport', city: 'Jerez', country: 'Spain', location: 'Jerez, Spain' },
  { icao: 'LEIB', iata: 'IBZ', name: 'Ibiza Airport', city: 'Ibiza', country: 'Spain', location: 'Ibiza, Spain' },
  { icao: 'GCRR', iata: 'ACE', name: 'Lanzarote Airport', city: 'Lanzarote', country: 'Spain', location: 'Canary Islands, Spain' },
  { icao: 'GCTS', iata: 'TFS', name: 'Tenerife South Airport', city: 'Tenerife', country: 'Spain', location: 'Canary Islands, Spain' },

  // POLAND
  { icao: 'EPWA', iata: 'WAW', name: 'Warsaw Chopin Airport', city: 'Warsaw', country: 'Poland', location: 'Warsaw, Poland' },
  { icao: 'EPKK', iata: 'KRK', name: 'Krakow John Paul II Airport', city: 'Krakow', country: 'Poland', location: 'Krakow, Poland' },
  { icao: 'EPGD', iata: 'GDN', name: 'Gdańsk Lech Wałęsa Airport', city: 'Gdańsk', country: 'Poland', location: 'Gdańsk, Poland' },
  { icao: 'EPWR', iata: 'WRO', name: 'Wrocław Airport', city: 'Wrocław', country: 'Poland', location: 'Wrocław, Poland' },
  { icao: 'EPPO', iata: 'POZ', name: 'Poznań-Ławica Airport', city: 'Poznań', country: 'Poland', location: 'Poznań, Poland' },
  { icao: 'EPKT', iata: 'KTW', name: 'Katowice Airport', city: 'Katowice', country: 'Poland', location: 'Katowice, Poland' },

  // SWITZERLAND
  { icao: 'LSZH', iata: 'ZRH', name: 'Zurich Airport', city: 'Zurich', country: 'Switzerland', location: 'Zurich, Switzerland' },
  { icao: 'LSGG', iata: 'GVA', name: 'Geneva Airport', city: 'Geneva', country: 'Switzerland', location: 'Geneva, Switzerland' },
  { icao: 'LFSB', iata: 'BSL', name: 'EuroAirport Basel', city: 'Basel', country: 'Switzerland', location: 'Basel, Switzerland' },
  { icao: 'LSZB', iata: 'BRN', name: 'Bern Airport', city: 'Bern', country: 'Switzerland', location: 'Bern, Switzerland' },
  { icao: 'LSGS', iata: 'SMV', name: 'Samedan Airport', city: 'St. Moritz', country: 'Switzerland', location: 'St. Moritz, Switzerland' },

  // AUSTRIA
  { icao: 'LOWW', iata: 'VIE', name: 'Vienna International Airport', city: 'Vienna', country: 'Austria', location: 'Vienna, Austria' },
  { icao: 'LOWS', iata: 'SZG', name: 'Salzburg Airport', city: 'Salzburg', country: 'Austria', location: 'Salzburg, Austria' },
  { icao: 'LOWI', iata: 'INN', name: 'Innsbruck Airport', city: 'Innsbruck', country: 'Austria', location: 'Innsbruck, Austria' },

  // NETHERLANDS
  { icao: 'EHAM', iata: 'AMS', name: 'Amsterdam Schiphol Airport', city: 'Amsterdam', country: 'Netherlands', location: 'Amsterdam, Netherlands' },
  { icao: 'EHRD', iata: 'RTM', name: 'Rotterdam The Hague Airport', city: 'Rotterdam', country: 'Netherlands', location: 'Rotterdam, Netherlands' },
  { icao: 'EHAM', iata: 'EIN', name: 'Eindhoven Airport', city: 'Eindhoven', country: 'Netherlands', location: 'Eindhoven, Netherlands' },

  // BELGIUM
  { icao: 'EBBR', iata: 'BRU', name: 'Brussels Airport', city: 'Brussels', country: 'Belgium', location: 'Brussels, Belgium' },
  { icao: 'EBAW', iata: 'ANR', name: 'Antwerp Airport', city: 'Antwerp', country: 'Belgium', location: 'Antwerp, Belgium' },

  // GREECE
  { icao: 'LGAV', iata: 'ATH', name: 'Athens International Airport', city: 'Athens', country: 'Greece', location: 'Athens, Greece' },
  { icao: 'LGTS', iata: 'SKG', name: 'Thessaloniki Airport', city: 'Thessaloniki', country: 'Greece', location: 'Thessaloniki, Greece' },
  { icao: 'LGIR', iata: 'HER', name: 'Heraklion Airport', city: 'Heraklion', country: 'Greece', location: 'Crete, Greece' },
  { icao: 'LGSR', iata: 'JTR', name: 'Santorini Airport', city: 'Santorini', country: 'Greece', location: 'Santorini, Greece' },
  { icao: 'LGMK', iata: 'JMK', name: 'Mykonos Airport', city: 'Mykonos', country: 'Greece', location: 'Mykonos, Greece' },

  // PORTUGAL
  { icao: 'LPPT', iata: 'LIS', name: 'Lisbon Portela Airport', city: 'Lisbon', country: 'Portugal', location: 'Lisbon, Portugal' },
  { icao: 'LPPR', iata: 'OPO', name: 'Porto Airport', city: 'Porto', country: 'Portugal', location: 'Porto, Portugal' },
  { icao: 'LPFR', iata: 'FAO', name: 'Faro Airport', city: 'Faro', country: 'Portugal', location: 'Algarve, Portugal' },

  // MIDDLE EAST - UAE
  { icao: 'OMDB', iata: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE', location: 'Dubai, UAE' },
  { icao: 'OMDW', iata: 'DWC', name: 'Al Maktoum International Airport', city: 'Dubai', country: 'UAE', location: 'Dubai, UAE' },
  { icao: 'OMAA', iata: 'AUH', name: 'Abu Dhabi International Airport', city: 'Abu Dhabi', country: 'UAE', location: 'Abu Dhabi, UAE' },
  { icao: 'OMSJ', iata: 'SHJ', name: 'Sharjah International Airport', city: 'Sharjah', country: 'UAE', location: 'Sharjah, UAE' },

  // QATAR
  { icao: 'OTHH', iata: 'DOH', name: 'Hamad International Airport', city: 'Doha', country: 'Qatar', location: 'Doha, Qatar' },

  // SAUDI ARABIA
  { icao: 'OERK', iata: 'RUH', name: 'King Khalid International Airport', city: 'Riyadh', country: 'Saudi Arabia', location: 'Riyadh, Saudi Arabia' },
  { icao: 'OEJN', iata: 'JED', name: 'King Abdulaziz International Airport', city: 'Jeddah', country: 'Saudi Arabia', location: 'Jeddah, Saudi Arabia' },
  { icao: 'OEDF', iata: 'DMM', name: 'King Fahd International Airport', city: 'Dammam', country: 'Saudi Arabia', location: 'Dammam, Saudi Arabia' },

  // USA - Major Hubs
  { icao: 'KJFK', iata: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', country: 'USA', location: 'New York, USA' },
  { icao: 'KLAX', iata: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles', country: 'USA', location: 'Los Angeles, USA' },
  { icao: 'KORD', iata: 'ORD', name: 'O\'Hare International Airport', city: 'Chicago', country: 'USA', location: 'Chicago, USA' },
  { icao: 'KMIA', iata: 'MIA', name: 'Miami International Airport', city: 'Miami', country: 'USA', location: 'Miami, USA' },
  { icao: 'KEWR', iata: 'EWR', name: 'Newark Liberty International Airport', city: 'Newark', country: 'USA', location: 'New York, USA' },
  { icao: 'KSFO', iata: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco', country: 'USA', location: 'San Francisco, USA' },
  { icao: 'KBOS', iata: 'BOS', name: 'Logan International Airport', city: 'Boston', country: 'USA', location: 'Boston, USA' },
  { icao: 'KATL', iata: 'ATL', name: 'Hartsfield-Jackson Atlanta International', city: 'Atlanta', country: 'USA', location: 'Atlanta, USA' },
  { icao: 'KDFW', iata: 'DFW', name: 'Dallas/Fort Worth International Airport', city: 'Dallas', country: 'USA', location: 'Dallas, USA' },
  { icao: 'KLAS', iata: 'LAS', name: 'Harry Reid International Airport', city: 'Las Vegas', country: 'USA', location: 'Las Vegas, USA' },
  { icao: 'KSEA', iata: 'SEA', name: 'Seattle-Tacoma International Airport', city: 'Seattle', country: 'USA', location: 'Seattle, USA' },
  { icao: 'KDEN', iata: 'DEN', name: 'Denver International Airport', city: 'Denver', country: 'USA', location: 'Denver, USA' },
  { icao: 'KPHX', iata: 'PHX', name: 'Phoenix Sky Harbor International', city: 'Phoenix', country: 'USA', location: 'Phoenix, USA' },
  { icao: 'KTEB', iata: 'TEB', name: 'Teterboro Airport', city: 'Teterboro', country: 'USA', location: 'New York, USA' },

  // CANADA
  { icao: 'CYYZ', iata: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto', country: 'Canada', location: 'Toronto, Canada' },
  { icao: 'CYVR', iata: 'YVR', name: 'Vancouver International Airport', city: 'Vancouver', country: 'Canada', location: 'Vancouver, Canada' },
  { icao: 'CYUL', iata: 'YUL', name: 'Montréal-Trudeau International Airport', city: 'Montreal', country: 'Canada', location: 'Montreal, Canada' },

  // RUSSIA
  { icao: 'UUEE', iata: 'SVO', name: 'Sheremetyevo International Airport', city: 'Moscow', country: 'Russia', location: 'Moscow, Russia' },
  { icao: 'UUDD', iata: 'DME', name: 'Domodedovo International Airport', city: 'Moscow', country: 'Russia', location: 'Moscow, Russia' },
  { icao: 'ULLI', iata: 'LED', name: 'Pulkovo Airport', city: 'St. Petersburg', country: 'Russia', location: 'St. Petersburg, Russia' },

  // ASIA - CHINA
  { icao: 'ZBAA', iata: 'PEK', name: 'Beijing Capital International Airport', city: 'Beijing', country: 'China', location: 'Beijing, China' },
  { icao: 'ZSPD', iata: 'PVG', name: 'Shanghai Pudong International Airport', city: 'Shanghai', country: 'China', location: 'Shanghai, China' },
  { icao: 'ZGSZ', iata: 'CAN', name: 'Guangzhou Baiyun International Airport', city: 'Guangzhou', country: 'China', location: 'Guangzhou, China' },
  { icao: 'ZUUU', iata: 'CTU', name: 'Chengdu Shuangliu International Airport', city: 'Chengdu', country: 'China', location: 'Chengdu, China' },

  // JAPAN
  { icao: 'RJTT', iata: 'HND', name: 'Tokyo Haneda Airport', city: 'Tokyo', country: 'Japan', location: 'Tokyo, Japan' },
  { icao: 'RJAA', iata: 'NRT', name: 'Narita International Airport', city: 'Tokyo', country: 'Japan', location: 'Tokyo, Japan' },
  { icao: 'RJBB', iata: 'KIX', name: 'Kansai International Airport', city: 'Osaka', country: 'Japan', location: 'Osaka, Japan' },

  // SINGAPORE
  { icao: 'WSSS', iata: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore', country: 'Singapore', location: 'Singapore' },

  // HONG KONG
  { icao: 'VHHH', iata: 'HKG', name: 'Hong Kong International Airport', city: 'Hong Kong', country: 'Hong Kong', location: 'Hong Kong' },

  // SOUTH KOREA
  { icao: 'RKSI', iata: 'ICN', name: 'Incheon International Airport', city: 'Seoul', country: 'South Korea', location: 'Seoul, South Korea' },

  // INDIA
  { icao: 'VIDP', iata: 'DEL', name: 'Indira Gandhi International Airport', city: 'New Delhi', country: 'India', location: 'New Delhi, India' },
  { icao: 'VABB', iata: 'BOM', name: 'Chhatrapati Shivaji Maharaj International', city: 'Mumbai', country: 'India', location: 'Mumbai, India' },

  // AUSTRALIA
  { icao: 'YSSY', iata: 'SYD', name: 'Sydney Kingsford Smith Airport', city: 'Sydney', country: 'Australia', location: 'Sydney, Australia' },
  { icao: 'YMML', iata: 'MEL', name: 'Melbourne Airport', city: 'Melbourne', country: 'Australia', location: 'Melbourne, Australia' },

  // SOUTH AMERICA - BRAZIL
  { icao: 'SBGR', iata: 'GRU', name: 'São Paulo/Guarulhos International Airport', city: 'São Paulo', country: 'Brazil', location: 'São Paulo, Brazil' },
  { icao: 'SBGL', iata: 'GIG', name: 'Rio de Janeiro-Galeão International', city: 'Rio de Janeiro', country: 'Brazil', location: 'Rio de Janeiro, Brazil' },

  // SOUTH AFRICA
  { icao: 'FAOR', iata: 'JNB', name: 'O.R. Tambo International Airport', city: 'Johannesburg', country: 'South Africa', location: 'Johannesburg, South Africa' },
  { icao: 'FACT', iata: 'CPT', name: 'Cape Town International Airport', city: 'Cape Town', country: 'South Africa', location: 'Cape Town, South Africa' },

  // SCANDINAVIA
  { icao: 'EKCH', iata: 'CPH', name: 'Copenhagen Airport', city: 'Copenhagen', country: 'Denmark', location: 'Copenhagen, Denmark' },
  { icao: 'ESSA', iata: 'ARN', name: 'Stockholm Arlanda Airport', city: 'Stockholm', country: 'Sweden', location: 'Stockholm, Sweden' },
  { icao: 'ENGM', iata: 'OSL', name: 'Oslo Gardermoen Airport', city: 'Oslo', country: 'Norway', location: 'Oslo, Norway' },
  { icao: 'EFHK', iata: 'HEL', name: 'Helsinki-Vantaa Airport', city: 'Helsinki', country: 'Finland', location: 'Helsinki, Finland' },

  // IRELAND
  { icao: 'EIDW', iata: 'DUB', name: 'Dublin Airport', city: 'Dublin', country: 'Ireland', location: 'Dublin, Ireland' },

  // CZECH REPUBLIC
  { icao: 'LKPR', iata: 'PRG', name: 'Václav Havel Airport Prague', city: 'Prague', country: 'Czech Republic', location: 'Prague, Czech Republic' },

  // HUNGARY
  { icao: 'LHBP', iata: 'BUD', name: 'Budapest Ferenc Liszt International', city: 'Budapest', country: 'Hungary', location: 'Budapest, Hungary' },

  // ROMANIA
  { icao: 'LROP', iata: 'OTP', name: 'Henri Coandă International Airport', city: 'Bucharest', country: 'Romania', location: 'Bucharest, Romania' },

  // CROATIA
  { icao: 'LDZA', iata: 'ZAG', name: 'Zagreb Airport', city: 'Zagreb', country: 'Croatia', location: 'Zagreb, Croatia' },
  { icao: 'LDSP', iata: 'SPU', name: 'Split Airport', city: 'Split', country: 'Croatia', location: 'Split, Croatia' },

  // MONACO
  { icao: 'LFMN', iata: 'MCM', name: 'Monaco Heliport', city: 'Monaco', country: 'Monaco', location: 'Monaco' },

  // LUXEMBOURG
  { icao: 'ELLX', iata: 'LUX', name: 'Luxembourg Airport', city: 'Luxembourg', country: 'Luxembourg', location: 'Luxembourg' },
];
