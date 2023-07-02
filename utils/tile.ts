const mergeTiles = (tiles_default: any, tiles_user: any) => {
    if (!tiles_user || tiles_user.length === 0) {
        return tiles_default;
    }
    const tiles = tiles_default.map((tile: any) => {
        const tile_user = tiles_user.find((tile_user: any) => tile_user.date === tile.date);
        if (tile_user) {
            return tile_user;
        } else {
            return tile;
        }
    });
    return tiles;
}

const editTile = (tiles: any, date: string, mood: string, description: string) => {
    const tile = tiles.find((tile: any) => tile.date === date);
    if (tile) {
        tile.mood = mood;
        tile.description = description;
    } else {
        tiles.push({
            date: date,
            mood: mood,
            description: description,
        });
    }
    console.log(tiles);
}

export { mergeTiles, editTile };