CREATE TABLE jogadores (
	id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    tag VARCHAR(100),
    playtime VARCHAR(100),
    matches VARCHAR(100),
    rating VARCHAR(100),
    level VARCHAR(100),
    loses VARCHAR(100),
    damage_round VARCHAR(100),
    headshot VARCHAR(100),
    win VARCHAR(100),
    wins VARCHAR(100),
    kills VARCHAR(100),
    deaths VARCHAR(100),
    assists VARCHAR(100),
    kad_ratio VARCHAR(100),
    kills_round VARCHAR(100),
    clutches VARCHAR(100),
    top_agents_1 VARCHAR(255),
    top_hours_agent_1 VARCHAR(100),
    top_matches_agent_1 VARCHAR(100),
    top_win_agent_1 VARCHAR(100),
    top_kd_agent_1 VARCHAR(100),
    top_weapon_1 VARCHAR(255),
    top_weapon_headshot_1 VARCHAR(100),
    top_weapon_2 VARCHAR(255),
    top_weapon_headshot_2 VARCHAR(100),
    top_maps_1 VARCHAR(255),
    top_porcentagem_map_win_1 VARCHAR(100)
);

COPY jogadores(id, username, tag, playtime, matches, rating, level, loses, damage_round, headshot, win, wins, kills, deaths, assists, kad_ratio, kills_round, clutches,
			  top_agents_1, top_hours_agent_1, top_matches_agent_1, top_win_agent_1, top_kd_agent_1, top_weapon_1, top_weapon_headshot_1, top_weapon_2, top_weapon_headshot_2, top_maps_1, top_porcentagem_map_win_1) FROM 'c:\db-vava.csv' DELIMITER ',' CSV HEADER;
